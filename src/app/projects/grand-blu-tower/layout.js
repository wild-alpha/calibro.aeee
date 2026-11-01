const title = "Grand Blu Tower 1 | Bespoke Furniture Project";
const description = "Created for a private residence at Grand Bleu Tower 1, this project reflects Calibro's dedication to transforming exceptional interiors through custom furnitu";
const cover = "https://calibro.ae/PROJECTS/New folder (8)/Bleu-17.jpg";
const canonical = "https://calibro.ae/projects/grand-blu-tower";

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "Grand Blu Tower 1 | Calibro",
    description,
    images: [{ url: cover, alt: "Grand Blu Tower 1 bespoke furniture project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Blu Tower 1 | Calibro",
    description,
    images: [cover],
  },
};

export default function GrandBluTowerLayout({ children }) {
  return children;
}
