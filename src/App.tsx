import { IoCartOutline } from "react-icons/io5";
import Avatar from "./assets/images/image-avatar.png";
import { useState } from "react";

export function App() {
  const [active, setActive] = useState<string>("collections");

  const handleClick = (page: string) => {
    setActive(page);
  };

  const menuItens = [
    { label: "Collections" },
    { label: "Men" },
    { label: "Women" },
    { label: "About" },
    { label: "Contact" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto h-full">
      <nav className="flex items-center gap-12 h-24 border-b border-colorGrayishBlue">
        <h2 className="font-bold text-3xl">sneakers</h2>

        <ul className="h-full flex-1 flex items-center gap-5 ">
          {menuItens.map((item) => (
            <li
              key={item.label}
              onClick={() => handleClick(item.label.toLowerCase())}
              className={`${
                active === item.label.toLowerCase()
                  ? "h-full border-colorOrange border-b-2 hover:text-colorVeryDarkBlue"
                  : "text-colorDarkGrayishBlue border-b-0"
              } flex items-center hover:text-colorVeryDarkBlue`}
            >
              <a href="#">
                {item.label.split("").map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </a>
            </li>
          ))}
        </ul>

        <IoCartOutline className="size-6 text-colorDarkGrayishBlue cursor-pointer hover:scale-110" />

        <div className="rounded-full ring-colorOrange hover:ring-2 cursor-pointer">
          <img className="size-10 " src={Avatar} alt="Image Avatar" />
        </div>
      </nav>

      {/* Sneaker Company

  Fall Limited Edition Sneakers

  These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.

  $125.00
  50%
  $250.00

  0
  Add to cart */}
    </div>
  );
}
