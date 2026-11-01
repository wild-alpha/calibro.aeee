const title = "Study House | Bespoke Furniture Project";
const description = "Created for a private study house in Wadi Al Amardi, Al Khawaneej, this project centers around a bespoke cinema room where comfort, craftsmanship, and perform";
const cover = "https://calibro.ae/PROJECTS/VILLA/4.JPG";
const canonical = "https://calibro.ae/projects/study-house";

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "Study House | Calibro",
    description,
    images: [{ url: cover, alt: "Study House bespoke furniture project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study House | Calibro",
    description,
    images: [cover],
  },
};

export default function StudyHouseLayout({ children }) {
  return children;
}
