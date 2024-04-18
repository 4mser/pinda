import Anuncios from "@/components/anuncios";
import Banner from "@/components/banner";
import Sabores from "@/components/sabores";
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
        <Sabores />
        {/* <Contacto /> */}
        <Mapa />
        {/* <Navbar /> */}
    </main>
  );
}
