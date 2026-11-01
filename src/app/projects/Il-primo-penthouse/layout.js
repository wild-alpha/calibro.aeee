const title = "Il Primo Tower Penthouse | Bespoke Furniture Project";
const description =
  "Occupying one of the highest residences in Downtown Dubai, this ultra-luxury penthouse at Il Primo Tower demanded a furniture collection equal to the scale, exclusivity, and prestige of its setting.";
const cover = "https://calibro.ae/PROJECTS/New folder (4)/Penthouse-26.jpg";
const canonical = "https://calibro.ae/projects/il-primo-penthouse";

export const metadata = {
  title,
  description: description.slice(0, 158),
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "Il Primo Tower Penthouse | Calibro",
    description: description.slice(0, 158),
    images: [
      { url: cover, alt: "Il Primo Tower Penthouse bespoke furniture project" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Il Primo Tower Penthouse | Calibro",
    description: description.slice(0, 158),
    images: [cover],
  },
};

export default function IlPrimoPenthouseLayout({ children }) {
  return children;
}