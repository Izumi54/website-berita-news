# 01. Architecture Pattern (Pola Arsitektur)

## Overview: Modular Monolith

Kita akan menggunakan pendekatan **Modular Monolith**. Ini adalah pendekatan yang paling pragmatis untuk tim kecil hingga menengah, menawarkan keseimbangan antara _simplicity_ (kesederhanaan) monolithic dan _separation of concerns_ (pemisahan tugas) microservices.

### Mengapa Bukan Microservices?

- **Kompleksitas Operasional**: Microservices membutuhkan orkestrasi (Kubernetes), service discovery, dan tracing yang rumit.
- **Overhead Latency**: Komunikasi antar service via HTTP menambah latensi.
- **Biaya**: Infrastruktur terdistribusi lebih mahal.

### Struktur Modular

Aplikasi akan dibagi berdasarkan **Domain/Fitur**, bukan Layer teknis.

```
src/
├── app/                  # Presentation Layer (Next.js App Router)
├── modules/              # Directory Modules (Logic Pusat)
│   ├── auth/             # Authentication Domain
│   │   ├── components/   # UI specific to Auth
│   │   ├── actions.ts    # Server Actions (Controller)
│   │   ├── services.ts   # Business Logic
│   │   └── types.ts      # Domain Interfaces
│   ├── news/             # News & Content Domain
│   │   ├── components/
│   │   ├── actions.ts
│   │   └── ...
│   └── users/            # User Management Domain
├── lib/                  # Shared Kernel (Infrastructure)
│   ├── db/               # Database Connection & Schema
│   ├── utils/            # Helper functions
│   └── logger/           # Logging mechanism
```

### Prinsip Utama

1.  **Unidirectional Data Flow**: Data mengalir dari Server -> Client -> Action.
2.  **Boundary Isolation**: Modul `news` tidak boleh import langsung dari `auth` private files. Harus melalui Public API (exported functions).
3.  **Server-First**: Logic berat diproses di server (RSC/Server Actions) untuk meringankan bundle client.
