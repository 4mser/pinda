import Anuncios from "@/components/anuncios";
import Banner from "@/components/banner";
import Cartas from "@/components/cartas";
import Contacto from "@/components/contacto";
import Mapa from "@/components/mapa";
import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <main>
      {/* <Topbar /> */}
      {/* <Banner /> */}
      <Anuncios />
      <Cartas />
      <Contacto />
      <Mapa />
      {/* <Navbar /> */}
    </main>
  );
}
