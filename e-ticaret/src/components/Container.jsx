import Boxes from "./Boxes"


function Container({ product }) {
  return (
    <div className='container'>
      {product.length > 0 && product.map((product) => (
        <Boxes key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Container