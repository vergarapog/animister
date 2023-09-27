import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarControls = () => {
  return (
    <ul className="mx-2 flex space-x-0.5">
      <li>
        <FontAwesomeIcon
          className="cursor-pointer rounded bg-[#4293a7] p-2 transition-all hover:scale-110 hover:bg-accent"
          icon="filter"
        />
      </li>
      <li>
        <FontAwesomeIcon
          className="cursor-pointer rounded bg-[#4293a7] p-2 transition-all hover:scale-110 hover:bg-accent"
          icon="trash"
        />
      </li>
      <li>
        <FontAwesomeIcon
          className="cursor-pointer rounded bg-[#4293a7] p-2 transition-all hover:scale-110 hover:bg-accent"
          icon="download"
        />
      </li>
    </ul>
  );
};

export default NavbarControls;
