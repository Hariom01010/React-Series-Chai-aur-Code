import React from "react";
import { Container, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="shadow-lg bg-blue-950  py-4 px-8">
      <Container>
        <nav className="flex justify-between">
          <div id="imageLogo">
            <p>your logo</p>
          </div>

          <div id="options">
            <ul className="flex justify-between px-4">
              {navItems.map((navItem)=>
                navItem.active? (<li key={navItem.name} className="px-4"><button onClick={()=>navigate(navItem.slug)}>{navItem.name}</button></li>) : null
              )}
              {authStatus && (
                <li><LogoutBtn /></li>
              )}
            </ul>
          </div>

          <div id="login">
            <button>Login</button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
