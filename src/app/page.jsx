import Anuncios from "@/components/anuncios";
import Sabores from "@/components/sabores";
import Mapa from "@/components/mapa";
import Catalogo from "@/components/catalogo";
import AutoScroll from "@/components/propiedades";
import Tienda from "@/components/tienda";
import Pinda3d2 from "@/components/3dpinda2";
import PindaBottle from "@/components/3dpinda3";
import Corfo from "@/components/Corfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="md:flex flex-col items-center">
        {/* <Pinda3d2 /> */}
      <aside className="md:max-w-[90vw] xl:max-w-[60vw] top-0">
        <Anuncios />
      <Catalogo />
        <Sabores />
        <AutoScroll />
        <Mapa />
        <Tienda />
        <Corfo />
      </aside>
      <Footer />
      {/* <PindaBottle /> */}
    </main>
  );
}