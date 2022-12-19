import Footer from "../../Component/Footer/Footer.Component";
import NavBar from "../../Component/NavBar/NavBar.Component";
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>
        {/* Start Main Top */}
            <NavBar/>
        {/* End Main Top */}
        {/* Start Top Search */}
        <div className="top-search">
          <div className="container">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-search" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <span className="input-group-addon close-search">
                <i className="fa fa-times" />
              </span>
            </div>
          </div>
        </div>
        {/* End Top Search */}
        {/* Start All Title Box */}
        
        {/* End All Title Box */}
        {/* Start Gallery  */}
                    <Outlet/>
        {/* End Gallery  */}
            <Footer/>
      </div>
    </>
  );
}

export default Home;
