import { useState } from 'react'
import './App.css'
import { useFormik } from 'formik';
import { registerFormSchema } from './schemas/registerForm';


function App() {


  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      yas: '',
      sifre: '',
      sifreTekrar: '',
      term: '',

    },
    validationSchema: registerFormSchema,

  });



  return (
    <div >

      <form className="Form-wrapper" onSubmit={handleSubmit}>
        <h2 className="Form-title">Kayıt Formu</h2>

        <div className="inputWrapper">
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ornek@mail.com"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div className="inputWrapper">
          <label htmlFor="yas">Yaş</label>
          <input
            id="yas"
            name="yas"
            type="number"
            placeholder="Yaşınızı girin"
            value={values.yas}
            onChange={handleChange}
          />
          {errors.yas && <p style={{ color: "red" }}>{errors.yas}</p>}
        </div>

        <div className="inputWrapper">
          <label htmlFor="sifre">Şifre</label>
          <input
            id="sifre"
            name="sifre"
            type="password"
            placeholder="*********"
            value={values.sifre}
            onChange={handleChange}
          />
          {errors.sifre && <p style={{ color: "red" }}>{errors.sifre}</p>}
        </div>

        <div className="inputWrapper">
          <label htmlFor="sifreTekrar">Şifre Tekrar</label>
          <input
            id="sifreTekrar"
            name="sifreTekrar"
            type="password"
            placeholder="*********"
            value={values.sifreTekrar}
            onChange={handleChange}
          />
          {errors.sifreTekrar && <p style={{ color: "red" }}>{errors.sifreTekrar}</p>}
        </div>

        <div className="inputWrapper checkboxWrapper">
          <input
            type="checkbox"
            id="term"
            name="term"
            checked={values.term}
            onChange={handleChange}
          />
          <label htmlFor="term">Kullanıcı Sözleşmesini kabul ediyorum.</label>
          {errors.term && <p style={{ color: "red" }}>{errors.term}</p>}
        </div>

        <button type="submit" className="submitButton">Kaydol</button>
      </form>


    </div>
  )
}

export default App
