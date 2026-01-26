"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    naver: typeof naver;
  }
}

export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null); // DOM

  useEffect(() => {
    // 1. 네이버 지도 스크립트 동적 로드
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
    script.async = true;

    script.onload = () => {
      const { naver } = window;
      if (mapRef.current && naver) {
        // 2. 지도 생성
        const location = new naver.maps.LatLng(
          37.4835033620443, // 위도
          126.881038151818, // 경도
        );

        const mapOptions = {
          center: location,
          zoom: 16,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT,
          },
        };

        const map = new naver.maps.Map(mapRef.current, mapOptions);

        // 3. 마커
        const marker = new naver.maps.Marker({
          position: location,
          map: map,
          title: "더다올디앤씨",
        });

        // 4. 정보창
        const infowindow = new naver.maps.InfoWindow({
          content: `
            <div style="padding: 12px;">
              <h3 style="font-size: 16px; font-weight: bold;">더다올디앤씨</h3>
            </div>
          `,
        });

        // 5. 마커 클릭 이벤트 -> 정보창 열림
        naver.maps.Event.addListener(marker, "click", () => {
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
      // 컴포넌트 언마운트 시 스크립트 제거
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
