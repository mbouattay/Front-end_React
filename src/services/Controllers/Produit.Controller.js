import http from "../ApiUrl" ; 
const getAll =()=>{
    return http.get ("/produit")
}
const produitController={
    getAll
}
export default  produitController ;