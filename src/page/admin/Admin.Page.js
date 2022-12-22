import { useState , useEffect } from "react";
import UserController from "../../services/Controllers/User.Controller";
function Admin() {
    const [User, setuser] = useState([]);
    useEffect(() => {
        UserController.getAll()
        .then((response)=>{
            setuser(response.data)
        })
        .catch((err)=>{
                console.log ("err of " ,err) ;
        })
    }, [User]);
    const Remove =(id)=>{
        UserController.remove (id)
        .then ((response)=>{
                    if(response.status == 200) {
                        console.log ("remove done !!! ")
                    } else{
                        console.log ("error to remove user ")
                    }
        }) .catch ((err)=>{
                console.log("err of ", err)
        })
    }
    return ( <>
        <div className="wishlist-box-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="table-main table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
               
                {User.map((e,index)=>(
                              <tr key={index}>    
                              
                              <td className="name-pr">
                                <a href="#">{e?.nom}</a>
                              </td>
                              <td className="price-pr">
                                <p>{e?.email}</p>
                              </td>
                              <td className="remove-pr">
                                <a href="#">
                                  <i   onClick={()=>Remove(e._id)} className="fas fa-times" />
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
    
    </> );
}

export default Admin;