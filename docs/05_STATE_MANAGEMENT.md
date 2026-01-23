# 05. State Management

Manajemen state dibagi menjadi dua kategori besar: **Server State** (Data dari DB) dan **Client State** (Interaksi UI).

## 1. Server State (Data Fetching & Caching)

Kita **tidak butuh** Redux/Zustand untuk menyimpan data berita di frontend, karena Next.js sudah memiliki caching mechanism yang agresif.

- **Fetching**: Menggunakan `async/await` di Server Components.
- **Caching**:
  - `fetch(url, { next: { revalidate: 60 } })`: ISR (Incremental Static Generation).
  - `unstable_cache`: Untuk caching hasil query database Drizzle.
- **Mutation**: Saat data berubah (misal: admin update berita), server action memanggil `revalidatePath('/news/[slug]')` untuk membersihkan cache lama.

## 2. Client State (UI Interactive)

Untuk state yang bersifat lokal dan interaktif di browser.

- **URL as State**: Gunakan URL Search Params untuk filter, paginasi, dan search keyword.
  - User copas link -> State filter terbawa.
  - Tool: `nuqs` (Type-safe search params state manager).
- **Zustand**: Untuk Global UI State yang tidak persisten di URL.
  - Sidebar Open/Close status.
  - Theme Mode (Dark/Light).
  - Audio Player (jika ada fitur baca berita).
- **React Context**: Untuk Dependency Injection sederhana (misal: AuthUserProvider).

## Diagram Alur

`DB -> Server Component (Cache) -> HTML Stream -> Client (Zustand/Interactivity)`
