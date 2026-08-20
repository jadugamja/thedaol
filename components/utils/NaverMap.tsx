"use client";

import { COMPANY_ADDRESS, COMPANY_LOCATION } from "@/constants/company";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    naver: typeof naver;
  }
}

const NAVER_MAP_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [hasScriptError, setHasScriptError] = useState(false);

  useEffect(() => {
    if (!NAVER_MAP_CLIENT_ID) {
      return;
    }

    const initializeMap = () => {
      const { naver } = window;

      if (!mapRef.current || !naver?.maps) {
        setHasScriptError(true);
        return;
      }

      const location = new naver.maps.LatLng(
        COMPANY_LOCATION.lat,
        COMPANY_LOCATION.lng,
      );
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      });
      const marker = new naver.maps.Marker({
        position: location,
        map,
        title: "더다올디앤씨",
      });
      const infowindow = new naver.maps.InfoWindow({
        content: `
          <div style="padding: 12px;">
            <strong style="font-size: 16px;">더다올디앤씨</strong>
          </div>
        `,
      });

      naver.maps.Event.addListener(marker, "click", () => {
        if (infowindow.getMap()) {
          infowindow.close();
          return;
        }

        infowindow.open(map, marker);
      });
    };

    if (window.naver?.maps) {
      initializeMap();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_MAP_CLIENT_ID}`;
    script.async = true;
    script.onload = initializeMap;
    script.onerror = () => setHasScriptError(true);

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  if (!NAVER_MAP_CLIENT_ID || hasScriptError) {
    const mapSearchUrl = `https://map.naver.com/p/search/${encodeURIComponent(COMPANY_ADDRESS)}`;

    return (
      <div
        role="status"
        className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center"
      >
        <p className="text-sm leading-relaxed text-text-sub break-keep">
          지도를 불러오지 못했습니다.
          <br />
          {COMPANY_ADDRESS}
        </p>
        <a
          href={mapSearchUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
        >
          네이버 지도에서 보기
        </a>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      role="region"
      aria-label={`더다올디앤씨 위치 지도: ${COMPANY_ADDRESS}`}
      className="h-full w-full"
    />
  );
}
