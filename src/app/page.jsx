import Anuncios from "@/components/anuncios";
import Banner from "@/components/banner";
import Sabores from "@/components/sabores";
import Contacto from "@/components/contacto";
import Mapa from "@/components/mapa";
import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";
import Catalogo from "@/components/catalogo";
import AutoScroll from "@/components/propiedades";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        {/* <Topbar /> */}
        {/* <Banner /> */}
        <Anuncios />
        <Sabores />
        {/* <Contacto /> */}
        {/* <Navbar /> */}
        <AutoScroll />
        <Mapa />
        {/* <Catalogo /> */}
        <section className="p-4">
          <h2>Alguna wea</h2>
        </section>
    </main>
  );
}
