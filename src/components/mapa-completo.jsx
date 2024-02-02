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
  const [userLocation, setUserLocation] = useState(null);

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
          minzoom: 15, // Asegura que el texto solo aparece cuando el zoom es 15 o más
        });
      });

      map.on("click", "puntos-iconos", (e) => {
        const properties = e.features[0].properties;
        const coordinates = e.features[0].geometry.coordinates;
        setModalInfo({ isOpen: true, data: properties });

        // Mueve el mapa hacia la coordenada seleccionada con efecto 3D
        map.flyTo({
          center: coordinates,
          zoom: 17,
          pitch: 60,
          bearing: -25,
          essential: true, // Esto asegura que el movimiento se considere esencial para la accesibilidad
        });
      });

      map.on("mouseenter", "puntos-iconos", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "puntos-iconos", () => {
        map.getCanvas().style.cursor = "";
      });

      setMapInstance(map);
    });

    return () => mapInstance && mapInstance.remove();
  }, []);

  const goToUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          mapInstance.flyTo({
            center: [longitude, latitude],
            zoom: 14,
          });
        },
        () => {
          alert("No se pudo obtener tu ubicación");
        }
      );
    } else {
      alert("Tu navegador no soporta el acceso a la ubicación");
    }
  };

  return (
    <>
      <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
      <button
        onClick={goToUserLocation}
        className="absolute z-50 right-5 bottom-5 bg-gradient-to-tr from-green-500 to-cyan-400 p-2 rounded-3xl text-white px-3"
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
