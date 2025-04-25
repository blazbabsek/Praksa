import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import "tailwindcss";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 w-full z-50 bg-white shadow-md transition duration-200">
      <div className="mx-auto max-w-1390 px-4 md:px-8 2xl:px-0 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={120} height={40} className=""/>
        </div>
        <nav className="hidden lg:flex items-center space-x-6 text-black dark:text-white">
          <Link href="/" className="text-[16px] text-[#121327] no-underline transition-colors duration-300 hover:text-[red]">
            Domov
          </Link>
          <Link href="/o_nas" className="text-[16px] text-[#121327] no-underline transition-colors duration-300 hover:text-[red]">
            O Nas
          </Link>
          <Link href="/zgodovina" className="text-[16px] text-[#121327] no-underline transition-colors duration-300 hover:text-[red]">
            Zgodovina
          </Link>
          <Link href="/aktualno" className="text-[16px] text-[#121327] no-underline transition-colors duration-300 hover:text-[red]">
            Aktualno
          </Link>
          <Link href="/kontakt" className="text-[16px] text-[#121327] no-underline transition-colors duration-300 hover:text-[red]">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
