import http from "../ApiUrl" ;
const getAll =()=>{
    return http.get("/wishlist")
}
const Add = (data)=>{
    return http.post("/wishlist",data)
}
const remove =(id)=>{
    return http.delete("/wishlist/"+id)
}
const wishlistController = {
    getAll,
    Add,
    remove
}
export default wishlistController ; 