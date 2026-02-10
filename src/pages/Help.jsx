import { Link } from 'react-router-dom';

export default function Help() {
  return (
    <div className="legal-content">
      <div className="container">
        <div className="legal-wrapper">
          <h1 className="legal-title">Help & Support</h1>
          <div className="legal-intro">
            <p>Find answers to common questions about using Shot Lee. If you don't find what you're looking for, our support team is here to help.</p>
          </div>
          <section className="legal-section">
            <h2 className="legal-section-title">Getting Started</h2>
            <h3 className="legal-subsection-title">How do I create an account?</h3>
            <p className="legal-paragraph">Creating an account is simple. Visit the Shot Lee homepage and click "TRY NOW – 10 FREE EDITS". You'll be prompted to create an account with your email address. Once registered, you'll immediately receive 10 free enhancement credits to get started.</p>
            <h3 className="legal-subsection-title">What file formats do you support?</h3>
            <p className="legal-paragraph">Shot Lee supports all common image formats including JPEG, PNG, HEIC, and RAW files. Maximum file size is 50MB per image.</p>
            <h3 className="legal-subsection-title">How long does processing take?</h3>
            <p className="legal-paragraph">Most images are processed and enhanced within 10-30 seconds. Processing time may vary based on image size and server load, but typically completes in under a minute.</p>
          </section>
          <section className="legal-section">
            <h2 className="legal-section-title">Credits & Pricing</h2>
            <h3 className="legal-subsection-title">How does the credit system work?</h3>
            <p className="legal-paragraph">Each image enhancement consumes one credit. New users receive 10 free credits upon account creation. Additional credits can be purchased in packages of 100 for $29.</p>
            <h3 className="legal-subsection-title">Do credits expire?</h3>
            <p className="legal-paragraph">No, credits never expire. You can use them at your own pace, whenever you need them.</p>
            <h3 className="legal-subsection-title">Can I get a refund for unused credits?</h3>
            <p className="legal-paragraph">Yes, full refunds are available within 30 days of purchase if you have used fewer than 20 credits. See our <Link to="/refund" className="legal-link">Refund and Cancellation Policy</Link> for complete details.</p>
          </section>
          <section className="legal-section">
            <h2 className="legal-section-title">Image Processing</h2>
            <h3 className="legal-subsection-title">How many enhanced versions do I receive?</h3>
            <p className="legal-paragraph">By default, you receive four professionally enhanced versions of each image, each with a different aesthetic interpretation. If you specify an Enhancement Code, you'll receive versions optimized for that specific style.</p>
            <h3 className="legal-subsection-title">Can I request specific enhancements?</h3>
            <p className="legal-paragraph">Yes! Use Enhancement Codes to apply specific aesthetic styles. Browse our <Link to="/enhancement-codes" className="legal-link">Enhancement Codes library</Link> to find codes that match your vision.</p>
            <h3 className="legal-subsection-title">What if I'm not satisfied with the results?</h3>
            <p className="legal-paragraph">Try a different Enhancement Code or submit the image again. Each processing uses one credit, but you can experiment with different codes to achieve your desired look. If you continue to have issues, contact support for assistance.</p>
          </section>
          <section className="legal-section">
            <h2 className="legal-section-title">Privacy & Security</h2>
            <h3 className="legal-subsection-title">Are my images stored?</h3>
            <p className="legal-paragraph">No. Shot Lee does not store your images. All processing occurs in real-time, and images are permanently deleted immediately after enhanced versions are delivered to you.</p>
            <h3 className="legal-subsection-title">Who can see my images?</h3>
            <p className="legal-paragraph">Only you. We don't share your images with third parties, use them for advertising, or store them in any way. Your privacy is absolute. See our <Link to="/privacy" className="legal-link">Privacy Policy</Link> for complete details.</p>
          </section>
          <section className="legal-section">
            <h2 className="legal-section-title">Account Management</h2>
            <h3 className="legal-subsection-title">How do I change my password?</h3>
            <p className="legal-paragraph">Log into your account and navigate to Account Settings. You'll find an option to update your password there.</p>
            <h3 className="legal-subsection-title">Can I delete my account?</h3>
            <p className="legal-paragraph">Yes. Contact support at <a href="mailto:support@shotlee.com" className="legal-link">support@shotlee.com</a> to request account deletion. Note that any remaining unused credits will be forfeited upon account deletion.</p>
            <h3 className="legal-subsection-title">How do I view my credit balance?</h3>
            <p className="legal-paragraph">Your credit balance is displayed in your account dashboard. You can also see it when you're about to process an image.</p>
          </section>
          <section className="legal-section">
            <h2 className="legal-section-title">Technical Issues</h2>
            <h3 className="legal-subsection-title">My image upload failed. What should I do?</h3>
            <p className="legal-paragraph">Check that your file is under 50MB and in a supported format. Try refreshing the page and uploading again. If the problem persists, contact support.</p>
            <h3 className="legal-subsection-title">I didn't receive my enhanced images. What happened?</h3>
            <p className="legal-paragraph">Check your email (including spam folder) for the delivery notification. Enhanced images are typically delivered via email and are also available in your account dashboard. If you don't see them, contact support with your account email and the approximate time of submission.</p>
            <h3 className="legal-subsection-title">The website isn't loading properly.</h3>
            <p className="legal-paragraph">Try clearing your browser cache, disabling browser extensions, or using a different browser. If issues continue, contact support with details about your browser and operating system.</p>
          </section>
          <section className="legal-section">
            <h2 className="legal-section-title">Commercial Use</h2>
            <h3 className="legal-subsection-title">Can I use enhanced images commercially?</h3>
            <p className="legal-paragraph">Yes, you can use enhanced images for commercial purposes. See our <Link to="/licensing" className="legal-link">Content Licensing Policy</Link> for complete details on usage rights and restrictions.</p>
            <h3 className="legal-subsection-title">Do I need a commercial license?</h3>
            <p className="legal-paragraph">No separate commercial license is required for standard commercial use. However, if you're interested in reselling the service or creating derivative services, contact us at <a href="mailto:commercial@shotlee.com" className="legal-link">commercial@shotlee.com</a>.</p>
          </section>
          <section className="legal-section">
            <h2 className="legal-section-title">Still Need Help?</h2>
            <p className="legal-paragraph">Our support team is available to assist you. Contact us at:</p>
            <p className="legal-paragraph"><strong>Email:</strong> <a href="mailto:support@shotlee.com" className="legal-link">support@shotlee.com</a></p>
            <p className="legal-paragraph">We typically respond within 24-48 hours. For urgent issues affecting your ability to use the service, mark your email as "Urgent" in the subject line.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
