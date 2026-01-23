# 06. Design System

Kita mengadopsi dan memodifikasi **Shadcn/UI** untuk membangun ulang tampilan legacy.

## Tokens (Legacy Adaptation)

Adaptasi dari style lama (Bootstrap 4) ke Tailwind modern.

- **Colors (Theme: Portal Berita Merah)**:
  - Legacy `bg-danger` -> `primary`: **#DC3545** (Bootstrap Red) atau varian modern **#E11D48** (Rose-600).
  - Legacy `bg-light` -> `background`: **#F8F9FA** (Slate-50).
  - `text-dark` -> `foreground`: **#212529** (Gray-900).
- **Layout & Grid**:
  - **Container**: `max-w-7xl mx-auto px-4` (Mimic Bootstrap `.container`).
  - **Grid System**:
    - Main Content: `col-span-8` (col-md-8).
    - Sidebar: `col-span-4` (col-md-4).
- **Typography**:
  - **Headings**: `Inter` (UI) - Bold & Clear.
  - **Article Body**: `Merriweather` atau `Lora` (Serif font) - meningkatkan keterbacaan artikel panjang dibanding font sans-serif biasa.

## Core Components Library

Komponen-komponen dasar yang harus ada:

1.  **News Card (Grid Item)**:
    - Thumbnail ratio 4:3 (Cover Image).
    - Badge Kategori (Pill shape, Red background).
    - Title Line Clamp (2 baris).
    - Meta Info (Date, Views) - small text muted.

2.  **Breaking News Hero**:
    - Overlay Text di atas gambar background gelap.

3.  **Navigation Components**:
    - **Navbar**: Sticky top, Menu Kategori, Search Bar trigger.
    - **Breadcrumb**: Path navigation.
    - **Pagination**: Numbered links (Prev 1 2 3 Next).

4.  **Utility Components**:
    - **Alert/Badge**: Status label (e.g., #Trending).
    - **AdsPlaceholder**: Komponen visual untuk slot iklan jika kosong/loading.
    - **Skeleton**: Loading state placeholder untuk image/text.
