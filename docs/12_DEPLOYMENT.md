# 12. Deployment & CI/CD Strategy

Menerapkan otomasi agar development cycle cepat dan aman.

## CI/CD Pipeline (GitHub Actions)

Setiap kali ada `push` ke branch `main` atau `Pull Request`:

1.  **Linter & Type Check**:
    - Run `npm run lint` & `tsc --noEmit`. Jika error, pipeline stop. Haraman merah tidak boleh deploy.
2.  **Unit Testing**:
    - Run `npm run test` (Vitest) untuk memastikan logic utility & helper function tidak rusak.
3.  **Build Check**:
    - Run `npm run build` untuk simulasi production build.

## Deployment Environment

- **Platform**: Vercel (Rekomendasi Utama).
  - Zero config untuk Next.js.
  - Otomatis preview URL untuk setiap Pull Request.
  - DDoS protection built-in.
- **Database**: Supabase / Neon (Serverless Postgres).
  - Branching database (opsional) untuk dev environment.

## Monitoring & Logging

Setelah aplikasi live, kita tidak boleh buta.

- **Error Tracking**: **Sentry**. Lapor error JS di browser user lengkap dengan stack trace dan rekaman session replay.
- **Uptime Monitoring**: **BetterStack** atau UptimeRobot. Ping website tiap 5 menit.
- **Logs**: Vercel Logs (cukup untuk standard debugging).
