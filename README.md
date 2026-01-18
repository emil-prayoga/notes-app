# Aplikasi Notes

Aplikasi web modern dan responsif untuk membuat, mengelola, dan mengorganisir catatan Anda. Dibangun dengan JavaScript vanilla, Web Components, dan bundler Webpack.

## Fitur

✨ **Fitur Utama:**
- ✅ Membuat catatan baru dengan judul dan isi
- ✅ Melihat semua catatan aktif dalam tata letak grid
- ✅ Mengarsipkan/membuka arsip catatan
- ✅ Menghapus catatan secara permanen
- ✅ Beralih antara tampilan catatan aktif dan terarsip
- ✅ Indikator loading real-time dengan animasi smooth
- ✅ Notifikasi error dengan SweetAlert2
- ✅ Data fallback saat API tidak tersedia

🎨 **Antarmuka Pengguna:**
- Desain responsif (mobile, tablet, desktop)
- Animasi loading yang smooth
- Overlay mode gelap yang dioptimalkan
- Skema warna profesional
- Antarmuka yang bersih dan intuitif

🔧 **Teknis:**
- JavaScript Vanilla (tanpa framework)
- Web Components (Custom Elements)
- Bundler Webpack 5
- Module ES6+
- CSS Grid layout
- Hot Module Replacement (HMR) dalam pengembangan

## Stack Teknologi

- **Runtime:** JavaScript Vanilla (ES6+)
- **Komponen:** Web Components (Custom Elements API)
- **Bundler:** Webpack 5
  - webpack-cli 5.1.4
  - webpack-dev-server 4.15.1
  - webpack-merge 5.10.0
- **Styling:** CSS3 dengan CSS Grid dan Flexbox
- **Tools Pembangunan:**
  - html-webpack-plugin 5.5.4
  - css-loader 6.8.1
  - style-loader 3.3.3
- **Dependensi:**
  - sweetalert2 11.10.3 (notifikasi)
  - animejs 3.2.1 (animasi)
- **Kualitas Kode:**
  - Prettier 3.0.0 (pemformat kode)

## Instalasi

### Prasyarat
- Node.js (v14 atau lebih tinggi)
- npm (v6 atau lebih tinggi)

### Setup

1. **Clone repositori**
   ```bash
   git clone <repository-url>
   cd notes-app
   ```

2. **Instal dependensi**
   ```bash
   npm install
   ```

3. **Mulai server pengembangan**
   ```bash
   npm run start-dev
   ```
   Server akan berjalan di `http://localhost:8080/`

4. **Bangun untuk produksi**
   ```bash
   npm run build
   ```
   File output dalam direktori `dist/`

## Penggunaan

### Alur Kerja Pengembangan

```bash
# Mulai webpack dev server dengan HMR
npm run start-dev

# Bangun bundle produksi
npm run build

# Format kode dengan Prettier
npx prettier --write .
```

### Membuat Catatan
1. Masukkan judul dan isi dalam formulir
2. Klik tombol kirim
3. Catatan muncul di grid "Catatan Aktif"

### Mengelola Catatan
- **Arsipkan:** Klik tombol arsipkan untuk memindahkan ke daftar terarsip
- **Buka Arsip:** Pindahkan dari terarsip kembali ke aktif
- **Hapus:** Hapus secara permanen dari semua daftar

### Beralih Tampilan
- Klik "Lihat Arsip" untuk melihat catatan terarsip
- Klik "Lihat Aktif" untuk kembali ke catatan aktif

## Referensi API

### URL Dasar
```
https://notes-api.dicoding.dev/v2
```

### Endpoint

#### Dapatkan Semua Catatan Aktif
```
GET /notes
Response: { status: "success", data: [...] }
```

#### Dapatkan Semua Catatan Terarsip
```
GET /notes/archived
Response: { status: "success", data: [...] }
```

#### Dapatkan Catatan Tunggal
```
GET /notes/{id}
Response: { status: "success", data: {...} }
```

#### Buat Catatan
```
POST /notes
Body: { title: "string", body: "string" }
Response: { status: "success", data: {...} }
```

#### Arsipkan Catatan
```
POST /notes/{id}/archive
Response: { status: "success" }
```

#### Buka Arsip Catatan
```
POST /notes/{id}/unarchive
Response: { status: "success" }
```

#### Hapus Catatan
```
DELETE /notes/{id}
Response: { status: "success" }
```

### Data Fallback
Jika API tidak tersedia, aplikasi secara otomatis menampilkan 15 catatan contoh dari data fallback lokal untuk pengujian.

## Struktur Proyek

```
notes-app/
├── src/
│   ├── index.html              # Template HTML utama
│   ├── scripts/
│   │   ├── app.js              # Pengontrol aplikasi utama
│   │   ├── api/
│   │   │   └── notes-api.js    # Lapisan layanan API
│   │   ├── components/         # Web Components
│   │   │   ├── app-bar.js
│   │   │   ├── loading-indicator.js
│   │   │   ├── note-form.js
│   │   │   ├── note-item.js
│   │   │   └── notes-list.js
│   │   ├── utils/
│   │   │   └── notification.js # Notifikasi SweetAlert2
│   │   └── data/
│   │       └── fallback-data.js # Catatan contoh fallback
│   └── styles/
│       └── style.css           # Gaya global
├── webpack.common.js           # Konfigurasi Webpack umum
├── webpack.dev.js              # Konfigurasi Webpack dev
├── webpack.prod.js             # Konfigurasi Webpack prod
├── package.json
└── README.md
```

## Konfigurasi Build

### webpack.common.js
Konfigurasi bersama untuk dev dan prod:
- Titik masuk: `./src/scripts/app.js`
- Output: `./dist/bundle.js`
- CSS dan pemuat aset
- Plugin template HTML

### webpack.dev.js
Setup server pengembangan:
- Localhost: 8080
- Hot Module Replacement (HMR)
- Source map untuk debugging
- Penyajian file statis

### webpack.prod.js
Build produksi:
- Minifikasi diaktifkan
- Source map untuk debugging
- Output yang dioptimalkan

## Script npm

| Script | Deskripsi |
|--------|-----------|
| `npm run start-dev` | Mulai webpack dev server dengan HMR |
| `npm run build` | Bangun bundle produksi |
| `npm install` | Instal semua dependensi |

## Kualitas Kode

### Format Kode
Kode otomatis diformat dengan Prettier selama pengembangan. Format seluruh proyek:
```bash
npx prettier --write .
```

## Detail Fitur Aplikasi Notes

### Indikator Loading
- Muncul selama pengambilan API dengan waktu tampilan minimum 1,2 detik
- Animasi fade-in/fade-out yang smooth
- Overlay gelap dengan spinner terpusat
- Non-blocking (memungkinkan interaksi pengguna)

### Penanganan Error
- Error API menampilkan notifikasi toast
- Data fallback mencegah crash aplikasi
- Logging console untuk debugging

### Desain Responsif
- Pendekatan mobile first
- CSS Grid untuk kartu catatan
- Flexbox untuk tata letak
- Media query untuk breakpoint (768px, 480px)

## Dukungan Browser

- Chrome (terbaru)
- Firefox (terbaru)
- Safari (terbaru)
- Edge (terbaru)

**Catatan:** Web Components memerlukan browser modern dengan dukungan Custom Elements API.

## Pemecahan Masalah

### Port 8080 Sudah Digunakan
```bash
# Matikan proses menggunakan port 8080
taskkill /PID <PID> /F

# Atau gunakan port berbeda di webpack.dev.js
```

### Catatan Tidak Tampil
1. Periksa konsol browser untuk error
2. Verifikasi endpoint API dapat diakses
3. Periksa data fallback dimuat
4. Pastikan CSS grid merender

### Masalah Build
```bash
# Bersihkan cache dan instal ulang
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

## Kredit

Dibuat untuk Proyek Aplikasi Notes Dicoding Academy

## Lisensi

Lisensi MIT - silakan gunakan proyek ini untuk tujuan pembelajaran.

## Dukungan

Untuk masalah atau pertanyaan:
1. Periksa konsol untuk pesan error
2. Tinjau respons API di tab Network
3. Verifikasi semua dependensi terinstal
4. Pastikan versi Node.js adalah v14+

---

**Selamat Membuat Catatan! 📝**

