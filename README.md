# Modern News Portal (Rebuild Project)

Project ini adalah inisiatif **modernisasi total** dari sistem website berita legacy (`website-berita`). Fokus utama kami adalah membangun platform berita yang **aman, ultra-cepat, dan scalable** menggunakan teknologi web standar industri terkini, tanpa menghilangkan fitur-fitur krusial dari sistem lama.

---

## � Technology Stack

Kami menggunakan stack **"Modern namun Stabil"** untuk menjamin performa jangka panjang dan kemudahan maintenance:

| Komponen       | Teknologi                                      | Alasan Pemilihan                                                                                            |
| :------------- | :--------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| **Framework**  | [Next.js 15 (App Router)](https://nextjs.org/) | Standar de-facto React masa kini. Mendukung Server Components (RSC) untuk performa maksimal & SEO friendly. |
| **Bahasa**     | [TypeScript](https://www.typescriptlang.org/)  | Strict Type Safety untuk mencegah bug di level kode (Compile-time error prevention).                        |
| **Database**   | [PostgreSQL](https://www.postgresql.org/)      | Relational DB paling robust, open-source, dan memiliki fitur Full-Text Search yang hebat.                   |
| **ORM**        | [Drizzle ORM](https://orm.drizzle.team/)       | Ringan, cepat (SQL-like), dan Type-safe. Jauh lebih efisien dibanding Prisma untuk high-traffic.            |
| **Styling**    | [Tailwind CSS](https://tailwindcss.com/)       | Utilitas CSS first-class untuk styling cepat dan konsisten.                                                 |
| **UI Library** | [Shadcn/UI](https://ui.shadcn.com/)            | Komponen estetis, aksesibel, dan mudah dikustomisasi (Copy-paste architecture).                             |
| **Auth**       | [Better-Auth](https://better-auth.com/)        | Solusi autentikasi modern, aman, dan mendukung banyak provider (Google, Email/Pass).                        |
| **Editor**     | [Tiptap](https://tiptap.dev/)                  | Headless WYSIWYG editor untuk pengalaman menulis berita yang kaya (seperti Medium/Notion).                  |

---

## 🏗️ Arsitektur Sistem

Kami menerapkan pola **Modular Monolith** dengan pendekatan **Domain-Driven Design (DDD)**.

- **Modular**: Kode tidak dikelompokkan hanya berdasarkan jenis file (seperti `controllers`, `components`), tetapi berdasarkan **Domain Fitur** (contoh: `modules/news`, `modules/auth`, `modules/ads`). Hal ini memudahkan maintenance dan isolasi fitur.
- **Layered**: Pemisahan tegas antara UI Layer, Business Logic Layer, dan Data Access Layer.
- **Shared Packages**: (Rencana Masa Depan) Memisahkan UI System (`packages/ui`) dan Database Schema (`packages/db`) untuk skalabilitas.

Selengkapnya lihat [docs/01_ARCHITECTURE.md](docs/01_ARCHITECTURE.md).

---

## � Fitur Utama

### 1. Sistem Berita (Core)

- **High Performance Homepage**:
  - **Breaking News**: Section headline dinamis dengan caching agresif.
  - **Trending Topics**: Agregasi data populer yang di-cache.
  - **Popular News**: Kalkulasi statistik views yang efisien.
- **Pengalaman Membaca Imersif**:
  - Layout bersih, tipografi yang nyaman (Inter + Merriweather).
  - Loading ultra-cepat (Skeleton Loading & Optimistic UI).
  - **Related News**: Rekomendasi berita cerdas berdasarkan kategori/tag.

### 2. Content Management System (CMS) & Admin

- **Rich Text Editor**: Penulisan berita dengan format lengkap (Bold, Italic, Image Upload) menggunakan Tiptap.
- **Ads Management**: Pengaturan slot iklan (Banner Atas, Sidebar, Tengah Konten) dengan kontrol tanggal tayang.
- **Role-Based Access Control (RBAC)**:
  - **Super Admin**: Akses penuh sistem.
  - **Editor**: Review & Publish berita.
  - **Journalist**: Tulis draft berita.

### 3. Engagement & Interaksi

- **Komentar**: Diskusi berjenjang (Threaded Comments).
- **Reactions**: Ekspresi pembaca (Like, Love, Sad, dll).
- **Social Share**: Integrasi mudah ke WhatsApp, Twitter/X, Facebook.

### 4. SEO & Performa

- **SEO Optimized**: Dynamic Metadata, JSON-LD Schema (NewsArticle), Sitemap otomatis.
- **Full Text Search**: Pencarian berita cepat dan relevan menggunakan PostgreSQL `tsvector`.
- **Image Optimization**: Konversi otomatis ke WebP/AVIF menggunakan `next/image`.

---

## 📂 Struktur Project

```
root/
├── docs/                     # 🧠 OTAK PROJECT. Dokumentasi lengkap & Spesifikasi.
│   ├── 00_PROJECT_RULES.md   # [WAJIB BACA] Aturan main kontribusi.
│   ├── 01_ARCHITECTURE.md    # Detail arsitektur sistem.
│   ├── 07_CORE_FEATURES.md   # Spesifikasi detail fitur.
│   └── ...
├── website-berita/           # 🏛️ LEGACY. Referensi kode lama (PHP Native).
├── new-portal/               # ✨ MODERN. Source code aplikasi Next.js (Work in Progress).
│   ├── src/
│   │   ├── app/              # Next.js App Router (Pages & Layouts).
│   │   ├── components/       # Reusable UI Components.
│   │   ├── lib/              # Utilities & Helper functions.
│   │   ├── modules/          # Business Logic (Features).
│   │   └── db/               # Database Schema & Migrations.
│   └── public/               # Static Assets.
└── README.md                 # File ini.
```

---

## 🛡️ Aturan Kontribusi (Governance)

Project ini dijalankan dengan standar engineering yang ketat demi kualitas. Silakan baca **[docs/00_PROJECT_RULES.md](docs/00_PROJECT_RULES.md)** sebelum memulai.

**3 Aturan Emas:**

1.  **Docs First**: Jangan menulis kode sebelum dokumentasi/spesifikasi diupdate.
2.  **Strict Typing**: Dilarang keras menggunakan `any`. Gunakan Interface/Type yang jelas.
3.  **Semantic Commit**: Gunakan pesan commit yang jelas (contoh: `feat: add news slider`, `fix: pagination bug`).

---

## 🏃 Cara Menjalankan (Development)

Pastikan Anda sudah menginstal **Node.js 20+** dan **pnpm**.

1.  **Clone & Masuk Direktori**:

    ```bash
    git clone <repo-url>
    cd website-berita-news/new-portal
    ```

2.  **Install Dependencies**:

    ```bash
    pnpm install
    ```

3.  **Setup Environment Variables**:
    Copy `.env.example` ke `.env.local` dan isi kredensial database (PostgreSQL).

    ```bash
    cp .env.example .env.local
    ```

4.  **Database Migration**:
    Jalankan migrasi untuk membuat tabel-tabel database.

    ```bash
    pnpm db:push
    ```

5.  **Jalankan Server Development**:
    ```bash
    pnpm dev
    ```
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

_Dokumentasi ini terakhir diupdate: Januari 2026_
