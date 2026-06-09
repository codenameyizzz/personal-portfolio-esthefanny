# Personal Portfolio Esthefany

Portfolio ini adalah single-page frontend berbasis React yang menampilkan hero, about, projects, experience, skillsets, testimonials, dan contact form lokal.

## Stack yang Dipakai

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion (`motion/react`)
- Lucide React

## Catatan

- Project ini tidak butuh backend untuk jalan lokal.
- Contact form saat ini hanya menyimpan data ke `localStorage` browser.
- Tidak ada `GEMINI_API_KEY` yang dibutuhkan untuk source yang ada sekarang.
- Beberapa jejak AI Studio masih ada di metadata/dependency, tapi bukan bagian runtime utama app ini.

## Menjalankan di Local

Prasyarat:

- Node.js 20+ disarankan
- npm

Perintah:

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:3000`.

## Deploy Gratis ke Vercel Hobby

Project ini cocok untuk Vercel Hobby karena saat ini berupa frontend Vite statis tanpa backend aktif dan tanpa environment variable wajib.

Yang sudah disiapkan di repo ini:

- `vercel.json` sudah diarahkan ke output `dist`
- SPA rewrite sudah aktif supaya route langsung seperti `/projects` tidak error `404`
- Tidak ada env var yang wajib diisi untuk deploy saat ini

Langkah deploy:

1. Push project ini ke repository GitHub Anda.
2. Login ke [Vercel](https://vercel.com/).
3. Klik `Add New...` lalu pilih `Project`.
4. Import repository GitHub project ini.
5. Pastikan setting build seperti berikut:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Klik `Deploy`.

Sesudah deploy:

- Production URL akan otomatis dibuat dengan domain `*.vercel.app`
- Setiap `git push` ke branch production akan memicu redeploy otomatis
- Jika nanti Anda menambah domain custom, itu bisa diatur dari dashboard Vercel

Catatan Hobby:

- Paket `Hobby` gratis ditujukan untuk personal project dan penggunaan non-komersial
- Project statis seperti portfolio ini sangat cocok untuk paket tersebut

## Script

```bash
npm run dev
npm start
npm run build
npm run preview
npm run lint
npm run clean
```

## Struktur Singkat

```text
src/
  components/   Komponen UI per section
  App.tsx       Komposisi halaman utama
  data.ts       Data statis portfolio
  types.ts      Tipe TypeScript
  index.css     Theme Tailwind dan global styles
index.html      Entry HTML
vite.config.ts  Konfigurasi Vite
```

## Verifikasi

Sudah saya cek lokal:

- `npm run lint` sukses
- `npm run build` sukses
- `npm run dev` berhasil start di `localhost:3000`
