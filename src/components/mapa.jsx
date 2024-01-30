"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

// Establece tu Access Token de Mapbox aquí
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Mapa = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Inicializa el mapa
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // Puedes elegir otro estilo de mapa aquí
      style: "mapbox://styles/4mser/clpegmsjp006a01qj1ihv67v1",
    });

    // Limpieza al desmontar el componente
    return () => map.remove();
  }, []);

  return (
    <section className="px-4">
      <h3 className="py-2 font-medium text-slate-700">Puntos de venta</h3>
      <div
        ref={mapContainerRef}
        className="rounded-lg"
        style={{ height: "400px" }}
      />
    </section>
  );
};

export default Mapa;
