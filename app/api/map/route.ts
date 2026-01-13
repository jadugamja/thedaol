import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // 쿼리 파라미터
  const width = searchParams.get("w") || "800";
  const height = searchParams.get("h") || "400";
  const center = searchParams.get("center") || "126.881038151818,37.4835033620443";
  const level = searchParams.get("level") || "16";
  const markers = searchParams.get("markers") || `type:d|size:mid|color:Blue|pos:126.881038151818 37.4835033620443|label:더다올디앤씨`;

  const url = 'https://maps.apigw.ntruss.com/map-static/v2/raster';
  const params = `?w=${width}&h=${height}&center=${center}&level=${level}&markers=${encodeURIComponent(markers)}`;

  try {
    const response = await fetch(url + params, {
      headers: {
        "x-ncp-apigw-api-key-id": process.env.NAVER_MAP_CLIENT_ID!,
        "x-ncp-apigw-api-key": process.env.NAVER_MAP_CLIENT_SECRET!,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Map API Error (${response.status}):`, errorText);
      throw new Error(`Map API Error: ${response.status}`);
    }

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400", // 1일 캐싱
      },
    });
  } catch (error) {
    console.error("Map API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch map", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
