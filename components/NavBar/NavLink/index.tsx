import { FC } from "react";
import Link from 'next/link'

interface INavLink {
  link: string;
  text?: string;
  classes?: string;
}

const NavLink: FC<INavLink> = ({ link, text, classes }) => {
  return (
    <Link href={link.toLowerCase()}  passHref={true}>
      <div
        className={
          `px-8 flex items-center justify-center cursor-pointer hover:text-red-600 ${classes ?? ''}`
        }
      >
        {text || link}
      </div>
    </Link>
  );
};

export default NavLink;
