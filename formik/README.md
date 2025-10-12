# Formik Register Form

Bu proje, React, Formik ve Yup kullanarak basit bir kayıt formu örneğidir. Form, kullanıcıdan e-posta, yaş, şifre, şifre tekrar ve kullanıcı sözleşmesi onayı bilgilerini alır.

<br />

## 🛠 Kullanılan Teknolojiler

* **React**: UI oluşturmak için.
* **Formik**: Form durum yönetimi ve submit işlemleri için.
* **Yup**: Form validasyonu için.
  
<br />

## 📝 Form Alanları ve Validasyon

### Email

* Tip: string
* Zorunlu: Evet
* Validasyon: Geçerli email formatında olmalı

### Yaş (yas)

* Tip: number
* Zorunlu: Evet
* Validasyon: Pozitif sayı olmalı

### Şifre (sifre)

* Tip: string
* Zorunlu: Evet

### Şifre Tekrar (sifreTekrar)

* Tip: string
* Zorunlu: Evet
* Validasyon: Şifre ile eşleşmeli

### Kullanıcı Sözleşmesi (term)

* Tip: boolean
* Zorunlu: Evet
* Validasyon: Onaylanmalı (true olmalı)

<br />

## 📌 Notlar

Formik, form durumunu ve submit işlemlerini yönetir. useFormik hook'u ile form değerleri (values), hatalar (errors) ve event handler'lar (handleChange, handleSubmit) sağlanır.


* initialValues: Form başlangıç değerleri.
* validationSchema: Yup şeması ile form doğrulaması.
* handleSubmit: Form submit edildiğinde çalışacak fonksiyon.
* handleChange: Input değerleri değiştiğinde formik state'i günceller.


<br />

## 📚 Kaynaklar

* [Formik Documentation](https://formik.org/docs/overview)
* [Yup Documentation](https://www.npmjs.com/package/yup)

