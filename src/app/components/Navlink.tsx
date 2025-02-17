import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg lg:text-xl rounded md:p-0 hover:text-purple-400"
    >
      {title}
    </Link>
  );
};

export default NavLink;
