import { useNavigate } from 'react-router-dom';

function Boxes({ product }) {

     const navigate = useNavigate();

     const click = () => {
          navigate("/detay/" + product.id, { state: { product } })
     }


     return (
          <div className="boxes-container" onClick={click} >
               <div>
                    <img className="box-image" src={product.image} alt={product.title} />
               </div>
               <div className="box-content">
                    <h1 className="box-title">
                         {product.title.length > 30
                              ? product.title.slice(0, 30) + "..."
                              : product.title}
                    </h1>
                    <p className="box-text">
                         {product.description.length > 150
                              ? product.description.slice(0, 150) + "..."
                              : product.description}
                    </p>
                    <div className="button-container">
                         <button className="box-button">
                              Detayı Gör
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default Boxes