import UserController from "../../services/Controllers/User.Controller";
import { useState ,useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../ContextApi/User.Context";
import { useContext } from "react";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Role, setRole] = useState(null);
  const [data ,setdata] = useState("") ; 
  const {value,setvalue}=useContext(UserContext) ;
  const login = () => {
    UserController.login({ email: email, password: password })
      .then((response) => {
        console.log(" response of login  ", response);
        if (response.status === 200) {
          setRole(true);                                  // par default  bech ihezou  el page produit nesite mazitech champ role :)
          setvalue(response.data.data)
        }
      })
      .catch((err) => {
        console.log("error of login ", err);
      });
  };
  return (
    <div>
      <div className="container">
        {/* Outer Row */}
        {Role  && <Navigate to="/" replace={true} />}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back! , {data}</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            onChange={(e) => setemail(e.target.value)}
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            onChange={(e) => setpassword(e.target.value)}
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <a
                          onClick={() => login()}
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </a>
                        <hr />
                        <a className="btn btn-google btn-user btn-block">
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </a>
                        <a className="btn btn-facebook btn-user btn-block">
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a  onClick={()=>setdata(" takrize ")} className="small">
                          Create an Account!
                        </a>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
