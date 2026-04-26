import LegalPageLayout from '@/components/ui/LegalPageLayout';

const sections = [
  { id: 'eligibility', title: 'Eligibility' },
  { id: 'license', title: 'License Grant' },
  { id: 'account', title: 'Account & Registration' },
  { id: 'subscriptions', title: 'Subscription & Payments' },
  { id: 'user-content', title: 'User Content & Data' },
  { id: 'ai-disclaimer', title: 'AI Content Disclaimer' },
  { id: 'ip', title: 'Intellectual Property' },
  { id: 'prohibited', title: 'Prohibited Conduct' },
  { id: 'termination', title: 'Termination' },
  { id: 'warranties', title: 'Warranties' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'indemnification', title: 'Indemnification' },
  { id: 'business-transfers', title: 'Business Transfers' },
  { id: 'third-party', title: 'Third-Party Services' },
  { id: 'dispute', title: 'Dispute Resolution' },
  { id: 'changes', title: 'Changes' },
  { id: 'severability', title: 'Severability' },
  { id: 'entire-agreement', title: 'Entire Agreement' },
  { id: 'contact', title: 'Contact Information' },
];

export default function EULAPage() {
  return (
    <LegalPageLayout title="End User License Agreement" lastUpdated="March 21, 2026" sections={sections}>
      <section>
        <p>
          This End User License Agreement ("Agreement" or "EULA") is a legally binding contract between you ("User", "you", or "your") and <strong>ADAM DEVOPS SOLUTIONS LTD</strong>, a company registered in Israel ("Company", "Maxly", "we", "us", or "our").
        </p>
        <p>
          This Agreement governs your use of the Maxly mobile application ("App") available on Apple App Store and Google Play Store.
        </p>
        <p>
          By downloading, installing, or using the App, you acknowledge that you have read, understood, and agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.
        </p>
      </section>

      <section id="eligibility">
        <h2>1. Eligibility</h2>
        <p>
          You must be at least <strong>13 years of age</strong> to use the App. By using the App, you represent and warrant that you are at least 13 years old. If you are under 13, you are not permitted to use the App and must delete it immediately.
        </p>
        <p>
          If we learn or have reason to believe that a user is under 13 years of age, we reserve the right to immediately terminate that user's account and delete all associated data.
        </p>
      </section>

      <section id="license">
        <h2>2. License Grant</h2>
        <p>
          Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on a mobile device that you own or control, solely for your personal, non-commercial purposes.
        </p>
        <p>You may not:</p>
        <ul>
          <li>Copy, modify, or distribute the App or any portion of it</li>
          <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App</li>
          <li>Rent, lease, lend, sell, sublicense, or otherwise transfer the App or any rights in the App to any third party</li>
          <li>Remove, alter, or obscure any proprietary notices in the App</li>
        </ul>
      </section>

      <section id="account">
        <h2>3. Account and Registration</h2>
        <p>
          To use certain features of the App, you must create an account using Apple Sign-In or Google Sign-In. You agree to:
        </p>
        <ul>
          <li>Provide accurate and complete information during registration</li>
          <li>Maintain the security and confidentiality of your account credentials</li>
          <li>Notify us immediately of any unauthorized use of your account</li>
          <li>Accept responsibility for all activity that occurs under your account</li>
        </ul>
        <p>
          You may not create an account on behalf of someone else or use another person's account without their permission.
        </p>
      </section>

      <section id="subscriptions">
        <h2>4. Subscription and Payments</h2>

        <h3>4.1 Maxly Pro</h3>
        <p>
          The App offers a premium subscription tier ("Maxly Pro") that provides access to additional features including full scan results, AI coach, and unlimited habit tracking.
        </p>

        <h3>4.2 Billing</h3>
        <p>
          All subscription purchases and billing are processed through the Apple App Store or Google Play Store ("Platform"). By subscribing, you agree to the applicable Platform's payment terms and conditions.
        </p>

        <h3>4.3 Auto-Renewal</h3>
        <p>
          Maxly Pro subscriptions automatically renew at the end of each billing period unless you cancel your subscription before the renewal date. You can manage and cancel your subscription through your Platform account settings.
        </p>

        <h3>4.4 No Refunds</h3>
        <p>
          All subscription payments are final and non-refundable. We do not provide refunds or credits for any partial subscription periods, unused features, or dissatisfaction with the App. Any refund requests must be directed to the applicable Platform (Apple or Google) in accordance with their refund policies.
        </p>

        <h3>4.5 Price Changes</h3>
        <p>
          We reserve the right to change subscription pricing at any time. Price changes will take effect at the start of the next subscription period following the date of the price change. Your continued use of Maxly Pro after a price change constitutes your acceptance of the new pricing.
        </p>
      </section>

      <section id="user-content">
        <h2>5. User Content and Data</h2>

        <h3>5.1 Your Photos</h3>
        <p>
          The App requires you to take and upload facial photographs ("Photos") for analysis. By uploading Photos, you grant us a limited, non-exclusive, worldwide license to store, process, and analyze your Photos solely for the purpose of providing the App's services to you. Your Photos are stored on our servers.
        </p>
        <p>You retain full ownership of your Photos.</p>

        <h3>5.2 Scan Results</h3>
        <p>
          You retain ownership of the scan results generated by the App, including scores, trait breakdowns, and recommendations ("Results"). You are free to save, share, and use your Results without restriction.
        </p>

        <h3>5.3 Coach Chat Messages</h3>
        <p>
          Messages you send to the AI coach are stored on our servers. By using the AI coach feature, you grant us a non-exclusive, royalty-free license to use your chat messages in anonymized and aggregated form for the purpose of improving and enhancing the App and its services. Your messages will not be shared publicly or attributed to you individually.
        </p>

        <h3>5.4 Habit Data</h3>
        <p>
          Data related to your habits, completions, and streaks is stored on our servers and associated with your account.
        </p>
      </section>

      <section id="ai-disclaimer">
        <h2>6. AI-Generated Content Disclaimer</h2>

        <h3>6.1 Entertainment and Informational Purposes Only</h3>
        <p>
          The App uses artificial intelligence to analyze facial photographs and generate scores, ratings, trait assessments, and recommendations. <strong>All AI-generated content is provided for entertainment and informational purposes only.</strong>
        </p>
        <p>You acknowledge and agree that:</p>
        <ul>
          <li>AI-generated scores, ratings, and trait assessments are not objective measurements and should not be relied upon as factual or accurate representations</li>
          <li>The App's analysis is based on algorithmic processing and does not constitute a professional evaluation of any kind</li>
          <li>Results may vary and are not guaranteed to be consistent, accurate, or complete</li>
        </ul>

        <h3>6.2 Not Professional Advice</h3>
        <p>
          The AI coach feature may provide specific suggestions related to skincare, facial exercises, lifestyle changes, grooming, and other self-improvement topics. <strong>These suggestions are NOT medical, dermatological, psychological, fitness, or any other form of professional advice.</strong>
        </p>
        <p>
          You should always consult with qualified healthcare professionals, dermatologists, or other relevant professionals before acting on any suggestion or recommendation provided by the App.
        </p>
        <p>
          We expressly disclaim any responsibility for any adverse effects, harm, or consequences resulting from your reliance on or use of any AI-generated content, scores, recommendations, or coaching advice provided through the App.
        </p>

        <h3>6.3 No Guarantees</h3>
        <p>
          We make no guarantees regarding the accuracy, reliability, or effectiveness of any AI-generated analysis, score, recommendation, or coaching response. The AI models powering the App may produce errors, inconsistencies, or inappropriate content.
        </p>
      </section>

      <section id="ip">
        <h2>7. Intellectual Property</h2>

        <h3>7.1 Our Property</h3>
        <p>
          The App, including its design, features, code, AI models, algorithms, branding, logos, trademarks, and all related intellectual property, is and remains the exclusive property of ADAM DEVOPS SOLUTIONS LTD. This Agreement does not grant you any ownership rights in the App.
        </p>

        <h3>7.2 Your Property</h3>
        <p>
          As stated in Section 5, you retain ownership of your Photos and Results.
        </p>
      </section>

      <section id="prohibited">
        <h2>8. Prohibited Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the App for any illegal, harmful, or fraudulent purpose</li>
          <li>Upload Photos of other people without their consent</li>
          <li>Upload obscene, offensive, or illegal content</li>
          <li>Attempt to reverse engineer, decompile, or disassemble the App or its AI models</li>
          <li>Circumvent, disable, or interfere with any security or access control features of the App, including subscription paywalls</li>
          <li>Use automated systems, bots, or scripts to interact with the App</li>
          <li>Scrape, harvest, or collect data from the App</li>
          <li>Impersonate another person or entity</li>
          <li>Interfere with or disrupt the App's infrastructure or other users' experience</li>
          <li>Use the App in any manner that could damage, disable, or overburden our servers</li>
          <li>Resell, redistribute, or commercially exploit any part of the App or its content</li>
        </ul>
        <p>Violation of these prohibitions may result in immediate termination of your account.</p>
      </section>

      <section id="termination">
        <h2>9. Termination</h2>

        <h3>9.1 Termination by Us</h3>
        <p>
          We reserve the right to suspend or terminate your account and access to the App at our sole discretion, at any time, with or without cause, and with or without notice. Upon termination, your license to use the App is immediately revoked.
        </p>

        <h3>9.2 Termination by You</h3>
        <p>
          You may stop using the App and delete your account at any time. To cancel a Maxly Pro subscription, you must do so through your Platform account settings before the next renewal date.
        </p>

        <h3>9.3 Effect of Termination</h3>
        <p>
          Upon termination of your account, we may delete your account data, including Photos, scan results, chat messages, and habit data. Active subscriptions are not automatically refunded upon termination.
        </p>
      </section>

      <section id="warranties">
        <h2>10. Disclaimer of Warranties</h2>
        <p>
          THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY.
        </p>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
        </p>
        <ul>
          <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</li>
          <li>WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY AI-GENERATED CONTENT</li>
          <li>WARRANTIES THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS</li>
          <li>WARRANTIES REGARDING THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE APP</li>
        </ul>
        <p>YOUR USE OF THE APP IS AT YOUR OWN RISK.</p>
      </section>

      <section id="liability">
        <h2>11. Limitation of Liability</h2>
        <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW:</p>
        <p>
          (a) IN NO EVENT SHALL ADAM DEVOPS SOLUTIONS LTD, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE APP.
        </p>
        <p>
          (b) THIS APPLIES REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p>
          (c) OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE AMOUNT YOU HAVE PAID TO US IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR FIFTY US DOLLARS (USD $50), WHICHEVER IS GREATER.
        </p>
        <p>
          (d) WE SHALL NOT BE LIABLE FOR ANY HARM, DAMAGE, OR ADVERSE EFFECTS RESULTING FROM YOUR RELIANCE ON AI-GENERATED SCORES, ANALYSES, RECOMMENDATIONS, OR COACHING ADVICE PROVIDED THROUGH THE APP.
        </p>
      </section>

      <section id="indemnification">
        <h2>12. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless ADAM DEVOPS SOLUTIONS LTD, its directors, officers, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with:
        </p>
        <ul>
          <li>Your use of the App</li>
          <li>Your violation of this Agreement</li>
          <li>Your violation of any applicable law or regulation</li>
          <li>Your Photos or any content you submit through the App</li>
          <li>Any claim that your use of the App has caused harm to a third party</li>
        </ul>
      </section>

      <section id="business-transfers">
        <h2>13. Business Transfers</h2>
        <p>
          In the event that ADAM DEVOPS SOLUTIONS LTD undergoes a merger, acquisition, reorganization, or sale of assets, your information and data (including Photos, scan results, chat messages, and account information) may be transferred to the acquiring or successor entity. We will notify you of any such transfer through the App or via the email associated with your account.
        </p>
        <p>
          If the App is discontinued and no successor entity acquires the service, we will delete all user data within a reasonable period following the shutdown, not to exceed ninety (90) days.
        </p>
      </section>

      <section id="third-party">
        <h2>14. Third-Party Services</h2>

        <h3>14.1 AI Service Providers</h3>
        <p>
          To power the App's facial analysis and AI coaching features, your facial photographs, chat messages, and basic profile information (name and gender) are sent to third-party AI service providers for processing. Our current AI providers include services such as <strong>Google (Gemini)</strong>, <strong>OpenAI</strong>, <strong>Anthropic</strong>, and <strong>xAI</strong>. These providers process your data solely to generate results and do not retain your data or use it for model training. The specific providers used may change over time; our Privacy Policy will always reflect the current list.
        </p>

        <h3>14.2 Other Service Providers</h3>
        <p>
          By using the App, you acknowledge that your data may also be processed by third-party service providers for purposes such as authentication, data storage, payment processing, analytics, and error monitoring.
        </p>
      </section>

      <section id="dispute">
        <h2>15. Dispute Resolution</h2>

        <h3>15.1 Governing Law</h3>
        <p>
          This Agreement shall be governed by and construed in accordance with the laws of the State of Israel, without regard to its conflict of law provisions.
        </p>

        <h3>15.2 Mandatory Arbitration</h3>
        <p>
          Any dispute, controversy, or claim arising out of or relating to this Agreement or the App, including its formation, interpretation, breach, or termination, shall be resolved by <strong>binding arbitration</strong> conducted in Israel, in the English language, in accordance with applicable arbitration rules.
        </p>
        <p>
          You agree that any arbitration shall be conducted on an <strong>individual basis only</strong>, and not as a class, consolidated, or representative action.
        </p>

        <h3>15.3 Class Action Waiver</h3>
        <p>
          <strong>YOU AGREE TO WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.</strong> You may only bring claims against ADAM DEVOPS SOLUTIONS LTD in your individual capacity, and not as a plaintiff or class member in any purported class or representative proceeding.
        </p>

        <h3>15.4 Exceptions</h3>
        <p>
          Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement or misappropriation of intellectual property rights.
        </p>
      </section>

      <section id="changes">
        <h2>16. Changes to This Agreement</h2>
        <p>
          We reserve the right to modify or update this Agreement at any time. When we make changes, we will update the "Effective Date" at the top of this document and notify you through the App.
        </p>
        <p>
          Your continued use of the App after any changes to this Agreement constitutes your acceptance of the revised terms. If you do not agree to the revised terms, you must stop using the App and delete your account.
        </p>
      </section>

      <section id="severability">
        <h2>17. Severability</h2>
        <p>
          If any provision of this Agreement is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
        </p>
      </section>

      <section id="entire-agreement">
        <h2>18. Entire Agreement</h2>
        <p>
          This Agreement constitutes the entire agreement between you and ADAM DEVOPS SOLUTIONS LTD with respect to the App and supersedes all prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and us regarding the App.
        </p>
      </section>

      <section id="contact">
        <h2>19. Contact Information</h2>
        <p>If you have any questions or concerns about this Agreement, please contact us at:</p>
        <p>
          <strong>ADAM DEVOPS SOLUTIONS LTD</strong><br />
          Email: <a href="mailto:support@adam-solutions.io">support@adam-solutions.io</a>
        </p>
      </section>
    </LegalPageLayout>
  );
}
