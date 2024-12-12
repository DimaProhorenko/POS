import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../auth/authApiSlice";
import toast from "react-hot-toast";

const ProfileDropdown = () => {
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await logout().unwrap();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.data.msg || "Something went wrong");
    }
  };

  return (
    <details className="dropdown dropdown-end">
      <summary className="list-none cursor-pointer">
        <img src="/images/profile.jpg" alt="" className="size-8 rounded-sm" />
      </summary>

      <ul className="dropdown-content menu bg-base-100 rounded-box w-max z-[1] p-1 shadow">
        <li>
          <Link to="/create-user">Create user</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </details>
  );
};

export default ProfileDropdown;
