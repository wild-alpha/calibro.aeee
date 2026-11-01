

export const metadata = {
  title: 'Privacy Policy',
  description: 'Calibro website privacy policy and enquiry data information.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true }
};

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <SiteNav />
      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '170px 24px 130px' }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 24 }}>
          Calibro
        </div>
        <h1 style={{ margin: 0, fontSize: 'clamp(46px, 8vw, 96px)', lineHeight: 0.95, letterSpacing: '-0.05em' }}>
          Privacy Policy
        </h1>
        <div style={{ maxWidth: 760, marginTop: 64, fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
          <p>
            Calibro uses information submitted through this website to respond to enquiries, prepare project communications and manage prospective client requests.
          </p>
          <h2 style={{ marginTop: 48, fontSize: 24, color: 'var(--color-text)' }}>Information you submit</h2>
          <p>
            The enquiry form may collect your name, email address, telephone number and the project information you choose to provide.
          </p>
          <h2 style={{ marginTop: 48, fontSize: 24, color: 'var(--color-text)' }}>Analytics</h2>
          <p>
            The website may use analytics and tag-management tools to understand site usage and measure actions such as form submissions, telephone clicks, email clicks and WhatsApp clicks.
          </p>
          <h2 style={{ marginTop: 48, fontSize: 24, color: 'var(--color-text)' }}>Contact</h2>
          <p>
            For privacy-related requests, contact <a href="mailto:info@calibro.ae">info@calibro.ae</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
