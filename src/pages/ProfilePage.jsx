import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../componants/AccountNav";

const ProfilePage = () => {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }
  if (!ready) {
    return <div>Loading...</div>;
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  async function logout() {
    try {
      await axios.post("/api/logout");
      setRedirect("/");
      setUser(null);
    } catch (e) {
      console.log(e);
    }
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-xl mx-auto">
          Logged in as {user.name} ({user.email}) <br />
          <button
            style={{ cursor: "pointer" }}
            onClick={logout}
            className="mt-4 bg-[#3A5F0B] text-white py-2 px-4 rounded-full hover:bg-[#800517]"
          >
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
};
export default ProfilePage;
