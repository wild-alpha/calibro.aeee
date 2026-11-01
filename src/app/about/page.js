

export const metadata = {
  title: 'About Calibro | Custom Furniture Company in Dubai',
  description:
    'Learn about Calibro, a Dubai-based custom furniture manufacturer and contract FF&E partner serving architects, designers, developers and private clients across the UAE and GCC.',
  alternates: { canonical: '/about' },
  openGraph: {
    url: '/about',
    title: 'About Calibro | Custom Furniture Company in Dubai',
    description:
      'Custom furniture manufacturing and FF&E delivery with one accountable team from brief to aftercare.'
  }
};

const sections = [
  {
    title: 'Dubai-based, GCC-ready',
    body: 'Calibro works with architects, interior designers, developers and private clients on bespoke furniture and contract FF&E requirements across Dubai, the UAE and wider GCC.'
  },
  {
    title: '18+ years of experience',
    body: 'International manufacturing experience is combined with local project knowledge, supplier coordination and an understanding of regional delivery requirements.'
  },
  {
    title: 'Single-point accountability',
    body: 'One team coordinates the brief, specification, manufacturing, quality control, logistics, installation and aftercare so responsibility never disappears between suppliers.'
  },
  {
    title: 'Built around the project',
    body: 'Furniture is developed around the architecture, proportions, performance requirements and programme rather than forcing projects into off-the-shelf specifications.'
  },
  {
    title: 'Quality before handover',
    body: 'Materials, finishes, dimensions and workmanship are checked against approved specifications before delivery and installation.'
  },
  {
    title: 'Aftercare and warranty',
    body: 'Post-installation support and warranty coordination remain part of the delivery process rather than being separated from it.'
  }
];

export default function AboutPage() {
  return (
    <SeoLandingPage
      canonicalPath="/about"
      eyebrow="About Calibro"
      title="A furniture partner built around accountability."
      intro="Calibro combines custom furniture manufacturing, procurement coordination and project delivery for design professionals and private clients who need reliable quality, clear communication and disciplined timelines."
      statement="Exceptional design only becomes valuable when the execution is equally disciplined. Calibro exists to protect the design intent while making the route from specification to installation simpler."
      sections={sections}
    />
  );
}
