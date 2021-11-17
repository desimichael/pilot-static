export default function ProductHighlight1() {
  return (
    <div className="product-highlight product-highlight1">
     <div className="container">
       <div className="row">
         <div className="col-md-4">
          <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          className="product-highlight1__img" />
         </div>
         <div className="col-md-8">
           <div className="product-highlight1__info-container">
              <h2 className="product-highlight1__title">Product</h2>
              <p className="product-highlight1__paragraph">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor ut aspernatur consequuntur modi? Ab!
             </p>
             <button className="product-highlight1__button">
               Add To Cart
             </button>
           </div>
         </div>
       </div>
     </div>
    </div>
  )
}