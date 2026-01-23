# 11. Accessibility (A11y)

Aksesibilitas bukan fitur tambahan, tapi kewajiban hukum dan moral agar website bisa diakses penyandang disabilitas (pembaca layar/screen reader).

## Standar WCAG 2.1

- **Color Contrast**: Rasio kontras teks minimal 4.5:1 untuk teks normal. (Dicek otomatis saat develop).
- **Semantic HTML**:
  - Tombol harus `<button>`, bukan `<div>` yang dikasih onclick.
  - Image harus punya `alt`.
  - Form inputs harus punya `<label>` yang terasosiasi (`for="id"`).

## Keyboard Navigation

- User harus bisa navigasi seluruh menu website hanya menggunakan tombol `TAB`.
- Focus ring (garis outline saat elemen fokus) tidak boleh dimatikan lewat CSS (`outline: none`) kecuali diganti style custom.

## Screen Reader Support (ARIA)

- Komponen interaktif kompleks (Dropdown, Tabs, Modal) menggunakan **Radix UI** primitives yang sudah mengurus atribut ARIA (Accessible Rich Internet Applications) secara otomatis.
- Skip to Content: Link tersembunyi di paling atas page agar user bisa skip navigasi menu yang panjang.
