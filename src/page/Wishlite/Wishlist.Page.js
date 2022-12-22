import wishlistController from "../../services/Controllers/Wishliste.Controller";
import UserContext from "../../ContextApi/User.Context";
import { useState , useEffect,useContext } from "react";
function Wishlist() {
  const [wishlist , setWishlist] = useState([]) ;
  const {value , setvalue}=useContext(UserContext)
  useEffect(() => {
    wishlistController.getAll()
    .then((response)=>{
      setWishlist(response.data)
    })
    .catch((err)=>{console.log("error of  ",err)}) ;
  }, [wishlist]);
   const Remove =(id)=>{
      wishlistController.remove(id)
      .then((response)=>{
          if(response.status == 200){
              console.log("remove done !!! ")
          } else{
              console.log("Erorr to Remove your wishlist")
          }
      })
   }
  
  return (
    <div className="wishlist-box-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="table-main table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Images</th>
                    <th>Product Name</th>
                    <th>Unit Price </th>
                    <th>Stock</th>
                    <th>Add Item</th>
                  </tr>
                </thead>
                <tbody>
               
                {wishlist.map((e,index)=>(
                              <tr key={index}>    
                              <td className="thumbnail-img">
                                <a >
                                  <img
                                    className="img-fluid"
                                    src="images/instagram-img-08.jpg"
                                  />
                                </a>
                              </td>
                              <td className="name-pr">
                                <a href="#">{e.Produit?.nom}</a>
                              </td>
                              <td className="price-pr">
                                <p>{e.Produit?.prix}DT</p>
                              </td>
                              <td className="quantity-box">In Stock</td>
                              <td className="add-pr">
                                <a className="btn hvr-hover" href="#">
                                  Add to Cart
                                </a>
                              </td>
                              <td className="remove-pr">
                                <a href="#">
                                  <i  onClick={()=>Remove(e._id)} className="fas fa-times" />
                                </a>
                              </td>
                            </tr>
                ))}
                      
                
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;