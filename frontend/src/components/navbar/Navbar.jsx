import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Store } from "../../Context";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const menus = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/doctors",
      name: "Doctors",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const{state,dispatch} = useContext(Store)
  const{user} = state;

  const handleClick=()=>{
    dispatch({type:'LOGOUT'})
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setIsOpen(f)
    navigate('/login')
  }

  return (
    <>
      <div className=" flex justify-between items-center py-5 px-7 shadow-md bg-white">
        <div className="text-xl font-bold text-gray-700">
          <Link to="/">
            Doc<span className="text-blue-500 font-semibold">Appointment</span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-4 text-gray-700 font-semibold">
            {menus.map((menu) => (
              <ul key={menu.name}>
                <li className="">
                  <NavLink
                    to={menu.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500"
                        : "text-gray-700 hover:text-blue-950"
                    }
                  >
                    {menu.name}
                  </NavLink>
                </li>
                
              </ul>
              
            ))}
          </div>
          {
            user ?
            <div className="relative" >
            <AccountCircleIcon  onClick={()=>setIsOpen(!isOpen)} />

            {
            isOpen &&  <div className=" absolute right-0 top-14 flex flex-col gap-1 p-2 bg-gray-100 w-[100px] shadow-md rounded">
                <Link to='/profile'>
                    <span>Profile</span>
                </Link>
                <Link onClick={handleClick}>
                    <span>Logout</span>
                </Link>
            </div>
           }
            </div>
            :
            <Link
              to="/login"
              className="bg-blue-500 py-2 px-3 text-white rounded hover:bg-blue-700 duration-200 hover:scale-105"
            >
              Login
            </Link>
          }
          <div>
            
          </div>
        </div>

        <div className=" block md:hidden">
          <MenuIcon onClick={() => setIsOpen(!isOpen)} />
        </div>
       
      </div>

      
    </>
  );
};

export default Navbar;
