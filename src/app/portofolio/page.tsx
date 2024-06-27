import { PageTitle } from "@/components/ui/page-title";
import Image from "next/image";

export default function Portofolio(){
  return (
    <>
      <PageTitle>My Portofolio</PageTitle>
      <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <section>
          <Image
            src="/labkesda.png"
            width={200}
            height={200}
            className="w-full md:w-64 h-56 rounded-xl object-cover"
            alt="Labkesda"
          />
          <h5 className="font-semibold text-sm mt-4">Laboratory Information System</h5>
          <p className="text-sm">Fullstack Developer</p>
        </section>

        <section>
          <Image
            src="/syrkel.png"
            width={200}
            height={200}
            className="w-full md:w-64 h-56 rounded-xl object-cover object-top"
            alt="Syrkel"
          />
          <h5 className="font-semibold text-sm mt-4">Syrkel.co</h5>
          <p className="text-sm">Frontend Developer</p>
        </section>

        <section>
          <Image
            src="/anilist.png"
            width={200}
            height={200}
            className="w-full md:w-64 h-56 rounded-xl object-cover object-top"
            alt="Anilist"
          />
          <h5 className="font-semibold text-sm mt-4">Anilist</h5>
          <p className="text-sm">Frontend Developer</p>
        </section>
        
        <section>
          <Image
            src="/sisperlak.png"
            width={200}
            height={200}
            className="w-full md:w-64 h-56 rounded-xl object-cover object-top"
            alt="Anilist"
          />
          <h5 className="font-semibold text-sm mt-4">Research Service Licensing System</h5>
          <p className="text-sm">Fullstack Developer</p>
        </section>
      </section>
    </>
  )
}