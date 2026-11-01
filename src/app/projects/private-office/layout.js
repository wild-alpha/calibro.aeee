const title = "Private Office | Bespoke Furniture Project";
const description = "For this corporate office at Vision Tower, Calibro delivered a bespoke furniture solution developed to support a modern, high-performance work environment. Ev";
const cover = "https://calibro.ae/PROJECTS/New folder (6)/SADA.jpg";
const canonical = "https://calibro.ae/projects/private-office";

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "Private Office | Calibro",
    description,
    images: [{ url: cover, alt: "Private Office bespoke furniture project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Office | Calibro",
    description,
    images: [cover],
  },
};

export default function PrivateOfficeLayout({ children }) {
  return children;
}
