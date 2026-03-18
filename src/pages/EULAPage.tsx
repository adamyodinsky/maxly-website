import LegalPageLayout from '@/components/ui/LegalPageLayout';

const sections = [
  { id: 'agreement', title: 'Agreement' },
  { id: 'license', title: 'License Grant' },
  { id: 'restrictions', title: 'Restrictions' },
  { id: 'ownership', title: 'Ownership' },
  { id: 'subscriptions', title: 'Subscriptions' },
  { id: 'termination', title: 'Termination' },
  { id: 'warranties', title: 'Warranties' },
  { id: 'liability', title: 'Liability' },
  { id: 'export', title: 'Export Compliance' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'changes', title: 'Changes' },
  { id: 'contact', title: 'Contact' },
];

export default function EULAPage() {
  return (
    <LegalPageLayout title="End User License Agreement" lastUpdated="March 17, 2026" sections={sections}>
      <section id="agreement">
        <h2>1. Agreement</h2>
        <p>
          This End User License Agreement ("EULA") is a legal agreement between you and Adam Solutions ("Licensor") for the use of the Maxly mobile application ("App"). By installing or using the App, you agree to be bound by the terms of this EULA.
        </p>
      </section>

      <section id="license">
        <h2>2. License Grant</h2>
        <p>
          Subject to the terms of this EULA, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on a device that you own or control, for your personal, non-commercial purposes.
        </p>
      </section>

      <section id="restrictions">
        <h2>3. Restrictions</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Copy, modify, or distribute the App or any portion thereof</li>
          <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code</li>
          <li>Rent, lease, lend, sell, or sublicense the App</li>
          <li>Remove, alter, or obscure any proprietary notices</li>
          <li>Use the App in any way that violates applicable laws or regulations</li>
          <li>Use the App to develop a competing product or service</li>
        </ul>
      </section>

      <section id="ownership">
        <h2>4. Ownership</h2>
        <p>
          The App is licensed, not sold. Adam Solutions retains all rights, title, and interest in and to the App, including all intellectual property rights. This EULA does not grant you any rights to trademarks, service marks, or trade names.
        </p>
      </section>

      <section id="subscriptions">
        <h2>5. Subscription Terms</h2>
        <p>
          Access to premium features requires an active subscription. Subscriptions are managed through the Apple App Store or Google Play Store. Payment is charged to your store account at confirmation of purchase. Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.
        </p>
      </section>

      <section id="termination">
        <h2>6. Termination</h2>
        <p>
          This EULA is effective until terminated. Your rights under this EULA will terminate automatically if you fail to comply with any of its terms. Upon termination, you must cease all use of the App and delete all copies from your devices.
        </p>
      </section>

      <section id="warranties">
        <h2>7. Disclaimer of Warranties</h2>
        <p>
          THE APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ADAM SOLUTIONS DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
      </section>

      <section id="liability">
        <h2>8. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ADAM SOLUTIONS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH THIS EULA OR THE USE OF THE APP.
        </p>
      </section>

      <section id="export">
        <h2>9. Export Compliance</h2>
        <p>
          You agree to comply with all applicable export and re-export control laws and regulations when using the App.
        </p>
      </section>

      <section id="governing-law">
        <h2>10. Governing Law</h2>
        <p>
          This EULA shall be governed by and construed in accordance with the laws of the jurisdiction in which Adam Solutions is established, without regard to its conflict of law provisions.
        </p>
      </section>

      <section id="changes">
        <h2>11. Changes to This EULA</h2>
        <p>
          We reserve the right to modify this EULA at any time. Changes will be effective upon posting the updated EULA. Your continued use of the App constitutes acceptance of the modified terms.
        </p>
      </section>

      <section id="contact">
        <h2>12. Contact</h2>
        <p>For questions about this EULA, contact us:</p>
        <ul>
          <li>Email: <a href="mailto:support@maxlyapp.com">support@maxlyapp.com</a></li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}
