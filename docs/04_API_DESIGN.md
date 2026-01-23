# 04. API Design & Communication

Karena menggunakan **Next.js App Router**, kita tidak terpaku pada REST API tradisional untuk komunikasi internal (Frontend ke Backend), melainkan menggunakan **Server Actions**.

## Internal Communication (Server Actions)

Mekanisme ini memungkinkan fungsi backend dipanggil langsung seperti fungsi JavaScript biasa di frontend.

### Contoh Pola:

- `createNews(formData)` -> Menerima FormData, sanitasi Zod, insert DB, revalidatePath.
- `toggleLike(newsId)` -> Optimistic update di UI, proses async di background.

### Struktur Response (Standardized)

Setiap Server Action harus mengembalikan format yang konsisten:

```typescript
type ActionResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string[]>; // Field validation errors
};
```

## Public API (Optional/Future)

Jika nanti kita ingin membuat Mobile App Native, kita akan membuka REST Endpoint di `/api/v1`.

### Endpoints

- `GET /api/v1/news`
  - Query Params: `page`, `limit`, `category`, `search`.
  - Response: JSON List of news.
- `GET /api/v1/news/:slug`
  - Detail berita.
- `POST /api/v1/auth/login`
  - Returns JWT / Session Cookie.

## Documentation

- **Internal**: TSDoc di setiap function Server Action.
- **Public**: Swagger/OpenAPI (dihasilkan otomatis jika menggunakan library seperti `ts-rest` atau manual).
