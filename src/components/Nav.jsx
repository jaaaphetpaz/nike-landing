import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:underline underline-offset-4"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <button
            className="btn__menu btn__menu--open text-slate-gray hidden max-lg:block hover:scale-105 cursor-pointer"
            onClick={openMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="menu__backdrop bg-slate-gray bg-opacity-80">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="menu__links">
            {navLinks.map((item) => (
              <li className="menu__list" key={item.label} onClick={closeMenu}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-2xl text-white hover:underline underline-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
