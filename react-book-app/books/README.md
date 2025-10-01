# 📚 React Kitap Uygulaması

Bu proje, **React** ve **Axios** kullanılarak geliştirilmiş basit bir kitap uygulamasıdır.  
Uygulama, [OpenLibrary API](https://openlibrary.org/developers/api) üzerinden ISBN numaraları ile kitap bilgilerini çekmekte ve kullanıcıya liste halinde sunmaktadır.


## 🚀 Özellikler

- 📖 ISBN numaralarıyla kitap bilgisi çekme  
- 🖼️ Kitap kapak görsellerini görüntüleme  
- ✍️ Yazar, yayınevi, basım yeri ve tarihi bilgilerini gösterme  
- 📌 Dinamik olarak yeni kitap eklenebilir  

## 🛠️ Kullanılan Teknolojiler

- **React** (Frontend)  
- **Axios** (HTTP istekleri)  
- **OpenLibrary API** (Kitap verisi kaynağı)  

## 📂 Proje Yapısı

books/
├── node_modules/
├── public/
├── src/
│ ├── assets/ # Statik dosyalar (resimler, ikonlar vb.)
│ ├── Components/
│ │ ├── Container.jsx # Kitap kartını render eden component
│ │ ├── KitapVeri.jsx # API'den kitap verilerini çeken component
│ │ └── Navbar.jsx # Uygulama üst menüsü
│ ├── App.jsx # Ana component
│ ├── App.css # Genel stiller
│ ├── index.css # Global stiller
│ └── tumStill.css # Ekstra stiller


##📸 Ekran Görüntüsü

![Ekran Görüntüsü](image.png)



## 🔗 OpenLibrary API Kullanımı

 FORMAT :  https://openlibrary.org/api/books?bibkeys=ISBN:{isbn}&format=json&jscmd=data
 ÖRNEK İSTEK : https://openlibrary.org/api/books?bibkeys=ISBN:9780140449266&format=json&jscmd=data
