"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

// Establece tu Access Token de Mapbox aquí
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Mapa = () => {
  const mapContainerRef = useRef(null);
  let map; // Referencia al objeto mapa para usar fuera de useEffect

  useEffect(() => {
    // Inicializa el mapa
    map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // Puedes elegir otro estilo de mapa aquí
      style: "mapbox://styles/4mser/clrzt2pyg01fu01p1hdqu1elg",
    });

    // Limpieza al desmontar el componente
    return () => map.remove();
  }, []);

  const setUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.flyTo({
            center: [longitude, latitude],
            essential: true, // this animation is considered essential with respect to prefers-reduced-motion
            zoom: 17,
          });
        },
        (error) => {
          console.error("Error al obtener la ubicación", error);
        }
      );
    } else {
      console.error("Geolocalización no soportada por este navegador.");
    }
  };

  return (
    <section className="px-4 h-[670px] mb-1 overflow-hidden">
      <h3 className="py-2 font-medium text-slate-700">Puntos de venta</h3>
      <button
        onClick={setUserLocation}
        className="absolute bottom-10 right-6 mb-4 p-2 bg-blue-500 text-white rounded-full"
      >
        ubi
      </button>
      <div
        ref={mapContainerRef}
        className="rounded-lg"
        style={{ height: "600px" }}
      />
    </section>
  );
};

export default Mapa;
