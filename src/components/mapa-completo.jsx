"use client";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import puntosPinda from "../data/puntosPinda.js";
import Modal from "./modal.jsx";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MapaCompleto = () => {
  const mapContainerRef = useRef(null);
  const [modalInfo, setModalInfo] = useState({ isOpen: false, data: null });
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/4mser/cls57alt7026701o89e1naf6a",
      center: [-73.2429564323007, -39.81805120276486],
      zoom: 12,
    });

    map.on("load", () => {
      map.loadImage("/images/logoPinda.png", (error, image) => {
        if (error) throw error;
        map.addImage("custom-icon", image);

        map.addSource("puntosPinda", {
          type: "geojson",
          data: puntosPinda,
        });

        map.addLayer({
          id: "puntos-iconos",
          type: "symbol",
          source: "puntosPinda",
          layout: {
            "icon-image": "custom-icon",
            "icon-size": 0.5,
            "icon-allow-overlap": true,
          },
        });

        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          map.flyTo({
            center: [longitude, latitude],
            zoom: 15,
          });
        });
      });

      map.addLayer({
        id: "puntos-texto",
        type: "symbol",
        source: "puntosPinda",
        layout: {
          "text-field": ["get", "location"],
          "text-offset": [0, 2],
          "text-anchor": "top",
          "text-size": 12,
        },
        paint: {
          "text-color": "#000000",
        },
        minzoom: 15,
      });

      setMapInstance(map);
    });

    return () => mapInstance && mapInstance.remove();
  }, []);

  const goToUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      mapInstance.flyTo({
        center: [longitude, latitude],
        zoom: 15,
      });
    });
  };

  return (
    <>
      <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
      <button
        onClick={goToUserLocation}
        className="absolute bottom-5 left-5 z-10 bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-700"
        style={{ touchAction: "none" }} // Añadido para mejorar la interactividad en dispositivos táctiles
      >
        Ir a mi ubicación
      </button>
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
