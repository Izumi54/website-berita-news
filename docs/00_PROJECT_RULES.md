# 00. PROJECT GOVERNANCE & RULES (ATURAN PROJECT)

Dokumen ini adalah **Hukum Tertinggi** dalam pengembangan project ini. Semua developer (manusia dan AI) wajib mematuhi aturan berikut tanpa kecuali.

## 1. The "Docs First" Policy (Dokumentasi Adalah Kebenaran)

- **Single Source of Truth**: Folder `docs/` adalah satu-satunya sumber kebenaran. Jika ada konflik antara _code_ dan _docs_, maka **code yang salah**.
- **No Invisible Changes**: Dilarang melakukan perubahan fitur, arsitektur, atau stack teknologi di code tanpa mengubah dokumen spesifikasi terkait terlebih dahulu.
- **Workflow**:
  1.  Update `docs/xx_*.md` (jika ada perubahan rencana).
  2.  Review perubahan dokumen.
  3.  Baru implementasi code.

## 2. Strict Adherence to Architecture

- **Boundary Violation**: Dilarang melanggar batas arsitektur yang ditentukan di `01_ARCHITECTURE.md`.
  - _Contoh Pelanggaran_: Mengimport logic database langsung di component UI (Client Component).
  - _Sanksi_: Code harus direfactor ulang.
- **Tech Stack Consistency**: Dilarang menambah library baru diluar `02_TECH_STACK.md` tanpa izin eksplisit dan update dokumen. Jangan "asal install" library.

## 3. Legacy Compatibility

- **Feature Parity**: Fitur-fitur yang terdaftar di `07_CORE_FEATURES.md` (bagian Legacy Mappings) **WAJIB** ada. Tidak boleh ada fitur lama yang hilang di sistem baru kecuali disepakati untuk dihapus.
- **Visual Consistency**: Design system (`06_DESIGN_SYSTEM.md`) harus menghormati "Soul" dari website lama (Warna Merah, Layout Grid).

## 4. Code Quality & Language

- **Language**: Kode (Variable, Function) harus dalam Bahasa Inggris (Internasional Standard). Komentar boleh Bahasa Indonesia/Inggris.
- **Strict Typing**: `ts-ignore` atau `any` adalah tindakan kriminal. Gunakan type yang benar.

## 5. Documentation of Work (Diskusi & Task)

- **Diskusi**: Setiap diskusi teknis yang menghasilkan keputusan harus dicatat dalam file baru di `docs/` dengan format nama `diskusi_[topik].md`. Jangan biarkan keputusan hilang di chat history.
- **Task & Plan**: Detail task atau plan harian/mingguan juga harus masuk ke `docs/` (bukan hanya di artifact agent), agar history project terjaga.
- **Implementation Plans**: File `implementation_plan.md` (artifact) harus _disinkronkan_ atau di-copy ke folder `docs/` jika sudah final, agar menjadi bagian dari repo.

---

**Peringatan**: Penyimpangan dari aturan ini akan dianggap sebagai kegagalan tugas.
