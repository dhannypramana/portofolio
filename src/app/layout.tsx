import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/partials/nav";

const font = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhanny Adhi Pramana - Software Engineer",
  description: "dedicated and proficient Software Engineer with expertise in developing high-quality, scalable software solutions and a passion for staying updated with the latest industry trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased leading-relaxed container py-8 px-16`}>
        <section className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
          <Card className="p-5 min-w-[300px]">
            <section className="grid place-items-center gap-2">
              <Image
                src="/dhanny.jpg"
                alt="Dhanny Adhi Pramana"
                width={100}
                height={100}
                className="rounded-full size-32 object-cover object-top"
              />
              <h3 className="text-xl font-bold">Dhanny Adhi Pramana</h3>
              <Badge>Front End Engineer</Badge>
              <hr className="border border-zinc-700 w-full rounded-2xl mt-1.5" />
            </section>
            <section className="mt-4 flex flex-col gap-4">
              <section className="flex items-center gap-4">
                <span className="bg-zinc-700 size-14 rounded-[7px] grid place-items-center flex-shrink-0">
                  <Mail className="text-yellow-600" size={24} />
                </span>
                <div className="w-[75%]">
                  <h4 className="font-bold">Email</h4>
                  <p className="truncate">p.dhannypramana@gmail.com</p>
                </div>
              </section>
              
              <section className="flex items-center gap-4">
                <span className="bg-zinc-700 size-14 rounded-[7px] grid place-items-center flex-shrink-0">
                  <Phone className="text-yellow-600" size={24} />
                </span>
                <div className="w-[75%]">
                  <h4 className="font-bold">Phone</h4>
                  <p className="truncate">+62 895 4176 35214</p>
                </div>
              </section>
              
              <section className="flex items-center gap-4">
                <span className="bg-zinc-700 size-14 rounded-[7px] grid place-items-center flex-shrink-0">
                  <Phone className="text-yellow-600" size={24} />
                </span>
                <div className="w-[75%]">
                  <h4 className="font-bold">Whatsapp</h4>
                  <p className="truncate">+62 831 9183 1403</p>
                </div>
              </section>
              
              <section className="flex items-center gap-4">
                <span className="bg-zinc-700 size-14 rounded-[7px] grid place-items-center flex-shrink-0">
                  <CalendarDays className="text-yellow-600" size={24} />
                </span>
                <div className="w-[75%]">
                  <h4 className="font-bold">Birthday</h4>
                  <p className="truncate">05 August 2000</p>
                </div>
              </section>

              <section className="flex items-center gap-4">
                <span className="bg-zinc-700 size-14 rounded-[7px] grid place-items-center flex-shrink-0">
                  <MapPin className="text-yellow-600" size={24} />
                </span>
                <div className="w-[75%]">
                  <h4 className="font-bold">Location</h4>
                  <p className="truncate">Bandar Lampung, Indonesia</p>
                </div>
              </section>
            </section>
            <section className="grid place-items-center mt-6">
              <section className="flex gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="https://www.instagram.com/danwsaps" target="_blank">
                        <Instagram size={18} />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      @danwsaps
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="https://www.github.com/dhannypramana" target="_blank">
                        <Github size={18} />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      @dhannypramana
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="https://www.linkedin.com/in/dhannypramana" target="_blank">
                        <Linkedin size={18} />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      @dhannypramana
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </section>
            </section>
          </Card>
          <Card className="min-w-[340px] flex flex-col">
            <Nav />
            <section className="px-8 py-4">
              {children}
            </section>
          </Card>
        </section>
      </body>
    </html>
  );
}
