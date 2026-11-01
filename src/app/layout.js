
import "./globals.css";

const SITE_URL = "https://calibro.ae";

const HOME_TITLE =
  "Custom Furniture Manufacturer in Dubai | Calibro";

const HOME_DESCRIPTION =
  "Calibro is a bespoke furniture manufacturer and contract FF&E partner in Dubai, delivering custom furniture, joinery and furnishing solutions across the UAE and GCC.";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: HOME_TITLE,

  description: HOME_DESCRIPTION,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: "Calibro",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      {
        url: "/spot2.png",
        alt: "Calibro Bespoke Furniture Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/spot2.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
