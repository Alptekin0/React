import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli email adresi giriniz")
    .required("Email zorunludur"),

  yas: yup
    .number()
    .positive("Yaş pozitif olmalı")
    .required("Yaş zorunludur")
    .integer("yaş tam sayı olmalıdır."),

  sifre: yup
    .string()
    .required("Şifre alanı zorunludur."),

  sifreTekrar: yup
    .string()
    .oneOf([yup.ref('sifre')], "Şifreler eşleşmiyor")
    .required("Şifre tekrarı zorunludur."),

  term: yup
    .boolean()
    .oneOf([true], "Kullanıcı sözleşmesini onaylayınız"),
});
