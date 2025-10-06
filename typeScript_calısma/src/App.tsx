import './App.css'
function App() {

  let isim: string = "Osman Paşa";   // isim değişkei sadece string olmalı
  let yas: number = 25;    // yaş değişkeni sadece number olabilir

  let izinGunu: string | number = "Persembe";   // izin günü değişkeni string veya number olabilir
  izinGunu = 14

  let izinDurumu: "uygundur" | "uygun değildir";   // izin durumu değişkeni sadece "uygundur" veya "uygun değildir" değişkenlerini alabilir aksi türlüsünde hata verir.
  izinDurumu = "uygun değildir";

  let calisanlar: string[] = ["Osman", "Orhan", "Murat"]  // Sadece String türünde değişkenler alan bir array

  let maaslar: number[] = [115.525, 192.255, 214.752];  // Sadece number türünde değişkenler alan bir array

  type user = {        // Kendi değişkenimizi oluşturduk. user isimli name ve yas değişkenlerini alacak. yaş değeri zorunlu değil
    name: string,
    yas?: number
  }

  let user1: user = {   // user değişkeni alan bir user1 tanımladık
    name: "Süleyman",
    yas: 14
  }

  let dizi: user[] = [{ name: "Beyazıd", yas: 28 }, { name: "Fatih", yas: 21 }]  // user değişkeni alan bir array oluşturduk

  function sum(a: number, b: number): number {   // a sayısı(number) ve b sayısı(number) alan bir fonksiyon oluşturduk. dönüş değeri de number olmalı.
    return a + b;
  }

  return (
    <div className='main'>
      İsim :   {isim} <br />
      Yaş  :  {yas} <br />
      İzin Günü : {izinGunu} <br />
      İzin durumu : {izinDurumu} <br /> <br />
      Çalışanlar :
      {calisanlar.map((element, index) => (
        <div key={index} >{element}</div>
      ))}
      <br /> <br />
      Maaşlar :

      {
        maaslar.map((element, index) => (
          <div key={index}> {element} TL </div>
        ))
      } <br /> <br />

      Çalışanların isim ve yaşı : <br />
      {user1.name}  {user1.yas}

      {dizi.map((element, index) => (
        <div key={index}>{element.name} {element.yas}</div>
      ))}
      <br /> <br />

      Sayılar Toplamı :
      {sum(120, 12)}

    </div>
  )
}

export default App
