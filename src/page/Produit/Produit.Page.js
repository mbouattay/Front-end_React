import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import produitController from "../../services/Controllers/Produit.Controller";
import wishlistController from "../../services/Controllers/Wishliste.Controller";


function Produit() {
  
  const [produit, setproduit] = useState([]);   

  useEffect(() => {
    produitController.getAll()
    .then((response)=>{
      console.log("data produit",response)
      setproduit(response.data)
      
    })
    .catch((err)=>{console.log("error of  ",err)}) ;
  }, []);
  const Add_Wishlist=(data)=>{
        wishlistController.Add(data)
        .then((response)=>{
            if(response.status==200){
              console.log("add Done")
            }else{
              console.log("err to add ")
            }
        }).catch((err)=>{
            console.log("err of",err) ;
        })
  }



  return (
    <>
      <div className="products-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>Our Gallery </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet lacus enim.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu text-center">
                <div className="button-group filter-button-group">
                  <button className="active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".bulbs">Bulbs</button>
                  <button data-filter=".fruits">Fruits</button>
                  <button data-filter=".podded-vegetables">
                    Podded vegetables
                  </button>
                  <button data-filter=".root-and-tuberous">
                    Root and tuberous
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row special-list">
            {produit.map((data,index)=>(
                  <div key={index} className="col-lg-3 col-md-6 special-grid bulbs">
                  <div className="products-single fix">
                    <div className="box-img-hover">
                      <div className="type-lb">
                        <p className="sale">{data.nom}</p>
                      </div>
                      <img
                        src="images/instagram-img-08.jpg"
                        className="img-fluid"
                        alt="Image"
                      />
                      <p> Prix : {data.prix}</p>
                      <div className="mask-icon">
                        <ul>
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="View"
                            >
                              <i className="fas fa-eye" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Compare"
                            >
                              <i className="fas fa-sync-alt" />
                            </a>
                          </li>
                          <li>
                            <Link to={"/wishlist"}
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Add to Wishlist"
                              onClick={()=>Add_Wishlist({user:"639e118054a2fd1276da1b82",Produit:data._id})}
                            >
                              <i className="far fa-heart" />
                            </Link>
                          </li>
                        </ul>
                        <a className="cart" href="#">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Produit;
