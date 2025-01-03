import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-950 md:p-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-3 p-5 mx-auto justify-items-center items-center text-center">
        <div>
          <h1 className="text-xl py-2 font-semibold text-white">
            Follow Us On:
          </h1>
          <div className="text-white flex justify-center items-center gap-4">
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <PinterestIcon />
          </div>
          <h2 className="text-xl pt-2 font-semibold text-white">Address:</h2>
          <div>
            <p className="text-white">House:3, Road-5, Dhaka, Bangladesh.</p>
            <p className="text-white">Phone:01303802605</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl py-2 font-semibold text-white">For Users:</h2>
          <div className="flex flex-col gap-2 text-white">
            <Link>Doctor List</Link>
            <Link>Terms & Condition</Link>
            <Link>Privacy Policy</Link>
            <Link>Refund Policy</Link>
          </div>
        </div>
        <div>
          <h2 className="text-xl py-2 font-semibold text-white">
            For Doctors:
          </h2>
          <div className="flex flex-col gap-2 text-white">
            <Link>Register as a Doctor</Link>
            <Link>Terms & Condition</Link>
            <Link>Privacy Policy</Link>
            <Link>Refund Policy</Link>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-white text-center">&copy;<a href='https://github.com/shuvo-220'>shuvo</a>Allrights reserved.</h1>
    </div>
  );
};

export default Footer;
