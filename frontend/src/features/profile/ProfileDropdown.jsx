import React from "react";

const ProfileDropdown = () => {
  return (
    <details className="dropdown dropdown-end">
      <summary className="list-none cursor-pointer">
        <img src="/images/profile.jpg" alt="" className="size-8 rounded-sm" />
      </summary>

      <ul className="dropdown-content menu bg-base-100 rounded-box w-max z-[1] p-1 shadow">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </details>
  );
};

export default ProfileDropdown;
