"use client"

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav(){
  const pathname = usePathname()

  return (
    <nav className="bg-zinc-700 w-full lg:w-2/3 py-4 px-8 self-end rounded-bl-xl">
      <ul className="flex justify-evenly items-center">
        <li>
          <Link href="/" className={cn(
            "hover:text-yellow-600 hover:font-semibold",
            {
              "text-yellow-600 font-semibold" : pathname === '/'
            }
          )}>About</Link>
        </li>
        <li>
          <Link href="/resume" className={cn(
            "hover:text-yellow-600 hover:font-semibold",
            {
              "text-yellow-600 font-semibold" : pathname === '/resume'
            }
          )}>Resume</Link>
        </li>
        <li>
          <Link href="/portofolio" className={cn(
            "hover:text-yellow-600 hover:font-semibold",
            {
              "text-yellow-600 font-semibold" : pathname === '/portofolio'
            }
          )}>Portofolio</Link>
        </li>
        {/* <li>
          <Link href="/contact" className={cn(
            "hover:text-yellow-600 hover:font-semibold",
            {
              "text-yellow-600 font-semibold" : pathname === '/contact'
            }
          )}>Contact</Link>
        </li> */}
      </ul>
    </nav>
  )
}