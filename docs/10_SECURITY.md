# 10. Security Implementation

Menerapkan prinsip **Zero Trust Architecture**.

## 1. Application Security

- **Input Validation**: **Zod** schema di semua Server Action. Jangan pernah percaya input user.
- **XSS Protection**: React secara default meng-escape interpole variables. Untuk konten Rich Text (HTML), gunakan library `dompurify` di server sebelum simpan, atau di client sebelum render.
- **CSRF**: Next.js Server Actions aman dari CSRF secara default karena menggunakan token internal host protection.

## 2. Database Security

- **Prepared Statements**: Drizzle ORM menggunakan parameterized queries, 100% aman dari SQL Injection klasik.
- **Connection Pooling**: Menggunakan Supabase Transaction Pooler / PgBouncer untuk mencegah exhaustion koneksi DB saat traffic spike.

## 3. Access Control (Middleware)

Menggunakan `middleware.ts` Next.js untuk memblokir akses rute:

- `/dashboard/*` -> Hanya bisa diakses user dengan role `admin` atau `editor`.
- `Login Page` -> Redirect ke Dashboard jika sudah login.

## 4. Rate Limiting (Anti DDoS/Spam)

Mencegah bot spam komentar atau brute force login.

- Menggunakan `@upstash/ratelimit` (Redis based).
- Rule: Max 5 login attempt per 10 menit per IP.
- Rule: Max 1 komentar per menit per user.
