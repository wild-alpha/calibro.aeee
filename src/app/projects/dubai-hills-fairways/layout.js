const title = "Dubai Hills Fairways | Bespoke Furniture Project";
const description = "Nestled within the prestigious Fairways community at Dubai Hills Estate, this newly completed ultra-luxury villa represents a seamless union of architectural ";
const cover = "https://calibro.ae/PROJECTS/duabi hills fairways/05.jpg";
const canonical = "https://calibro.ae/projects/dubai-hills-fairways";

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "Dubai Hills Fairways | Calibro",
    description,
    images: [
      { url: cover, alt: "Dubai Hills Fairways bespoke furniture project" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Hills Fairways | Calibro",
    description,
    images: [cover],
  },
};

export default function DubaiHillsFairwaysLayout({ children }) {
  return children;
}
