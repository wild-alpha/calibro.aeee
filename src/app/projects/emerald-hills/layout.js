const title = "Emerald Hills | Bespoke Furniture Project";
const description = "For this private villa in Emerald Hills, Calibro partnered with jadex Studio to deliver a fully bespoke furniture collection that complements the architectura";
const cover = "https://calibro.ae/PROJECTS/dubai hills Grove/2.jpg";
const canonical = "https://calibro.ae/projects/emerald-hills";

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "Emerald Hills | Calibro",
    description,
    images: [{ url: cover, alt: "Emerald Hills bespoke furniture project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Hills | Calibro",
    description,
    images: [cover],
  },
};

export default function EmeraldHillsLayout({ children }) {
  return children;
}
