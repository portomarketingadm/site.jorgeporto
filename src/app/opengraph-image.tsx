import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#05070a",
          backgroundImage:
            "radial-gradient(circle at 80% 10%, rgba(184,149,90,0.22) 0%, rgba(5,7,10,0) 55%)",
          padding: "88px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 64,
            height: 2,
            backgroundColor: "#b8955a",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 84,
            color: "#f5f4ef",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Jorge Porto
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            color: "#b8955a",
            maxWidth: 900,
          }}
        >
          Estratégia e consultoria comercial para clínicas
        </div>
      </div>
    ),
    { ...size }
  );
}
