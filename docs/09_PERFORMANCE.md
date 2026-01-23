# 09. Performance Strategy

Website berita harus cepat. Target **Core Web Vitals** semua hijau.

## 1. Caching Strategy

- **Static First (ISR)**: Halaman detail berita lama yang tidak mungkin berubah lagi diset sebagai Static HTML.
- **Dynamic Caching**: Untuk Homepage, cache selama 60 detik. Jadi database hanya di-hit 1x per menit meski ada 1000 visitor.
- **CDN (Content Delivery Network)**: Asset statis JS/CSS/Images diserve via Edge Network (Vercel Edge/Cloudflare).

## 2. Image Optimization

- **Format**: Convert otomatis ke WebP/AVIF.
- **Lazy Loading**: Gambar di bawah fold (footer, berita related) tidak di-download browser sampai user scroll ke sana.
- **Blur Placeholder**: Tampilkan blur warna dominan saat gambar sedang loading.

## 3. Bundle Size Optimization

- **Tree Shaking**: Import komponen spesifik saja. `import { Button } from 'UI'` bukan `import * as UI`.
- **Code Splitting**: Next.js otomatis memecah JS per route. Halaman About tidak akan meload JS halaman Dashboard.
- **Dynamic Imports**: Komponen berat (misal: Rich Text Editor, Chart Chart) di-load menggunakan `next/dynamic` hanya saat dibutuhkan client.

## 4. Fonts

- Menggunakan `next/font`: Font di-download saat build time dan di-hosting sendiri (self-hosted). Tidak ada request ke Google Fonts yang blocking render.
