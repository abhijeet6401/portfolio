import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const alt = "Abhijeet Kumar · Product Builder";
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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F3F0E8",
          padding: "60px 70px",
          border: "1px solid #C8C3B8",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#A7472A",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#A7472A",
              fontWeight: 600,
            }}
          >
            Product Builder · India
          </span>
        </div>

        {/* Center Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <span
            style={{
              fontSize: "58px",
              fontWeight: 700,
              color: "#1D1D1B",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Abhijeet Kumar
          </span>
          <p
            style={{
              fontSize: "28px",
              color: "#66645E",
              lineHeight: 1.35,
              maxWidth: "950px",
              margin: 0,
            }}
          >
            Building products that survive contact with real operations, users, and unit economics.
          </p>
        </div>

        {/* Footer Meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "30px",
            borderTop: "1px solid #C8C3B8",
            fontSize: "18px",
            color: "#66645E",
          }}
        >
          <span>Snabbit · Aequitas · Frost &amp; Sullivan · India Accelerator</span>
          <span style={{ color: "#A7472A", fontWeight: 600 }}>Graduating 2027</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
