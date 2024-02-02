"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

// Establece tu Access Token de Mapbox aquí
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MapaCompleto = () => {
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

  return <div ref={mapContainerRef} style={{ minHeight: "100dvh" }} />;
};

export default MapaCompleto;