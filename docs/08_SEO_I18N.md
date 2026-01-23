# 08. SEO & Internationalization (i18n)

## Search Engine Optimization (SEO)

SEO adalah nyawa website berita. Next.js App Router memberikan kontrol granular.

### Teknis

- **Metadata API**: Setiap halaman melakukan fetch data di server untuk generate `<title>` dan `<meta description>` dinamis.
- **Semantic HTML**: Menggunakan tag `<article>`, `<header>`, `<main>`, `<aside>` yang benar.
- **Image Optimization**: `alt` text wajib untuk semua gambar berita. `next/image` otomatis generate `srcset`.
- **Sitemap.xml**: Generate otomatis setiap ada berita baru (dynamic sitemap).
- **Robots.txt**: Mengatur crawler policy.

### Structured Data (Schema.org)

Implementasi JSON-LD untuk memancing **Rich Snippets** di Google Search.

- `NewsArticle`: Untuk halaman detail berita (memunculkan tanggal terbit, penulis, headline).
- `BreadcrumbList`: Struktur navigasi.
- `Organization`: Identitas media.

## Internationalization (i18n) - _Jika Perlu_

Jika website menargetkan pembaca global.

- **Routing**: `id.domain.com` atau `domain.com/en`.
- **Library**: `next-intl`.
- **Content Strategy**: Kolom database terpisah untuk terjemahan (`title_en`, `content_en`) atau tabel terjemahan terpisah.
  _Catatan: Untuk MVP tahap awal, fokus Bahasa Indonesia dulu._
