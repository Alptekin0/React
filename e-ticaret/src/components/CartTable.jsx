function CartTable({ cart }) {
     const total = cart.reduce((sum, item) => sum + item.price, 0);

     return (
          <div className='cart-container'>
               <table className="cart-table">
                    <thead>
                         <tr>
                              <th>Image</th>
                              <th>İsim</th>
                              <th>Fiyat</th>
                         </tr>
                    </thead>
                    <tbody>
                         {cart.map((item, index) => (
                              <tr key={index}>
                                   <td><img src={item.image} alt={item.title} width={50} /></td>
                                   <td>{item.title}</td>
                                   <td>{item.price} $</td>
                              </tr>
                         ))}
                    </tbody>
                    <tfoot>
                         <tr>
                              <td colSpan="2" className="total-footer">Toplam Tutar :</td>
                              <td className="total-footer">{total} $</td>
                         </tr>
                    </tfoot>
               </table>
          </div>
     );
}

export default CartTable;
