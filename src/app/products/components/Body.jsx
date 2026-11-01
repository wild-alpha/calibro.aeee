import Link from "next/link";

export default function Body() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 72px)",
        padding: "clamp(140px, 18vh, 220px) 20px 100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 900 }}>
        <div
          style={{
            marginBottom: 28,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Calibro Collection
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(58px, 11vw, 150px)",
            fontWeight: 500,
            lineHeight: 0.9,
            letterSpacing: "-0.055em",
          }}
        >
          Coming Soon
        </h1>

        <p
          style={{
            maxWidth: 540,
            margin: "40px auto 0",
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.75,
            color: "var(--color-text-muted)",
          }}
        >
          Our product collection is being carefully prepared. Check back soon
          to explore furniture made for distinctive spaces.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            marginTop: 44,
            padding: "15px 28px",
            border: "1px solid var(--color-text)",
            borderRadius: 2,
            color: "var(--color-text)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Return home <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </main>
  );
}