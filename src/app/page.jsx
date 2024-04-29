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
import Tienda from "@/components/tienda";

export default function Home() {
  return (
    <main>
        <Anuncios />
        <Sabores />
        <AutoScroll />
        <Mapa />
        <Tienda />
        
    </main>
  );
}
