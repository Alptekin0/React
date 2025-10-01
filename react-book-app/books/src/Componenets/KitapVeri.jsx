import axios from 'axios';
import { useEffect } from 'react';

function KitapVeri({ data }) {

  const ISBN = {    //INTERNATIONAL STANDART BOOK NUMBER
    aclikOyunlari: "9780439023528",
    simyaci: "9780062315007",
    mobbyDick: "9780142437230",
    budala: "9780140447927",
    monteCristo: "9780140449266",
    gururVeOnyargi: "9780141439723",
    sucVeCeza: "9780141439518",
    ikiSehrinHikayesi: "9780141439600",
    frankenstein: "9780141439471",
    oliverTwist: "9780141439747",
    sefiller: "9780140449426",
    emma: "9780141439846",
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const isbnKeys = Object.values(ISBN);

      for (const isbn of isbnKeys) {
        const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
        try {
          const response = await axios.get(url);
          const book = response.data[`ISBN:${isbn}`];

          if (!book) continue;

          const bookData = {
            title: book.title,
            link: book.url,
            pages: book.number_of_pages,
            publishPlace: book.publish_places?.[0]?.name,
            publishDate: book.publish_date,
            subjects: book.subject_people?.map(p => p.name).join(", ") || "Yok",
            publisher: book.publishers?.[0]?.name,
            authors: book.authors?.map(a => a.name).join(", ") || "Yok",
            coverLarge: book.cover?.large,
          };

          data(prev => [...prev, bookData]);

        } catch (err) {
          console.error(`ISBN ${isbn} için hata:`, err.message);
        }
      }
    };

    fetchBooks();
  }, []);

  return <div></div>;
}

export default KitapVeri;
