import { PageTitle } from "@/components/ui/page-title";
import { File } from "lucide-react";
import Link from "next/link";

export default function Resume(){
  return (
    <>
      <PageTitle>My Resume</PageTitle>
      <section className="mt-4 flex">
        <Link href="/CV_Dhanny_Adhi_Pramana.pdf" className="flex gap-2 hover:underline underline-offset-4" target="__blank">
          <File className="text-yellow-600" />
          <p>Save Resume</p>
        </Link>
      </section>
    </>
  )
}