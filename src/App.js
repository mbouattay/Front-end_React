import { Route, Routes } from "react-router-dom";
import { useState} from "react";
import Home from "./page/Home/Home.Page";
import Login from "./page/Login/Login.Page";
import Register from "./page/Register/Register.Page";
import Produit from "./page/Produit/Produit.Page";
import Wishlist from "./page/Wishlite/Wishlist.Page";
import UserContext from "./ContextApi/User.Context";
import Admin from "./page/admin/Admin.Page";
function App() {
const [value, setvalue] = useState({});
  return (
    <UserContext.Provider value={{value , setvalue}}>
      <Routes>
      
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Produit />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<Admin/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
      </Routes>
      </UserContext.Provider>
   

   
  );
}

export default App ;
