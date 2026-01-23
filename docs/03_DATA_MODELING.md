# 03. Data Modeling (Database Schema)

Menggunakan PostgreSQL. Schema didefinisikan menggunakan Drizzle ORM.
Struktur ini mengadaptasi kebutuhan fitur legacy (Ads, Views) dengan standar modern.

## Entity Relationship Diagram (Conceptual)

### 1. Users & Auth

Menyimpan data pengguna dan hak akses.

- **users**: `id (uuid)`, `email`, `password_hash`, `role` (enum: 'super_admin', 'editor', 'journalist', 'subscriber'), `name`, `avatar_url`, `created_at`.
- **sessions**: `id`, `user_id`, `token`, `expires_at` (Untuk auth management).

### 2. Content Management (News)

Inti dari sistem berita.

- **categories**: `id`, `name`, `slug` (unique), `description`.
- **news**:
  - `id` (uuid)
  - `slug` (unique, indexed) - untuk URL SEO friendly.
  - `title` (varchar 255)
  - `content` (json/text) - menyimpan konten Rich Text.
  - `excerpt` (text) - ringkasan untuk card.
  - `cover_image` (url)
  - `author_id` (FK -> users)
  - `category_id` (FK -> categories)
  - `status` (enum: 'draft', 'review', 'published', 'archived')
  - `published_at` (datetime)
  - `created_at`, `updated_at`.

### 3. Engagement & Analytics

- **comments**: `id`, `news_id`, `user_id`, `content`, `parent_id` (nested), `is_approved`. (Replikasi fitur komentar legacy jika ada, atau upgrade).
- **news_stats** (Formerly directly on `news` table):
  - `news_id`, `views_count` (Migrasi dari `news.views` yang di-update setiap page load di legacy).
  - `shares_count`.

### 4. Ads Management (Legacy Feature Porting)

Fitur manajemen iklan dinamis dari `iklan.php` perlu dipertahankan.

- **ads**:
  - `id`
  - `position` (enum: 'top', 'sidebar', 'content', 'footer') - Sesuai `includes/iklan.php`.
  - `type` (enum: 'image', 'html')
  - `content` (text/html) or `image_url`
  - `link_url` (tujuan klik iklan).
  - `status` (enum: 'active', 'inactive')
  - `start_date`, `end_date` (Logic: `WHERE date BETWEEN start AND end`).

## Indexing Strategy

- `news(slug)`: Index Unique untuk pencarian berita cepat.
- `news(published_at, status)`: Index Composite untuk query "Berita Terbaru".
- `news(search_vector)`: GIN Index untuk Full Text Search (Judul + Konten).
