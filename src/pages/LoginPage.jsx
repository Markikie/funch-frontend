import { Link, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      setUser(response.data);
      alert("Login successful.");
      setRedirect(true);
    } catch (e) {
      alert("Login failed. Please try again.");
      console.log(e);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-3xl text-center mb-4">Login</h1>
        <form
          className="max-w-md mx-auto"
          action=""
          onSubmit={handleLoginSubmit}
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="login">Login</button>
          <div className="text-center py-2 text-gray-500">
            Dont have an account?
            <Link className="underline text-black" to="/register">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
