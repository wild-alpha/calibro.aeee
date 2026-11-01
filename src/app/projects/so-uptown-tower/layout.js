const title = "SO/Uptown Tower | Bespoke Furniture Project";
const description = "The secondary reception at SO/Uptown Tower was conceived as an extension of the building's contemporary identity—where every furnishing contributes to a refin";
const cover = "https://calibro.ae/PROJECTS/New folder (3)/123.jpg";
const canonical = "https://calibro.ae/projects/so-uptown-tower";

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "SO/Uptown Tower | Calibro",
    description,
    images: [{ url: cover, alt: "SO/Uptown Tower bespoke furniture project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SO/Uptown Tower | Calibro",
    description,
    images: [cover],
  },
};

export default function SoUptownTowerLayout({ children }) {
  return children;
}
