const title = "Beauport Tower | Bespoke Furniture Project";
const description = "Set within the prestigious Beauport Tower in Dubai Marina, this private residence was brought to life through a collection of custom-crafted furniture designe";
const cover = "https://calibro.ae/PROJECTS/New folder (7)/5.jpg";
const canonical = "https://calibro.ae/projects/beauport-tower";

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "Beauport Tower | Calibro",
    description,
    images: [{ url: cover, alt: "Beauport Tower bespoke furniture project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauport Tower | Calibro",
    description,
    images: [cover],
  },
};

export default function BeauportTowerLayout({ children }) {
  return children;
}
