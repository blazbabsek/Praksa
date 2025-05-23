'use client'
import { useEffect, useState } from "react";

export default function Home() {

const [test, setTest] = useState("blaž");

useEffect(() => {
  console.log("Vrednost 'test' se je spremenila:", test);
}, [test]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     
    <div >
    {test}
    </div>
     
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            onClick={() => { setTest("Gregor") }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gregor
             
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            onClick={() => { setTest("Mojca") }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Mojca
          </a>
        </div>
      </main>
    </div>
  );
}
