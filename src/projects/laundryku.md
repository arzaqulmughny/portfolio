---
title: "Laundryku"
description: "LaundryKu is a mini ERP built with Laravel, TailwindCSS, and MySQL to help laundry businesses manage daily operations, pickups and deliveries, and customer communication."
author: "Arzaqul Mughny"
category: "personal"
date: "2023-02-14"
bannerUrl: "/images/projects/laundryku/Login Page.png"
tags:
  - frontendmentor
  - react
---

**LaundryKu** adalah aplikasi ERP sederhana untuk bisnis laundry, dibangun dengan **Laravel**, **TailwindCSS**, dan **MySQL**. Aplikasi ini dirancang untuk membantu pemilik usaha mengelola operasional sehari-hari secara efisien, mulai dari pencatatan pesanan, manajemen stok, pengaturan aplikasi, hingga laporan keuangan. LaundryKu juga mendukung layanan antar jemput pesanan dan mempermudah komunikasi dengan pelanggan.  

---

## Fitur Utama

- **Transaksi Laundry**
  - Input pesanan via WhatsApp atau pelanggan datang langsung.
  - Proses laundry: cuci, setrika, sortir, update status.
  - Layanan antar jemput pesanan.

- **Master Data & Setting**
  - Kelola item/paket laundry, akun pengguna, dan hak akses.
  - Setting aplikasi: nama, deskripsi, dan icon aplikasi.

- **Authorization / Role**
  - **Owner**: akses penuh ke semua fitur (master, transaksi, laporan, setting).  
  - **Admin**: tambah/ubah master data & lihat laporan.  
  - **Staff**: hanya mencatat dan update transaksi.

- **Laporan**
  - Laporan pesanan, pendapatan, dan aktivitas harian.
  - Filter berdasarkan tanggal atau status pesanan.

---

## Flow Aplikasi

1. **Pelanggan**: memesan layanan via WhatsApp atau datang langsung.  
2. **Karyawan**:
   - Menjemput pesanan (jika layanan antar jemput).
   - Memeriksa pesanan (timbang, cek kondisi pakaian, dll).
   - Input pesanan ke aplikasi.
   - Memproses pesanan & update status.
   - Menyelesaikan pesanan & notifikasi ke pelanggan.
   - Mengantar pesanan (jika menggunakan layanan antar jemput).  
3. **Pelanggan**: menerima pesanan dan melakukan pembayaran.  

---

## Tampilan Aplikasi

Berikut beberapa contoh tampilan aplikasi:

### Login
![Login Screenshot](/images/projects/laundryku/Login%20Page.png)

### Dashboard
![Dashboard Screenshot](/images/projects/laundryku/Dashboard%20Page.png)

### Kelola Pesanan
![Kelola Pesanan Screenshot](/images/projects/laundryku/Edit%20Transaction%20Page.png)

### Laporan
![Laporan Screenshot](/images/projects/laundryku/Report%20Page.png)

---

## Tech Stack

- **Backend:** Laravel  
- **Frontend:** Blade + TailwindCSS  
- **Database:** MySQL  