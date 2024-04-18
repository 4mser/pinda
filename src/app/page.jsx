import Anuncios from "@/components/anuncios";
import Banner from "@/components/banner";
import Sabores from "@/components/sabores";
import Contacto from "@/components/contacto";
import Mapa from "@/components/mapa";
import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="max-w-xl border-l border-r min-h-[100dvh]">
        {/* <Topbar /> */}
        {/* <Banner /> */}
        <Anuncios />
        <Sabores />
        <Contacto />
        <Mapa />
        {/* <Navbar /> */}
      </section>
    </main>
  );
}
