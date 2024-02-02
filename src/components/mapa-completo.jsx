"use client";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import puntosPinda from "../data/puntosPinda.js"; // Asegura que la ruta sea correcta
import Modal from "./modal.jsx"; // Asegúrate de que el camino sea correcto

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MapaCompleto = () => {
  const mapContainerRef = useRef(null);
  const [modalInfo, setModalInfo] = useState({ isOpen: false, data: null });

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/4mser/cls57alt7026701o89e1naf6a",
      center: [-73.2429564323007, -39.81805120276486],
      zoom: 12,
    });

    map.on("load", () => {
      // Carga un ícono de la carpeta pública (ajusta la ruta según sea necesario)
      map.loadImage("/images/logoPinda.png", (error, image) => {
        if (error) throw error;
        map.addImage("custom-icon", image);

        map.addSource("puntosPinda", {
          type: "geojson",
          data: puntosPinda,
        });

        // Utiliza el ícono cargado en lugar de un círculo
        map.addLayer({
          id: "puntos-iconos",
          type: "symbol",
          source: "puntosPinda",
          layout: {
            "icon-image": "custom-icon", // Usa el ícono cargado
            "icon-size": 0.5, // Ajusta el tamaño del ícono según sea necesario
            "icon-allow-overlap": true,
          },
        });

        map.addLayer({
          id: "puntos-texto",
          type: "symbol",
          source: "puntosPinda",
          minzoom: 15,
          layout: {
            "text-field": ["get", "location"],
            "text-offset": [0, 2],
            "text-anchor": "top",
            "text-size": 12,
          },
          paint: {
            "text-color": "#000000",
          },
        });
      });

      // Evento de clic y cambio de cursor igual que antes
      map.on("click", "puntos-iconos", (e) => {
        const properties = e.features[0].properties;
        setModalInfo({ isOpen: true, data: properties });
      });

      map.on("mouseenter", "puntos-iconos", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "puntos-iconos", () => {
        map.getCanvas().style.cursor = "";
      });
    });

    return () => map.remove();
  }, []);

  return (
    <>
      <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
      {modalInfo.isOpen && (
        <Modal
          isOpen={modalInfo.isOpen}
          onClose={() => setModalInfo({ isOpen: false, data: null })}
          data={modalInfo.data}
        />
      )}
    </>
  );
};

export default MapaCompleto;
