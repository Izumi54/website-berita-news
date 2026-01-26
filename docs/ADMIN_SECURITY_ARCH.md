# Security Architecture: Admin Dashboard & CMS 🛡️

Dokumen ini merinci strategi keamanan untuk modul Admin Dashboard, mengikuti standar **OWASP Top 10** dan prinsip **Security by Design**.

## 1. Threat Model & Risk Analysis

| Threat                                | Risk Level | Mitigation Strategy                                                                     |
| :------------------------------------ | :--------- | :-------------------------------------------------------------------------------------- |
| **Brute Force Attacks**               | High       | Rate Limiting (5 attempts/min), Captcha pada login gagal, Account Lockout.              |
| **XSS (Cross-Site Scripting)**        | High       | Input sanitization (DOMPurify) pada Content Editor, CSP Headers.                        |
| **CSRF (Cross-Site Request Forgery)** | Medium     | SameSite=Strict Cookies, Anti-CSRF Tokens pada setiap form mutasi.                      |
| **Session Hijacking**                 | High       | HttpOnly Cookies, Secure Flag (HTTPS only), Short-lived Sessions (15 min idle timeout). |
| **Privilege Escalation**              | Critical   | Strict RBAC (Role-Based Access Control) check di Middleware & Database level.           |

## 2. Authentication & Session Management

### 2.1. Login Protocol

- **Password Policy**: Min 12 karakter, kombinasi huruf besar, kecil, angka, simbol (NIST Guidelines).
- **Hashing**: Argon2id (bukan MD5/SHA1).
- **MFA (Multi-Factor Authentication)**: Wajib untuk role `Super Admin` dan `Chief Editor`. Menggunakan TOTP (Google Authenticator).

### 2.2. Session Security

- **Storage**: JANGAN simpan token di `localStorage` (rentan XSS). Gunakan **HttpOnly Cookies**.
- **Rotation**: Regenerate Session ID setiap kali login sukses.
- **Timeout**: Auto-logout jika tidak ada aktivitas selama 15 menit.

## 3. Authorization (RBAC Matrix)

Pemisahan hak akses yang ketat untuk mencegah kebocoran data atau vandalisme.

| Feature             | Super Admin 👑 |  Chief Editor 👔  |   Journalist ✍️   |
| :------------------ | :------------: | :---------------: | :---------------: |
| **Manage Users**    | ✅ Full Access |   ❌ No Access    |   ❌ No Access    |
| **Publish News**    |     ✅ Yes     | ✅ Yes (Approval) |   ❌ Draft Only   |
| **Delete News**     |     ✅ Yes     |      ✅ Yes       |   ❌ No Access    |
| **View Analytics**  |  ✅ Full Data  |   ✅ Full Data    | ⚠️ Own Stats Only |
| **System Settings** | ✅ Full Access |   ❌ No Access    |   ❌ No Access    |

## 4. UI Security (Frontend Implementation)

Meskipun keamanan sejati ada di backend, UI harus mendukung praktik keamanan (Defense in Depth).

### 4.1. Login Page UI

- **Password Visibility Toggle**: Agar user tidak salah ketik (mengurangi failed attempts).
- **Generic Error Messages**: "Invalid email or password" (JANGAN beri tahu "Email tidak ditemukan").
- **Bot Protection**: Placeholder untuk Cloudflare Turnstile / reCAPTCHA.

### 4.2. Dashboard UI

- **Role Indicator**: Selalu tampilkan role user yang sedang login di Navbar.
- **Idle Detection**: Tampilkan modal "Session Expiring in 60s" sebelum auto-logout.
- **Audit Log View**: Admin bisa melihat "Siapa mengubah artikel apa dan kapan".

## 5. Data Protection

- **Encryption at Rest**: Database volume terenkripsi.
- **Encryption in Transit**: TLS 1.3 (HTTPS) Only. HSTS Enabled.
- **Audit Logging**:
  - Setiap aksi `CREATE`, `UPDATE`, `DELETE` dicatat di tabel `audit_logs`.
  - Format: `[TIMESTAMP] [USER_ID] [ACTION] [RESOURCE_ID] [IP_ADDRESS] [USER_AGENT]`.

---

**Next Steps:**
Implementasi **Secure Login UI** (`UI/admin/login.html`) yang mencerminkan standar keamanan di atas.
