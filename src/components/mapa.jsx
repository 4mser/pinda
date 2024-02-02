"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Link from "next/link";

// Establece tu Access Token de Mapbox aquí
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Mapa = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Inicializa el mapa
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // Puedes elegir otro estilo de mapa aquí
      style: "mapbox://styles/4mser/clrzt2pyg01fu01p1hdqu1elg",
    });

    // Limpieza al desmontar el componente
    return () => map.remove();
  }, []);

  return (
    <section className="px-4 h-[670px] overflow-hidden">
      <div className="w-full flex justify-between py-2 items-center">
        <h3 className=" font-medium text-slate-700">Puntos de venta</h3>
        <Link href={"/mapa"}>
          <p className="text-slate-500 text-xs font-medium pt-1">
            Ver mapa completo
          </p>
        </Link>
      </div>
      <div
        ref={mapContainerRef}
        className="rounded-lg"
        style={{ height: "600px" }}
      />
    </section>
  );
};

export default Mapa;
