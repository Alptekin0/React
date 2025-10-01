// Container.jsx
function Container({ book }) {

  if (!book) return null;
  return (


    <div className="container">
      <img className="image" alt={book.title} src={book.coverLarge} />
      <div className="text-section">
        <h1 className="text-head">{book.title}</h1>

        <div className="detaylar">
          <p><strong>Yazar:</strong> {book.authors}</p>
          <p><strong>Yayınevi:</strong> {book.publisher}</p>
          <p><strong>Sayfa:</strong> {book.pages}</p>
          <p><strong>Basım Yeri:</strong> {book.publishPlace}</p>
          <p><strong>Basım Tarihi:</strong> {book.publishDate}</p>
          <p><strong>Konu:</strong> {book.subjects}</p> <br /> <br />
          <a className="link" href={book.link} target="_blank" rel="noopener noreferrer">{book.title} hakkında detaylı bilgi için tıklayınız...</a>
        </div>
      </div>
    </div>
  )
}

export default Container;