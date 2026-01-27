# Modular UI Architecture

Direktori ini (`UI/src`) adalah implementasi "Low-Code / No-Build" dari arsitektur Modular Monolith yang dijelaskan di `docs/01_ARCHITECTURE.md`.

## Struktur Folder

Folder ini mencerminkan struktur yang akan digunakan pada project Next.js yang sebenarnya:

```
src/
├── app/                  # Presentation Layer (Halaman Utama)
│   └── page.html         # "Server Component" yang menyusun halaman
├── modules/              # Fitur / Domain Logic
│   └── news/             # Domain Berita
│       └── components/   # Komponen UI spesifik berita (Hero, Grid)
├── lib/                  # Shared Components
│   └── components/       # Komponen Global (Navbar, Footer)
```

## Cara Kerja (Konsep)

1.  **Atomik & Terisolasi**: Setiap file HTML di `modules` atau `lib` hanya berisi kode untuk komponen itu sendiri (HTML Fragment).
2.  **Assembly**: File `app/page.html` berfungsi sebagai "halaman utama" yang menyusun komponen-komponen tersebut. Karena ini hanyalah HTML statis tanpa React/Next.js, kita menggunakan script sederhana untuk memuat komponen (`fetch` & insert).

## Mengapa Struktur Ini?

Tujuannya adalah agar Anda dapat memvisualisasikan bagaimana **Separation of Concerns** (Pemisahan Tugas) bekerja:

- Jika ingin mengubah Navbar, edit `lib/components/Navbar.html`.
- Jika ingin mengubah tampilan Grid Berita, edit `modules/news/components/NewsGrid.html`.
- Jika ingin mengubah tata letak halaman utama, edit `app/page.html`.

Ini mencegah satu file raksasa (`index.html`) yang sulit dikelola.
