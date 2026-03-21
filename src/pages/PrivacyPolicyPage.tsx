import LegalPageLayout from '@/components/ui/LegalPageLayout';

const sections = [
  { id: 'info-collect', title: 'Information We Collect' },
  { id: 'how-use', title: 'How We Use Your Info' },
  { id: 'how-share', title: 'How We Share Your Info' },
  { id: 'facial-photos', title: 'Facial Photos & AI' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'eea-rights', title: 'EEA Residents' },
  { id: 'california-rights', title: 'California Residents' },
  { id: 'international', title: 'International Transfers' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'children', title: "Children's Privacy" },
  { id: 'push-notifications', title: 'Push Notifications' },
  { id: 'third-party', title: 'Third-Party Links' },
  { id: 'changes', title: 'Changes' },
  { id: 'contact', title: 'Contact Us' },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="March 21, 2026" sections={sections}>
      <section>
        <p>
          This Privacy Policy describes how <strong>ADAM DEVOPS SOLUTIONS LTD</strong>, a company registered in Israel ("Company", "Maxly", "we", "us", or "our"), collects, uses, shares, and protects your information when you use the Maxly mobile application ("App") available on Apple App Store and Google Play Store.
        </p>
        <p>
          By downloading, installing, or using the App, you agree to the collection and use of your information as described in this Privacy Policy. If you do not agree, please do not use the App.
        </p>
      </section>

      <section id="info-collect">
        <h2>1. Information We Collect</h2>

        <h3>1.1 Information You Provide</h3>
        <p>When you use the App, you may provide the following information:</p>
        <ul>
          <li><strong>Name</strong> — Entered during the onboarding process</li>
          <li><strong>Gender</strong> — Selected during the onboarding process</li>
          <li><strong>Facial photographs</strong> — Front-facing and side-profile selfies taken through the App's camera feature for facial analysis</li>
          <li><strong>Chat messages</strong> — Messages you send to the AI coach feature</li>
          <li><strong>Habit data</strong> — Habit names, completion records, and streak data you create and manage within the App</li>
        </ul>

        <h3>1.2 Information from Sign-In Providers</h3>
        <p>When you sign in using Apple Sign-In or Google Sign-In, we receive the following information from the provider:</p>
        <ul>
          <li><strong>Email address</strong></li>
          <li><strong>Display name</strong> (used as a fallback if you do not provide a name during onboarding)</li>
          <li><strong>Unique user identifier</strong> (an internal ID used to create and manage your account)</li>
        </ul>
        <p>
          We do not receive your password, profile photo, phone number, date of birth, or any other personal information from Apple or Google.
        </p>

        <h3>1.3 Information Collected Automatically</h3>
        <p>The App uses third-party services to collect anonymized, non-personally-identifiable information for analytics and error monitoring:</p>
        <ul>
          <li><strong>Usage analytics</strong> — Anonymized data about how you interact with the App, such as which features you use, screen views, and general usage patterns. This data cannot be linked to your identity.</li>
          <li><strong>Crash reports</strong> — When the App encounters an error, anonymized technical information about the crash is collected to help us identify and fix issues. This includes error type and stack trace information but does not include your personal data.</li>
        </ul>

        <h3>1.4 Information We Do NOT Collect</h3>
        <ul>
          <li>Location data (GPS or approximate)</li>
          <li>Phone number</li>
          <li>Physical address</li>
          <li>Date of birth</li>
          <li>Contacts or address book</li>
          <li>Browsing history</li>
          <li>Advertising identifiers</li>
        </ul>
      </section>

      <section id="how-use">
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li><strong>Provide the Service</strong> — To perform facial analysis on your photos, deliver AI coaching responses, and enable habit tracking functionality</li>
          <li><strong>Account Management</strong> — To create, maintain, and authenticate your account</li>
          <li><strong>Process Subscriptions</strong> — To manage your Maxly Pro subscription through the applicable app store</li>
          <li><strong>Improve the App</strong> — To analyze anonymized and aggregated chat data to improve the quality of AI coaching responses</li>
          <li><strong>Push Notifications</strong> — To send you service-related and, occasionally, promotional push notifications</li>
          <li><strong>Error Monitoring</strong> — To detect, diagnose, and fix technical issues and crashes</li>
          <li><strong>Analytics</strong> — To understand general usage patterns and improve the App experience (using anonymized data only)</li>
        </ul>
        <p>We do not use your information for targeted advertising. We do not sell your personal information.</p>
      </section>

      <section id="how-share">
        <h2>3. How We Share Your Information</h2>
        <p>We share your information with the following categories of service providers, solely for the purposes described:</p>

        <h3>3.1 AI Service Providers</h3>
        <p>
          Your facial photographs, chat messages, scan result context, and basic profile information (name and gender) are sent to third-party AI service providers for processing. These providers power the App's facial analysis and AI coaching features.
        </p>
        <p>
          Our current AI provider does <strong>not</strong> retain your data or use it to train their models. Your data is processed solely to generate responses and is not stored by the AI provider after processing.
        </p>
        <p>
          Our AI service provider may change over time. This Privacy Policy will be updated to reflect any material changes in how your data is processed.
        </p>

        <h3>3.2 Infrastructure Providers</h3>
        <p>
          Your data is stored and managed using third-party cloud infrastructure services that provide database hosting, user authentication, and file storage.
        </p>

        <h3>3.3 Payment Processors</h3>
        <p>
          Subscription payments are processed entirely by Apple (App Store) or Google (Play Store). We do not directly collect, store, or process your payment information (such as credit card numbers). We receive only your subscription status and transaction identifiers.
        </p>

        <h3>3.4 Analytics Providers</h3>
        <p>
          We use third-party analytics services that collect anonymized, non-personally-identifiable usage data to help us understand how the App is used and to improve the user experience.
        </p>

        <h3>3.5 Error Monitoring Providers</h3>
        <p>
          We use third-party error monitoring services that collect anonymized crash reports and technical error data to help us identify and resolve issues.
        </p>

        <h3>3.6 What We Do NOT Do</h3>
        <ul>
          <li>We do <strong>not</strong> sell your personal information to anyone</li>
          <li>We do <strong>not</strong> share your personal information with advertisers</li>
          <li>We do <strong>not</strong> share your personal information with data brokers</li>
          <li>We do <strong>not</strong> use your data for targeted advertising</li>
        </ul>
      </section>

      <section id="facial-photos">
        <h2>4. Facial Photographs and AI Processing</h2>
        <p>This section provides additional detail about how we handle your facial photographs, given their sensitive nature.</p>
        <ul>
          <li><strong>Collection:</strong> You take front-facing and side-profile selfies using the App's camera feature. These photos are uploaded to our servers.</li>
          <li><strong>Storage:</strong> Your photos are stored on our servers located in the United States. Photos are retained as long as your account is active.</li>
          <li><strong>Processing:</strong> Your photos are sent to a third-party AI service provider for facial analysis. The AI provider processes the photos to generate scores, trait assessments, and recommendations, then returns the results. The AI provider does not retain your photos or use them for model training.</li>
          <li><strong>Purpose:</strong> Photos are used solely to provide the facial analysis feature of the App.</li>
          <li><strong>Deletion:</strong> When you request account deletion, all photos are permanently deleted from our servers.</li>
          <li><strong>Disclaimer:</strong> All AI-generated facial analysis results, scores, and recommendations are provided for entertainment and informational purposes only. They are not medical, professional, or diagnostic assessments.</li>
        </ul>
      </section>

      <section id="data-retention">
        <h2>5. Data Retention</h2>
        <ul>
          <li><strong>Active accounts:</strong> Your data (including photos, scan results, chat messages, and habit data) is retained indefinitely for as long as your account remains active.</li>
          <li><strong>Account deletion:</strong> When you request account deletion, all of your data is permanently deleted from our servers. To request account deletion, contact us at <a href="mailto:support@adam-solutions.io">support@adam-solutions.io</a>.</li>
          <li><strong>Anonymized data:</strong> Anonymized and aggregated data that cannot be used to identify you may be retained indefinitely for analytics and service improvement purposes.</li>
        </ul>
      </section>

      <section id="your-rights">
        <h2>6. Your Rights</h2>
        <p>Regardless of where you are located, you have the following rights:</p>
        <ul>
          <li><strong>Access</strong> — You may request a copy of the personal information we hold about you.</li>
          <li><strong>Export</strong> — You may request that we provide your data in a portable format.</li>
          <li><strong>Deletion</strong> — You may request that we permanently delete your account and all associated data.</li>
          <li><strong>Opt out of push notifications</strong> — You may disable push notifications at any time through your device settings.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at <strong><a href="mailto:support@adam-solutions.io">support@adam-solutions.io</a></strong>. We will respond to your request within 30 days.
        </p>
      </section>

      <section id="eea-rights">
        <h2>7. Additional Rights for European Economic Area (EEA) Residents</h2>
        <p>If you are located in the European Economic Area, you have additional rights under the General Data Protection Regulation (GDPR):</p>

        <h3>Legal Bases for Processing</h3>
        <p>We process your personal data on the following legal bases:</p>
        <ul>
          <li><strong>Consent</strong> — For processing your facial photographs and chat messages. You provide consent by choosing to use these features. You may withdraw consent at any time by deleting your account.</li>
          <li><strong>Contract</strong> — For processing necessary to provide the App's services to you (account management, subscription processing, habit tracking).</li>
          <li><strong>Legitimate Interest</strong> — For anonymized analytics and error monitoring, to improve the App and ensure its stability.</li>
        </ul>

        <h3>Your GDPR Rights</h3>
        <p>In addition to the general rights listed in Section 6, you have the right to:</p>
        <ul>
          <li><strong>Rectification</strong> — Request correction of inaccurate personal data</li>
          <li><strong>Restriction</strong> — Request that we restrict processing of your data in certain circumstances</li>
          <li><strong>Objection</strong> — Object to processing based on legitimate interest</li>
          <li><strong>Withdraw consent</strong> — Withdraw your consent at any time, without affecting the lawfulness of processing prior to withdrawal</li>
          <li><strong>Lodge a complaint</strong> — File a complaint with a supervisory authority in your country of residence if you believe your data protection rights have been violated</li>
        </ul>
        <p>
          To exercise these rights, contact us at <strong><a href="mailto:support@adam-solutions.io">support@adam-solutions.io</a></strong>.
        </p>
      </section>

      <section id="california-rights">
        <h2>8. Additional Rights for California Residents</h2>
        <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
        <ul>
          <li><strong>Right to Know</strong> — You have the right to request that we disclose the categories and specific pieces of personal information we have collected about you.</li>
          <li><strong>Right to Delete</strong> — You have the right to request that we delete your personal information.</li>
          <li><strong>Right to Opt Out of Sale</strong> — We do <strong>not</strong> sell your personal information. No opt-out is necessary.</li>
          <li><strong>Right to Non-Discrimination</strong> — We will not discriminate against you for exercising your CCPA rights. You will not receive a different level of service or pricing for exercising your rights.</li>
        </ul>
        <p>
          To exercise these rights, contact us at <strong><a href="mailto:support@adam-solutions.io">support@adam-solutions.io</a></strong>.
        </p>
      </section>

      <section id="international">
        <h2>9. International Data Transfers</h2>
        <p>
          Your data is stored on servers located in the <strong>United States</strong>. If you are accessing the App from outside the United States, your information will be transferred to and processed in the United States.
        </p>
        <p>
          Additionally, your facial photographs and chat messages are sent to third-party AI service providers for processing, which may involve international data transfer.
        </p>
        <p>
          By using the App, you consent to the transfer of your information to the United States and other countries where our service providers operate. We take reasonable steps to ensure that your data is treated securely and in accordance with this Privacy Policy.
        </p>
      </section>

      <section id="data-security">
        <h2>10. Data Security</h2>
        <p>We implement reasonable security measures to protect your personal information, including:</p>
        <ul>
          <li><strong>Encryption in transit</strong> — All data transmitted between the App and our servers is encrypted using HTTPS/TLS</li>
          <li><strong>Encryption at rest</strong> — Data stored on our servers is encrypted at rest</li>
          <li><strong>Access controls</strong> — Row-level security ensures that users can only access their own data</li>
        </ul>
        <p>
          While we take reasonable measures to protect your information, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security of your data.
        </p>
      </section>

      <section id="children">
        <h2>11. Children's Privacy</h2>
        <p>
          The App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
        </p>
        <p>
          If we learn or have reason to believe that we have collected information from a child under 13, we will promptly delete the child's account and all associated data. If you believe a child under 13 has provided us with personal information, please contact us at <strong><a href="mailto:support@adam-solutions.io">support@adam-solutions.io</a></strong>.
        </p>
      </section>

      <section id="push-notifications">
        <h2>12. Push Notifications</h2>
        <p>The App may send you push notifications, including:</p>
        <ul>
          <li>Service-related notifications (e.g., scan results ready, daily habit reminders)</li>
          <li>Promotional notifications (e.g., feature updates, offers)</li>
        </ul>
        <p>
          You can opt out of push notifications at any time through your device settings. Disabling push notifications does not affect the App's core functionality.
        </p>
      </section>

      <section id="third-party">
        <h2>13. Third-Party Links and Services</h2>
        <p>
          The App may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of any third-party websites or services. We encourage you to review the privacy policies of any third-party services you access through the App.
        </p>
      </section>

      <section id="changes">
        <h2>14. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we make changes, we will:</p>
        <ul>
          <li>Update the "Effective Date" at the top of this document</li>
          <li>Notify you through the App</li>
        </ul>
        <p>
          Your continued use of the App after changes to this Privacy Policy constitutes your acceptance of the updated policy. If you do not agree to the updated policy, you should stop using the App and request account deletion.
        </p>
      </section>

      <section id="contact">
        <h2>15. Contact Us</h2>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:</p>
        <p>
          <strong>ADAM DEVOPS SOLUTIONS LTD</strong><br />
          Email: <strong><a href="mailto:support@adam-solutions.io">support@adam-solutions.io</a></strong>
        </p>
      </section>
    </LegalPageLayout>
  );
}
