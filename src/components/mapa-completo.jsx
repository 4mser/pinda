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

        // Aquí agregas el marcador de la ubicación del usuario
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          map.loadImage("/images/doge.png", (error, image) => {
            // Asegúrate de tener una imagen '/images/marker.png'
            if (error) throw error;
            map.addImage("user-location-icon", image);
            map.addLayer({
              id: "user-location",
              type: "symbol",
              source: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude],
                      },
                    },
                  ],
                },
              },
              layout: {
                "icon-image": "user-location-icon",
                "icon-size": 0.04,
              },
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
      });

      map.on("click", "puntos-iconos", (e) => {
        const properties = e.features[0].properties;
        const coordinates = e.features[0].geometry.coordinates;
        setModalInfo({ isOpen: true, data: properties });
        map.flyTo({
          center: coordinates,
          zoom: 17,
          pitch: 60,
          bearing: -25,
          essential: true,
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
        className="absolute bottom-4 right-4 z-10 p-2 bg-blue-500 text-white rounded-full"
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
