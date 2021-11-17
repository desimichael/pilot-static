export default function ProductHighlight2() {
  return (
    <div className="product-highlight product-highlight2">
     <div className="container">
       <div className="row">
         <div className="col-md-4">
          <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          className="product-highlight2__img" />
         </div>
         <div className="col-md-8">
           <div className="product-highlight2__info-container">
              <h2 className="product-highlight2__title">Product Highlight</h2>
              <p className="product-highlight2__paragraph">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor ut aspernatur consequuntur modi? Ab!
             </p>
             <button className="product-highlight2__button">
               Add To Cart
             </button>
           </div>
         </div>
       </div>
     </div>
    </div>
  )
}