import wishlistController from "../../services/Controllers/Wishliste.Controller";
import { useState , useEffect } from "react";
function Wishlist() {
  const [wishlist , setWishlist] = useState([]) ;
  useEffect(() => {
    wishlistController.getAll()
    .then((response)=>{
      console.log("data wishlist",response)
      setWishlist(response.data)
    })
    .catch((err)=>{console.log("error of  ",err)}) ;
  }, []);
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
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((e)=>(
                      <tr>
                      <td className="thumbnail-img">
                        <a >
                          <img
                            className="img-fluid"
                            src="images/gallery-img-01.jpg"
                            alt
                          />
                        </a>
                      </td>
                      <td className="name-pr">
                        <a href="#">{e._id}</a>
                      </td>
                      <td className="price-pr">
                        <p>DT</p>
                      </td>
                      <td className="quantity-box">In Stock</td>
                      <td className="add-pr">
                        <a className="btn hvr-hover" href="#">
                          Add to Cart
                        </a>
                      </td>
                      <td className="remove-pr">
                        <a href="#">
                          <i className="fas fa-times" />
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