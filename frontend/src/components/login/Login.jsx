import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Context";

const Login = () => {
  const { state, dispatch } = useContext(Store);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
      });
      dispatch({ type: "LOGIN", payload: res.data });
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        alert('Login Successful')
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-5">
      <div className="flex flex-col justify-center items-center md:py-[150px]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-center text-3xl font-semibold">Login</h1>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 px-3 outline-none border-2 border-blue-950 rounded shadow-md"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 px-3 outline-none border-2 border-blue-950 rounded shadow-md"
              />
            </div>
            <div>
              <input
                type="submit"
                placeholder="Login"
                className="py-2 px-[78px] cursor-pointer outline-none border-2 bg-blue-950 rounded shadow-md text-white"
              />
            </div>
            <p>
              Don't have any account?
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
