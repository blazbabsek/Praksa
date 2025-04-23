import "./globals.css";
import Link from "next/link";
import Image from "next/image"; // za optimizacijo slik v Next.js
import "tailwindcss";

export default function Header() {
  return (
    <header className="bg-white p-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={20} className="mr-4"/>
        </div>
        <nav className="flex items-center space-x-7">
          <Link href="/" className="text-[17px] text-[#121327] no-underline transition-colors duration-300 hover:text-[red]">
            Domov
          </Link>
          <Link href="/o_nas" className="text-[17px] text-[#121327] no-underline transition-colors duration-300 hover:text-[red]">
            O Nas
          </Link>
          <Link href="/zgodovina" className="text-[17px] text-[#121327] no-underline transition-colors duration-300 hover:text-[red]">
            Zgodovina
          </Link>
          <Link href="/aktualno" className="text-[17px] text-[#121327] no-underline transition-colors duration-300 hover:text-[red]">
            Aktualno
          </Link>
          <Link href="/kontakt" className="text-[17px] text-[#121327] no-underline transition-colors duration-300 hover:text-[red]">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
