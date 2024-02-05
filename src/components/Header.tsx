import { links } from "../constants/constant";
import Logo from "/logo.svg";
import CartIcon from "/icons/icon-cart.svg";
import Profile from "/image-avatar.png";
import { useGContext } from "../context/globalContext";
function Header() {
  const { numberOfProducts, setIsOpen, isOpen } = useGContext();

  const handleOpenCart = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="py-8 border-b-2">
      <nav className="flex justify-between items-center">
        <div className="flex gap-16">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <ul className="flex gap-4 text-darkGrayishBlue">
            {links.map((item) => (
              <li
                key={item.label}
                className="hover:text-primaryColorOrange transition-all ease-in duration-150 "
              >
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-8 relative">
          {numberOfProducts > 0 && (
            <span className="text-white rounded-[50%] w-[24px] h-[24px] text-[14px] bg-primaryColorOrange flex justify-center items-center absolute top-[-18%] left-[18%]">
              <p>{numberOfProducts}</p>
            </span>
          )}
          <button onClick={handleOpenCart}>
            <img src={CartIcon} alt="Cart Icon" width={24} height={24} />
          </button>
          <a
            href="#"
            className="hover:outline-primaryColorOrange outline-white hover:outline rounded-[50%] transition-all ease-in-out duration-200"
          >
            <img src={Profile} width={36} height={36} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
