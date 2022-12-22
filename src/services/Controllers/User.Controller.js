import http from "../ApiUrl" ; 
const login =(data)=>{
    return http.post ("/user/login",data) 
}
const getAll=()=>{
    return http.get ("/user/")
}
const remove =( id) =>{
    return http.delete("/user/"+id) 
}
const UserController={
    login ,
    getAll,
    remove
}
export default  UserController ;