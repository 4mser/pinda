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
import Pinda3d from "@/components/3dpinda";

export default function Home() {
  return (
    <main className="md:flex flex-col  items-center">
        <aside className="md:max-w-[90vw] xl:max-w-[60vw] top-0">
          <Anuncios />
          <Pinda3d />
          <Sabores />
          <AutoScroll />
          <Mapa />
          <Tienda />
        </aside>
    </main>
  );
}
