import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="relative bg-[url('../public/assets/hero-background.jpg')] bg-fixed bg-cover bg-bottom flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5 h-full font-saira">
      <Nav/>
      <div className="max-w-7xl w-full">
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
