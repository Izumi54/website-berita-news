# 02. Technology Stack (Teknologi)

## Core Stack

Kami memilih teknologi "Boring" (Stable & Proven) namun dengan DX (Developer Experience) modern.

| Komponen       | Teknologi        | Versi           | Alasan Pemilihan                                                                                                  |
| -------------- | ---------------- | --------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Framework**  | **Next.js**      | 15 (App Router) | Standar industri untuk React. Server Components (RSC) memberikan performa backend dengan interaktivitas frontend. |
| **Language**   | **TypeScript**   | 5.x             | Wajib untuk maintainability. Mencegah runtime error seperti `undefined is not a function`.                        |
| **Database**   | **PostgreSQL**   | 16+             | Database relasional paling robust. Support JSONB untuk fleksibilitas data semi-structured.                        |
| **ORM**        | **Drizzle ORM**  | Latest          | Lebih ringan dari Prisma (zero runtime overhead). Query builder style SQL-like yang transparan.                   |
| **Styling**    | **Tailwind CSS** | 4.0             | Utility-first CSS. Mempercepat styling tanpa pusing memikirkan nama class `BEM`.                                  |
| **UI Library** | **Shadcn/UI**    | -               | Komponen yang accessible (Radix UI) namun kode-nya kita miliki (copy-paste), bukan black-box npm package.         |
| **Validasi**   | **Zod**          | 3.x             | Validasi skema runtime (Form & API). Type inference otomatis ke TypeScript.                                       |

## Supporting Tools

- **Package Manager**: `pnpm` (Lebih cepat dan hemat disk space dibanding npm/yarn).
- **Linter**: `Biome` atau `ESLint` + `Prettier`.
- **Testing**: `Vitest` (Unit Test) + `Playwright` (End-to-End).
- **Icons**: `Lucide React` (Simpel, konsisten, ringan).

## Third-Party Services

- **Image CDN**: Vercel Blob / Cloudinary (Opsional).
- **Email**: Resend (Transactional Email).
- **Analytics**: PostHog (Product Analytics) + Google CMP.
