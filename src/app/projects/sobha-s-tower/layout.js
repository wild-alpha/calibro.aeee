const title = "Sobha – The S Tower | Bespoke Furniture Project";
const description = "Calibro was commissioned to design and manufacture a complete collection of custom furniture, developed exclusively for this exceptional home. Each piece was ";
const cover = "https://calibro.ae/PROJECTS/New folder (9)/3.jpg";
const canonical = "https://calibro.ae/projects/sobha-s-tower";

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "Sobha – The S Tower | Calibro",
    description,
    images: [{ url: cover, alt: "Sobha – The S Tower bespoke furniture project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobha – The S Tower | Calibro",
    description,
    images: [cover],
  },
};

export default function SobhaSTowerLayout({ children }) {
  return children;
}
