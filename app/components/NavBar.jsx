"use client";
import Link from "next/link";

const mainRoutes = [
  {
    button: "Reg",
    route: "/pageRoutes/register",
  },
  {
    button: "Ent",
    route: "/pageRoutes/login",
  },
];
export function NavBar() {
  return (
    <div className="flex bg-blue-400 text-white gap-4 py-3 px-10 w-full justify-between items-center">
      <div className="flex gap-1.5">
        <Link href="/">
          <button className="flex text-4xl">\/-YARN</button>
        </Link>
      </div>

      <div className="flex gap-4 text-sm">
        {mainRoutes.map(({ button, route }) => (
          <button
            className="flex px-6 rounded border-8 border-b-white border-t-white bg-blue-100 font-bold text-blue-900"
            key={route}
          >
            <Link href={route}>{button}</Link>
          </button>
        ))}
      </div>

      <div className="flex gap-6 text-sm">
        <div className="flex gap-2"></div>

        <button className="flex px-6 rounded border-8 border-b-white border-t-white bg-blue-100 font-bold text-blue-900">
          Vídeos
        </button>
        <button className="flex px-6 rounded border-8 border-b-white border-t-white bg-blue-100 font-bold text-blue-900">
          Directos
        </button>
      </div>
    </div>
  );
}
export default NavBar;
