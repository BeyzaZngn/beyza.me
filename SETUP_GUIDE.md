# GitHub Pages + Squarespace Domain Setup Guide

Bu rehber, `beyza.me` portfolyo sitenizi GitHub Pages'te yayınlayıp Squarespace domain'inizi bağlamanız için adım adım talimatlar içeriyor.

---

## 📋 İçindekiler

1. [GitHub Repository Oluşturma](#1-github-repository-oluşturma)
2. [Dosyaları Yükleme](#2-dosyaları-yükleme)
3. [GitHub Pages Aktivasyonu](#3-github-pages-aktivasyonu)
4. [Squarespace DNS Ayarları](#4-squarespace-dns-ayarları)
5. [HTTPS Aktivasyonu](#5-https-aktivasyonu)
6. [DNS Propagation ve Test](#6-dns-propagation-ve-test)
7. [Sorun Giderme](#7-sorun-giderme)

---

## 1. GitHub Repository Oluşturma

### Adım 1.1: GitHub'a Giriş Yapın
- [github.com](https://github.com) adresine gidin
- Hesabınıza giriş yapın

### Adım 1.2: Yeni Repository Oluşturun
1. Sağ üst köşedeki **"+"** simgesine tıklayın
2. **"New repository"** seçeneğini seçin
3. Repository ayarları:
   - **Repository name**: `beyza.me` veya `beyzazengin.github.io` (iki seçenek de çalışır)
   - **Description**: "iOS Developer Portfolio Website"
   - **Public** seçeneğini işaretleyin (GitHub Pages için gerekli)
   - **README.md** eklemeyin (zaten dosyalarımız var)
4. **"Create repository"** butonuna tıklayın

---

## 2. Dosyaları Yükleme

### Seçenek A: Terminal Kullanarak (Önerilen)

```bash
# 1. Proje klasörüne gidin
cd ~/Desktop/GitHub/beyza.me

# 2. Git repository'sini başlatın (eğer henüz başlatmadıysanız)
git init

# 3. Tüm dosyaları staging area'ya ekleyin
git add .

# 4. İlk commit'i oluşturun
git commit -m "Initial commit: iOS Developer Portfolio"

# 5. Ana branch'i main olarak ayarlayın
git branch -M main

# 6. GitHub repository'sini remote olarak ekleyin
# Not: YOUR_USERNAME kısmını GitHub kullanıcı adınızla değiştirin
git remote add origin https://github.com/YOUR_USERNAME/beyza.me.git

# 7. Dosyaları GitHub'a yükleyin
git push -u origin main
```

### Seçenek B: GitHub Web Interface Kullanarak

1. Repository sayfasında **"uploading an existing file"** linkine tıklayın
2. Tüm proje dosyalarını sürükleyip bırakın:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `CNAME`
   - `.nojekyll`
   - `README.md`
   - `SETUP_GUIDE.md`
3. Commit mesajı yazın: "Initial commit: iOS Developer Portfolio"
4. **"Commit changes"** butonuna tıklayın

---

## 3. GitHub Pages Aktivasyonu

### Adım 3.1: Settings'e Gidin
1. Repository sayfanızda üst menüden **"Settings"** sekmesine tıklayın
2. Sol menüden **"Pages"** seçeneğine tıklayın

### Adım 3.2: Source Ayarı
1. **Source** bölümünde:
   - **Branch**: `main` seçin
   - **Folder**: `/ (root)` seçin
2. **"Save"** butonuna tıklayın

### Adım 3.3: Custom Domain Ayarı
1. **Custom domain** alanına `beyza.me` yazın
2. **"Save"** butonuna tıklayın
3. ✅ "DNS check successful" mesajını görebilmeniz için önce DNS ayarlarını yapmanız gerekebilir

> **Not**: Bu aşamada "DNS check was unsuccessful" uyarısı normaldir. DNS ayarlarını yaptıktan sonra düzelecek.

---

## 4. Squarespace DNS Ayarları

Bu en önemli adım! DNS ayarlarını dikkatli yapın.

### Adım 4.1: Squarespace DNS Panel'e Giriş
1. [squarespace.com](https://www.squarespace.com) adresine giriş yapın
2. Sol menüden **"Domains"** seçeneğine tıklayın
3. **beyza.me** domain'inizin yanındaki **"Manage"** veya ayarlar ikonuna tıklayın
4. **"DNS Settings"** veya **"Advanced Settings"** bölümüne gidin

### Adım 4.2: Mevcut Kayıtları Temizleme (Opsiyonel)
- Eğer beyza.me için başka A veya CNAME kayıtları varsa, bunları silin veya devre dışı bırakın
- Sadece GitHub Pages için gerekli kayıtları bırakın

### Adım 4.3: A Records Ekleme

GitHub Pages IP adreslerini ekleyin. **4 adet A record** eklemeniz gerekiyor:

| Type | Name/Host | Value/Points to | TTL |
|------|-----------|----------------|-----|
| A | @ | 185.199.108.153 | 3600 (veya Auto) |
| A | @ | 185.199.109.153 | 3600 (veya Auto) |
| A | @ | 185.199.110.153 | 3600 (veya Auto) |
| A | @ | 185.199.111.153 | 3600 (veya Auto) |

**Adımlar:**
1. **"Add Record"** veya **"+"** butonuna tıklayın
2. **Type**: `A` seçin
3. **Name/Host**: `@` yazın (bazı sistemlerde boş bırakın)
4. **Value/Address**: Yukarıdaki IP adreslerinden birini girin
5. **TTL**: `3600` veya `Auto` seçin
6. **Save** butonuna tıklayın
7. Bu adımları **4 IP adresi için tekrarlayın**

### Adım 4.4: CNAME Record Ekleme (www için)

www.beyza.me için CNAME kaydı:

| Type | Name/Host | Value/Points to | TTL |
|------|-----------|----------------|-----|
| CNAME | www | YOUR_USERNAME.github.io | 3600 |

**Adımlar:**
1. **"Add Record"** veya **"+"** butonuna tıklayın
2. **Type**: `CNAME` seçin
3. **Name/Host**: `www` yazın
4. **Value/Target**: `YOUR_USERNAME.github.io` (örnek: `beyzazengin.github.io`)
   - ⚠️ Sonuna `.` (nokta) koymayın!
5. **TTL**: `3600` veya `Auto` seçin
6. **Save** butonuna tıklayın

### Adım 4.5: Ayarları Kaydet
- Tüm değişiklikleri kaydedin
- Squarespace bazı değişikliklerin yürürlüğe girmesi için onay isteyebilir

### 📸 Squarespace DNS Ayarları Ekran Görüntüsü Referansı

Ayarlarınız şu şekilde görünmeli:

```
A     @       185.199.108.153     3600
A     @       185.199.109.153     3600
A     @       185.199.110.153     3600
A     @       185.199.111.153     3600
CNAME www     beyzazengin.github.io     3600
```

---

## 5. HTTPS Aktivasyonu

DNS ayarları aktif olduktan sonra (24-48 saat sonra):

### Adım 5.1: GitHub Pages Settings'e Dönün
1. Repository → Settings → Pages
2. **Custom domain** bölümünde `beyza.me` yazılı olmalı
3. ✅ "DNS check successful" mesajını görmelisiniz

### Adım 5.2: HTTPS'i Aktifleştirin
1. **"Enforce HTTPS"** kutucuğunu işaretleyin
2. Bu seçenek hemen kullanılamayabilir, DNS propagation tamamlanana kadar bekleyin

> **Not**: HTTPS sertifikası otomatik olarak Let's Encrypt tarafından sağlanır ve yenilenir.

---

## 6. DNS Propagation ve Test

### DNS Propagation Süresi
- **Minimum**: 1-2 saat
- **Maksimum**: 24-48 saat
- Genellikle 4-6 saat içinde çalışır

### Test Komutları (Terminal/Command Prompt)

#### A Record Kontrolü
```bash
dig beyza.me
# veya
nslookup beyza.me
```

**Beklenen sonuç**: GitHub Pages IP adreslerinden biri gösterilmeli
```
beyza.me.   3600   IN   A   185.199.108.153
```

#### CNAME Record Kontrolü
```bash
dig www.beyza.me
# veya
nslookup www.beyza.me
```

**Beklenen sonuç**: GitHub Pages URL'i gösterilmeli
```
www.beyza.me.   3600   IN   CNAME   beyzazengin.github.io.
```

### Online Test Araçları

1. **DNS Propagation Checker**
   - [whatsmydns.net](https://www.whatsmydns.net)
   - `beyza.me` yazıp A record'u kontrol edin
   - Dünya genelinde propagation durumunu görebilirsiniz

2. **DNS Lookup**
   - [dnschecker.org](https://dnschecker.org)
   - Tüm DNS kayıtlarını kontrol edin

### Tarayıcıda Test
```
http://beyza.me        -> Siteniz görünmeli
http://www.beyza.me    -> Siteniz görünmeli
https://beyza.me       -> HTTPS aktif olduktan sonra çalışmalı
https://www.beyza.me   -> HTTPS aktif olduktan sonra çalışmalı
```

---

## 7. Sorun Giderme

### ❌ "DNS check was unsuccessful" Hatası

**Çözümler:**
1. DNS kayıtlarının doğru girildiğinden emin olun
2. TTL süresinin dolmasını bekleyin (genellikle 1 saat)
3. Tarayıcı cache'ini temizleyin
4. Custom domain alanını boşaltıp tekrar `beyza.me` yazın

### ❌ "404 - There isn't a GitHub Pages site here"

**Çözümler:**
1. CNAME dosyasının repository'de olduğundan emin olun
2. CNAME dosyasında sadece `beyza.me` yazdığından emin olun (https:// veya www olmamalı)
3. GitHub Pages Settings'te branch'in `main` olduğunu kontrol edin

### ❌ Domain yönlendirmiyor

**Çözümler:**
1. DNS propagation'ın tamamlanmasını bekleyin (24-48 saat)
2. DNS kayıtlarını tekrar kontrol edin
3. `dig beyza.me` komutuyla DNS'in doğru çözümlendiğini testi edin

### ❌ "Enforce HTTPS" seçeneği aktif değil

**Çözümler:**
1. DNS propagation'ın tamamen bitmesini bekleyin
2. "DNS check successful" mesajını gördükten sonra 10-15 dakika bekleyin
3. Sayfayı yenileyin ve tekrar kontrol edin

### ❌ CSS/JavaScript yüklenmiyor

**Çözümler:**
1. HTML'deki dosya yollarının doğru olduğunu kontrol edin (`styles.css`, `script.js`)
2. Dosya isimlerinin büyük/küçük harf duyarlı olduğunu unutmayın
3. Browser Console'u açın (F12) ve hataları kontrol edin

### ❌ Squarespace DNS ayarları kayboldu

**Çözüm:**
- Squarespace bazen external DNS kullanımını devre dışı bırakabilir
- Domain ayarlarından "Use Squarespace nameservers" yerine "Custom nameservers" veya "Advanced DNS" seçeneğinin aktif olduğundan emin olun

---

## 🎉 Başarılı Kurulum Kontrolü

Tüm bu adımlar tamamlandığında:

- ✅ `beyza.me` ve `www.beyza.me` her ikisi de sitenizi gösteriyor
- ✅ HTTPS aktif (yeşil kilit simgesi görünüyor)
- ✅ Tüm sayfalar düzgün yükleniyor
- ✅ Responsive tasarım çalışıyor
- ✅ Dark mode çalışıyor

---

## 🔄 Site Güncelleme

Sitenizi güncellemek için:

```bash
# Değişiklikleri yaptıktan sonra
git add .
git commit -m "Update: site içeriği güncellendi"
git push origin main
```

GitHub Pages otomatik olarak değişiklikleri algılayıp siteyi güncelleyecektir (1-2 dakika sürebilir).

---

## 📞 Ek Yardım

Sorunlar devam ederse:

1. **GitHub Pages Dokümantasyonu**: [docs.github.com/en/pages](https://docs.github.com/en/pages)
2. **Squarespace Destek**: [support.squarespace.com](https://support.squarespace.com)
3. **DNS Araçları**: [mxtoolbox.com](https://mxtoolbox.com/DNSLookup.aspx)

---

**🚀 İyi şanslar! Portfolyo siteniz artık canlı!**
