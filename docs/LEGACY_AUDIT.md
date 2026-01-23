# Audit Website Berita Lama (@website-berita)

Dokumen ini menganalisis kode yang ada (`c:\Users\Izumi\Documents\Project\website\website-berita`) berdasarkan standar modern dan 12 poin arsitektur yang Anda minta.

## 1. Architecture (Arsitektur)

- **Current**: **Traditional Monolith (Spaghetti Code)**. Logika database (`SQL`), logika bisnis, dan tampilan (`HTML`) tercampur dalam satu file (contoh: `index.php`).
- **Masalah**: Sangat sulit dimaintain. Jika ingin mengubah tampilan, risiko merusak logika database sangat besar. Tidak scalable.

## 2. Tech Stack

- **Frontend**: HTML5, jQuery (implied), Bootstrap 4.
- **Backend**: Native PHP (Procedural).
- **Database**: MySQL.
- **Masalah**: Teknologi usang (Bootstrap 4, Native PHP tanpa framework). Tidak ada Type Safety.

## 3. Data Modeling

- **Schema**: Tabel `news`, `categories`, `users` (terlihat dari query JOIN di `index.php`).
- **Masalah**: Tidak ada Relationship Constraint yang jelas di level kode. Data integritas bergantung sepenuhnya pada disiplin programmer.

## 4. API Design

- **Current**: **Non-existent**. Frontend dan Backend menyatu (Server-Side Rendering tradisional).
- **Masalah**: Tidak bisa digunakan oleh Mobile App atau Client lain. Tidak ada dokumentasi.

## 5. Security (Kritis)

- **SQL Injection**: Menggunakan string concatenation di beberapa bagian query.
- **XSS (Cross Site Scripting)**: Melakukan `echo $var` langsung tanpa sanitasi HTML yang ketat.
- **Auth**: Logic login manual di `admin/login.php`. Risiko session hijacking tinggi.
- **Hardcoded Secret**: Password database mungkin tays di `config.php`.

## 6. Performance

- **Database Load**: Menggunakan `ORDER BY RAND()` (di baris 195 `index.php`) adalah "dosa besar" dalam SQL karena sangat berat untuk database besar.
- **N+1 Problem**: Query loop di dalam loop view.

## 7. UI/UX

- **Desain**: Bootstrap standar, terlihat kaku dan "template banget".
- **UX**: User Experience standar tanpa interaksi modern (micro-interactions, smooth transition).

---

**Kesimpulan**: Codebase ini sebaiknya **TIDAK DITERUSKAN** atau direfactor. Lebih efisien membangun ulang (Rewrite) dengan arsitektur modern untuk keamanan dan skalabilitas jangka panjang.
