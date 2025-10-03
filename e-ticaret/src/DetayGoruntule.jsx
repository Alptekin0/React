import { useParams } from "react-router-dom";
import './still.css'


function DetayGoruntule({ product, addToCart }) {

  const { id } = useParams();

  const urun = product.find((u) => u.id === Number(id))

  const added = () => {
    addToCart(urun);
    console.log("Sepete eklendi: ", urun);
  }

  return (
    <div className="DetailContainer">
      <img src={urun.image} className="DetailImage" />
      <div>
        <h1 className="DetailTitle" > {urun.title} </h1>
        <p className="DetailRating" > <span style={{ color: "gray", display: "inline" }}>Category : &nbsp;</span> {urun.category}</p>
        <p className="DetailText">{urun.description}</p>
        <p className="DetailPrice"> <span className="price" >Price : </span> {urun.price} $</p>
        <div className="button-wrapper">
          <button className="box-button" onClick={added}>Add Cart</button>
        </div>
      </div>
    </div>
  );
}

export default DetayGoruntule;