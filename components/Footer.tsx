import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  const footerLinksJSX = footerLinks.map((link, i) => (
    <div key={i} className="footer__link">
      <h3 className="font-bold">{link.title}</h3>
      {link.links.map((linkItem, j) => (
        <Link key={j} href={linkItem.url} className="text-gray-500">
          {linkItem.title}
        </Link>
      ))}
    </div>
  ));
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-gray-700 text-base">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">{footerLinksJSX}</div>
      </div>
    </footer>
  );
};

export default Footer;
