import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home.Page";
import Login from "./page/Login/Login.Page";
import Register from "./page/Register/Register.Page";
import Produit from "./page/Produit/Produit.Page";
import Wishlist from "./page/Wishlite/Wishlist.Page";
function App() {
  return (
        <Routes>
              <Route path="/" element={<Home/>}>
                    <Route path="/" element={<Produit/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>
              </Route>
              
             
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
        </Routes>
  );
}

export default App;
