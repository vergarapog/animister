import { Link } from "react-router-dom";

type Props = {
  routeName: string;
};

const Breadcrumbs = ({ routeName }: Props) => {
  return (
    <nav className="mt-4 w-full text-center text-primarydark ">
      <Link
        to="/"
        className="rounded p-1 text-xl hover:bg-accent hover:text-white"
      >
        Home
      </Link>{" "}
      /{" "}
      <Link to="" className="text-xl font-bold">
        {routeName}
      </Link>
    </nav>
  );
};

export default Breadcrumbs;
