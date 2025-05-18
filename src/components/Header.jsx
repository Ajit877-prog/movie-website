import { useEffect, useState } from "react";
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";
import { useNavigate } from "react-router-dom";

function Header({ user, setUser }) {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img
          src="/disney-hotstar-logo-dark.svg"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderList name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderList name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderList name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index >= 3 && (
                      <div className="mt-3">
                        <HeaderList name={item.name} Icon={item.icon} />
                      </div>
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-white">{user.username || user.name || user.email.split('@')[0]}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
