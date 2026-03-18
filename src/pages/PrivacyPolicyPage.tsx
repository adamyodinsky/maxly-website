import LegalPageLayout from '@/components/ui/LegalPageLayout';

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'info-collect', title: 'Information We Collect' },
  { id: 'how-use', title: 'How We Use Info' },
  { id: 'photo-data', title: 'Photo Data & AI' },
  { id: 'data-storage', title: 'Data Storage' },
  { id: 'third-party', title: 'Third-Party Services' },
  { id: 'children', title: "Children's Privacy" },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'changes', title: 'Changes' },
  { id: 'contact', title: 'Contact Us' },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="March 17, 2026" sections={sections}>
      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>
          Adam Solutions ("we," "our," or "us") operates the Maxly mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
        </p>
        <p>
          We are committed to protecting your privacy. Your face, your data. Please read this Privacy Policy carefully. By using the App, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section id="info-collect">
        <h2>2. Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>We may collect the following personal information:</p>
        <ul>
          <li>Name and email address (provided during account creation)</li>
          <li>Gender (provided during onboarding)</li>
          <li>Authentication data (from email, Google, or Apple sign-in)</li>
        </ul>

        <h3>Facial Data</h3>
        <p>When you use our scan feature, we collect:</p>
        <ul>
          <li>Front-facing and side-profile photographs</li>
          <li>AI-generated facial analysis data (scores, traits, measurements)</li>
        </ul>

        <h3>Usage Data</h3>
        <p>We automatically collect:</p>
        <ul>
          <li>App usage patterns and feature interactions</li>
          <li>Device information (type, operating system)</li>
          <li>Habit tracking data and streak information</li>
          <li>Coach chat conversation history</li>
        </ul>
      </section>

      <section id="how-use">
        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li>To provide and maintain the facial analysis service</li>
          <li>To generate personalized improvement recommendations</li>
          <li>To power the AI coach with context about your profile</li>
          <li>To track your habits and display progress analytics</li>
          <li>To improve and optimize the App's features</li>
          <li>To communicate with you about updates and support</li>
        </ul>
      </section>

      <section id="photo-data">
        <h2>4. Photo Data & AI Processing</h2>
        <p>
          Your photos are uploaded securely to our cloud storage for AI analysis. We process facial data to generate scores, traits, and recommendations. Photos are stored securely and are accessible only to you through your account.
        </p>
        <p>
          We do not sell, trade, or share your photos with third parties. Your facial data is used solely to provide you with our analysis and coaching services.
        </p>
      </section>

      <section id="data-storage">
        <h2>5. Data Storage & Security</h2>
        <p>
          We use industry-standard security measures to protect your data, including encrypted data transmission (TLS/SSL), secure cloud storage, and access controls. While we strive to use commercially acceptable means of protecting your personal information, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section id="third-party">
        <h2>6. Third-Party Services</h2>
        <p>We may use third-party services that collect information, including:</p>
        <ul>
          <li>Supabase (database and authentication)</li>
          <li>Google Sign-In and Apple Sign-In (authentication)</li>
          <li>RevenueCat (subscription management)</li>
          <li>Analytics providers (usage metrics)</li>
        </ul>
        <p>Each third-party service has its own privacy policy governing how they handle your data.</p>
      </section>

      <section id="children">
        <h2>7. Children's Privacy</h2>
        <p>
          Maxly is designed for users aged 14 and older. We do not knowingly collect personal information from children under 14. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
        </p>
      </section>

      <section id="your-rights">
        <h2>8. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict processing of your data</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>To exercise these rights, please contact us at the email address below.</p>
      </section>

      <section id="data-retention">
        <h2>9. Data Retention</h2>
        <p>
          We retain your personal information for as long as your account is active or as needed to provide you with our services. You may delete your account and associated data at any time through the App. Upon account deletion, we will remove your personal data within 30 days.
        </p>
      </section>

      <section id="changes">
        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section id="contact">
        <h2>11. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:support@maxlyapp.com">support@maxlyapp.com</a></li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}
