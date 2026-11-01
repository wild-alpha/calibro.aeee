export const metadata = {
  title: "Bespoke Furniture Collection — Coming Soon | Calibro",
  description:
    "The Calibro bespoke furniture collection is being prepared. Discover furniture made for distinctive residential, hospitality, and commercial spaces.",

  alternates: {
    canonical: "https://calibro.ae/products",
  },

  robots: {
    index: false,
    follow: true,
  },

  openGraph: {
    title: "Bespoke Furniture Collection — Coming Soon | Calibro",
    description:
      "The Calibro bespoke furniture collection is being prepared. Discover furniture made for distinctive spaces.",
    url: "https://calibro.ae/products",
    siteName: "Calibro",
    type: "website",
  },
};

export default function ProductsLayout({ children }) {
  return children;
}