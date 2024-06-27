import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { PageTitle } from "@/components/ui/page-title"

export default function Home() {
  return (
    <>
      <PageTitle>About Me</PageTitle>
      <section className="mt-4">
        <p className="mb-2 text-sm md:text-base">
          Hello!, My name is Dhanny Adhi Pramana, I am a fresh graduate in Informatics Engineering with a strong passion for Front-End Engineering and expertise in UI slicing techniques.
          I am a critical thinker and a data-oriented individual with strong problem-solving skills.
        </p>
        <p className="text-sm md:text-base">
          Proficient in various programming languages and frameworks, with hands-on experience in web and mobile projects.
          Able to work effectively both independently and collaboratively, and quick to adapt to new work environments.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold text-xl">What I&apos;m doing</h3>
        <section className="grid grid-cols-2 gap-8 mt-3">
          <Card className="bg-zinc-700 p-5">
            <h4 className="font-semibold">Front End</h4>
            <section className="flex flex-wrap gap-2 mt-2">
              <Badge>HTML5</Badge>
              <Badge>CSS3</Badge>
              <Badge>Javascript</Badge>
              <Badge>Tailwind</Badge>
              <Badge>React.JS</Badge>
              <Badge>Vue.JS</Badge>
              <Badge>Next.JS</Badge>
              <Badge>Nuxt.JS</Badge>
            </section>
          </Card>
          
          <Card className="bg-zinc-700 p-5">
            <h4 className="font-semibold">Back End</h4>
            <section className="flex flex-wrap gap-2 mt-2">
              <Badge>Javascript</Badge>
              <Badge>PHP</Badge>
              <Badge>Go</Badge>
              <Badge>Express</Badge>
            </section>
          </Card>
          
          <Card className="bg-zinc-700 p-5">
            <h4 className="font-semibold">Fullstack</h4>
            <section className="flex flex-wrap gap-2 mt-2">
              <Badge>Codeigniter</Badge>
              <Badge>Laravel</Badge>
              <Badge>T3 Stack</Badge>
            </section>
          </Card>
          
          <Card className="bg-zinc-700 p-5">
            <h4 className="font-semibold">Mobile</h4>
            <section className="flex flex-wrap gap-2 mt-2">
              <Badge className="w-24">React Native</Badge>
            </section>
          </Card>
        </section>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold text-xl">Soft Skill</h3>
        <section className="flex flex-wrap gap-2 mt-2">
          <Badge>Communication</Badge>
          <Badge>Teamworks</Badge>
          <Badge>Problem Solving</Badge>
          <Badge>Critical Thinking</Badge>
          <Badge>Creativity</Badge>
          <Badge>Vue.JS</Badge>
          <Badge>Adaptability</Badge>
        </section>
      </section>
    </>
  )
}