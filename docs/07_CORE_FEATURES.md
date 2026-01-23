# 07. Core Features Specification

## 1. Authentication & Authorization (RBAC)

- **Multi-role**: Super Admin (System), Editor (Publish), Journalist (Draft), Subscriber.
- **Auth**: Email/Password + Google OAuth (Better-Auth).

## 2. Content Management System (CMS)

- **News Editor**: Rich Text (Tiptap) dengan support Image Upload.
- **Ads Manager**: CRUD Iklan sesuai legacy (Set Posisi, Tanggal Tayang, Gambar).

## 3. Public News Features (Legacy Mappings)

Fitur-fitur ini wajib ada untuk mempertahankan struktur `website-berita` lama namun dengan teknologi baru.

### A. Homepage Structure (`index.php`)

1.  **Breaking News Banner**:
    - Layout: Gambar besar di kiri, Judul & Meta di overlay/bawah.
    - Logic Modern: `SELECT * FROM news ORDER BY created_at DESC LIMIT 1`. (Cached).
2.  **Popular News Widget (Sidebar)**:
    - Layout: List vertical kecil dengan thumbnail 64x64px.
    - Logic Modern: Query ke tabel `news_stats` sort by `views_count`.
3.  **Trending Topics**:
    - Tampilan: Grid/Flexbox kategori dengan badge jumlah berita.
    - Legacy Issue: Query berat `GROUP BY`.
    - Modern Solution: Cache hasil agregasi ini atau update count di tabel `categories` saat berita dipublish.
4.  **Berita Pilihan (Random/Recommendation)**:
    - Legacy: `ORDER BY RAND()`.
    - Modern: Random selection di application layer yang di-cache per jam (agar performa tetap cepat dan tidak membebani DB).

### B. Detail Berita (`berita.php`)

1.  **Breadcrumbs**: Navigasi hirarkis `Home > Kategori > Judul`.
2.  **Meta Data**: Penulis, Tanggal, Jumlah Views (Real-time/Optimistic).
3.  **Social Share**: Tombol WA, Twitter, FB, Copy Link (Implementasi Client Component).
4.  **Related News**: 4 Berita dari kategori yang sama (`WHERE category_id = current AND id != current`).
5.  **Dynamic Ads**:
    - Slot: Top (Atas Header), Sidebar, Content (Disisipkan otomatis setelah paragraf ke-X), Footer.

### C. Search & Category (`search.php`, `kategori.php`)

- **Filter**: Dropdown Kategori di halaman search.
- **Pagination**: Numbered pagination (1, 2, 3...) standard UI, bukan infinite scroll (sesuai legacy request).
- **Search Logic**: Full Text Search (bukan `LIKE %...%`) untuk hasil lebih relevan.

## 4. Engagement

- **Komentar**: Threaded comments (balas-membalas).
- **Reactions**: Like / Love / Sad emojis (Modern addition).
