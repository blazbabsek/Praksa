export default function Navbar() {
    return (
<header class="fixed left-0 top-0 w-full z-50 bg-white dark:bg-black shadow-md transition duration-200">
    <div class="mx-auto max-w-1390 px-4 md:px-8 2xl:px-0 flex items-center justify-between py-4">
        <nav class="hidden lg:flex items-center space-x-6 text-black dark:text-white">
            <link href="/" class="hover:text-red transition">Domov</link>
            <link href="/o-nas" class="hover:text-red transition">O Nas</link>
            <link href="/zgodovina" class="hover:text-red transition">Zgodovina</link>
            <link href="/aktualno" class="hover:text-red transition">Aktualno</link>
            <link href="/kontakt" class="hover:text-red transition">Kontakt</link>
        </nav>
            <button class="lg:hidden flex flex-col space-y-1 p-2 focus:outline-none">
                <span class="block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 "></span>
                <span class="block w-6 h-0.5 bg-black dark:bg-white transition-opacity duration-300 "></span>
                <span class="block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 "></span>
            </button>
        <div class="fixed inset-x-0 top-18 bg-white dark:bg-black shadow-md transition-transform duration-300 ease-in-out -translate-y-full opacity-0 pointer-events-none lg:hidden">
            <nav class="flex flex-col items-center space-y-4 py-6 text-black dark:text-white">
                <link href="/" class="hover:text-red transition">Domov</link>
                <link href="/o-nas" class="hover:text-red transition">O Nas</link>
                <link href="/zgodovina" class="hover:text-red transition">Zgodovina</link>
                <link href="/aktualno" class="hover:text-red transition">Aktualno</link>
                <link href="/kontakt" class="hover:text-red transition">Kontakt</link>
            </nav>
        </div>
    </div>
</header>
    );
  }
