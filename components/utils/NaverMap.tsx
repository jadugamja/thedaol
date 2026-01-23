"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // 1. 네이버 지도 스크립트 동적 로드
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
    script.async = true;

    script.onload = () => {
      if (mapRef.current && window.naver) {
        // 2. 지도 생성
        const location = new window.naver.maps.LatLng(
          37.4835033620443, // 위도
          126.881038151818 // 경도
        );

        const mapOptions = {
          center: location,
          zoom: 16,
          zoomControl: true,
          zoomControlOptions: {
            position: window.naver.maps.Position.TOP_RIGHT,
          },
        };

        const map = new window.naver.maps.Map(mapRef.current, mapOptions);
        mapInstanceRef.current = map;

        // 3. 마커 추가
        const marker = new window.naver.maps.Marker({
          position: location,
          map: map,
          title: "더다올디앤씨",
        });

        // 4. 정보창 추가
        const infowindow = new window.naver.maps.InfoWindow({
          content: `
            <div style="padding: 15px; min-width: 200px;">
              <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: bold;">더다올디앤씨</h3>
            </div>
          `,
        });

        // 5. 마커 클릭 이벤트
        window.naver.maps.Event.addListener(marker, "click", () => {
          if (infowindow.getMap()) {
            infowindow.close();
          } else {
            infowindow.open(map, marker);
          }
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "400px",
      }}
    />
  );
}
