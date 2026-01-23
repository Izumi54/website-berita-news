# Technical Blueprint: Modern News Platform

Dokumen ini merinci rencana pembangunan ulang website berita menggunakan standar industri terbaru (2025+).

## 1. Architecture: Modular Monolith

Kita akan menggunakan pendekatan **Modular Monolith** dengan Next.js.

- **Why?** Microservices terlalu kompleks untuk tim kecil/awal. Serverless (Lambda) bisa mahal untuk high-traffic read-heavy seperti berita.
- **Structure**:
  - `apps/web`: Next.js Frontend + Backend (API Routes).
  - `packages/db`: Shared Database Schema.
  - `packages/ui`: Shared Design System.

## 2. Tech Stack

| Layer        | Technology                   | Justification                                                        |
| ------------ | ---------------------------- | -------------------------------------------------------------------- |
| **Frontend** | **Next.js 15 (App Router)**  | De-facto standard untuk React. SSR/ISR wajib untuk SEO Berita.       |
| **Language** | **TypeScript**               | Strict type safety, meminimalisir bug saat runtime.                  |
| **Styling**  | **Tailwind CSS + Shadcn/UI** | Development cepat, mudah kustomisasi, bundle size kecil.             |
| **Backend**  | **Next.js Server Actions**   | Mengurangi boilerplate API, integrasi langsung dengan UI.            |
| **Database** | **PostgreSQL**               | Relational data integrity, JSONB support, Full Text Search powerful. |
| **ORM**      | **Drizzle ORM**              | Performa terbaik (ringan), Type-safe, SQL-like syntax.               |

## 3. Data Modeling (ERD Concept)

- **Users**: Admin, Editors, Writers, Subscribers (RBAC).
- **Posts (News)**: Title, Slug (Indexed), Content (Rich Text), Excerpt, Status (Draft/Published/Archived).
- **Categories & Tags**: Many-to-Many relationships.
- **Analytics**: Table khusus untuk tracking views/clicks (hindari update row `posts` setiap view agar tidak locking).

## 4. API Design

- **Internal**: Server Actions (`actions.ts`) untuk mutasi data (Create/Update berita).
- **External (Future)**: REST API endpoint (`/api/v1/news`) untuk Mobile App consumption.
- **Docs**: OpenAPI (Swagger) jika public API dibuka.

## 5. State Management

- **Server State**: **React Query** (TanStack Query) atau Next.js native `cache()`. Berita adalah data yang sering dibaca, jarang berubah.
- **Client State**: **Zustand** (utk UI state ringan seperti Sidebar toggle, Dark mode preference). URL Search Params untuk filter/search state (agar bisa direfresh/share).

## 6. Design System & UI/UX

- **Framework**: Shadcn/UI (Radix Primitives).
- **Typography**: Inter (UI) + Merriweather (Content/Reading).
- **UX**:
  - **Infinite Scroll** untuk "Berita Lainnya".
  - **Optimistic Updates** saat like/comment (UI berubah duluan sebelum server respons).
  - **Skeleton Loading** agar tidak layout shift (CLS).

## 7. Core Features

- **Auth**: **Better-Auth** (Secure, support 2FA, Social Login).
- **Search**: PostgreSQL `tsvector` (Full Text Search) atau integration dengan Meilisearch.
- **Editor**: **Tiptap** (Headless wysiwyg extension based) untuk pengalaman menulis seperti Medium/Notion.
- **Role Management**: Super Admin, Editor (bisa publish), Contributor (cuma bisa draft).

## 8. SEO & i18n

- **Metadata**: Dynamic generate `metadata` object di Next.js layout.
- **Sitemap**: `next-sitemap` auto generator.
- **Schema**: JSON-LD `NewsArticle` schema untuk Google News carousel.
- **i18n**: `next-intl` jika target audience multi-bahasa.

## 9. Performance

- **Caching**:
  - **Data Cache**: Redis untuk menyimpan hasil query berita populer (TTL 5 menit).
  - **Full Page Cache**: ISR (Incremental Static Regeneration) untuk halaman detail berita.
- **Images**: `next/image` dengan format WebP/AVIF otomatis.

## 10. Security

- **Data Encryption**: HTTPS (Wajib), Bcrypt/Argon2 untuk password.
- **Rate Limiting**: `@upstash/ratelimit` di middleware untuk mencegah DDoS/Spam komentar.
- **Input Sanitization**: Zod Schema Validation di setiap Server Action. `dompurify` untuk render HTML konten berita.
- **Headers**: CSP (Content Security Policy), X-Frame-Options.

## 11. Accessibility (a11y)

- Menggunakan komponen Radix UI yang sudah **AA Compliant** (Keyboard nav, Screen reader friendly).
- Warna kontras tinggi untuk teks berita..

## 12. Deployment & Monitoring

- **CI/CD**: GitHub Actions (Lint -> Test -> Build -> Deploy).
- **Hosting**: Vercel (Recommended untuk Next.js) atau Docker Container di VPS (Coolify).
- **Monitoring**: **Sentry** (Error tracking) + **PostHog** (User Analytics).
