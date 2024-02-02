"use client";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import puntosPinda from "../data/puntosPinda.js"; // Asegura que la ruta sea correcta
import Modal from "./modal.jsx";
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
      map.addSource("puntosPinda", {
        type: "geojson",
        data: puntosPinda,
      });

      map.addLayer({
        id: "puntos-circulos",
        type: "circle",
        source: "puntosPinda",
        paint: {
          "circle-radius": 8,
          "circle-color": "#007cbf",
        },
      });

      map.addLayer({
        id: "puntos-texto",
        type: "symbol",
        source: "puntosPinda",
        layout: {
          "text-field": ["get", "location"],
          "text-offset": [0, 1.2],
          "text-anchor": "top",
          "text-size": 12,
        },
        paint: {
          "text-color": "#000000",
        },
      });

      // Evento de clic para abrir el modal con la información del punto
      map.on("click", "puntos-circulos", (e) => {
        const properties = e.features[0].properties; // Obtiene las propiedades del puntoPinda
        setModalInfo({ isOpen: true, data: properties }); // Actualiza el estado para abrir el modal
      });

      // Cambia el cursor a un puntero al pasar sobre los puntos
      map.on("mouseenter", "puntos-circulos", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "puntos-circulos", () => {
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
