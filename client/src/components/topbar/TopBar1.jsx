import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./topbar1.css";

// export default function TopBar() {
//   const { user, dispatch } = useContext(Context);

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//   };
//   return (
//     <div className="top">
//       <div className="topLeft">
//         <h3>BOOKS</h3>
//         <i className="fas fa-book"></i>
//       </div>
//       <div className="topCenter">
//         <ul className="topList">
//           <li className="topListItem">
//             <Link className="link" to="/">
//               HOME
//             </Link>
//           </li>
//           <li className="topListItem">
//             <Link className="link" to="/write">
//               WRITE
//             </Link>
//           </li>
//           <li className="topListItem" onClick={handleLogout}>
//             {user && "LOGOUT"}
//           </li>
//         </ul>
//       </div>
//       <div className="topRight">
        // {user ? (
        //   <Link to="/settings" className="text-decoration-none">
        //     {user.username}
        //   </Link>
        // ) : (
//           <ul className="topList">
//             <li className="topListItem">
            //   <Link className="link" to="/login">
            //     LOGIN
            //   </Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/register">
//                 REGISTER
//               </Link>
//             </li>
//           </ul>
//         )}
        
//       </div>
//     </div>
//   );
// }

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
  
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    };
    return (
// <!-- Nav -->
        <>
            <nav id="nav" class="navbar nav-transparent">
                <div class="container">
                    <div class="navbar-header">
                        {/* <!-- Logo --> */}
                        <div class="navbar-brand">
                            <a href="index.html">
                                <img class="logo" src="Assets/img/learnify.png" alt="logo"/>
                                <img class="logo-alt" src="Assets/img/learnify-alt.png" alt="logo"/>
                            </a>
                        </div>
                        {/* <!-- /Logo --> */}

                        {/* <!-- Collapse nav button --> */}
                        <div class="nav-collapse">
                            <span></span>
                        </div>
                        {/* <!-- /Collapse nav button --> */}
                    </div>

                    {/* <!--  Main navigation  --> */}
                    <ul class="main-nav nav navbar-nav">
                        <li><Link className="link" to="/login">HOME</Link></li>
                        <li><Link className="link" to="/login">WRITE</Link></li>
                        <li><Link className="link" to="/login" onClick={handleLogout}>{user && "LOGOUT"}</Link></li>
                    </ul>
                    {user ? (
                        <Link to="/settings" className="text-decoration-none">
                            {user.username}
                        </Link>
                        ) : (
                        <ul class="main-nav nav navbar-nav navbar-right">
                            <li><Link className="link" to="/login">REGISTER</Link></li>
                            <li><Link className="link" to="/login">LOGIN</Link></li>
                        </ul>
                    
                    )}
                    {/* <!-- /Main navigation --> */}
                </div>
            </nav>
        </>
    )
}

// <!-- /Nav -->