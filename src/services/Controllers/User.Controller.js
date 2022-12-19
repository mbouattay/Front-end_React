import http from "../ApiUrl" ; 
const login =(data)=>{
    return http.post ("/user/login",data) 
}
const UserController={
    login
}
export default  UserController ;