import Anuncios from "@/components/anuncios";
import Banner from "@/components/banner";
import Cartas from "@/components/cartas";
import Contacto from "@/components/contacto";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <main>
      {/* <Topbar /> */}
      {/* <Banner /> */}
      <Anuncios />
      <Cartas />
      <Contacto />
    </main>
  );
}
