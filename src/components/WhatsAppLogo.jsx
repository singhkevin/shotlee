export default function WhatsAppLogo({ className = '', height = 24, ariaHidden = false }) {
  return (
    <span
      className={`whatsapp-logo ${className}`.trim()}
      role="img"
      aria-label={ariaHidden ? undefined : 'WhatsApp'}
      aria-hidden={ariaHidden}
    >
      <img
        src="/assets/Whatsapp%20Logo.svg"
        alt=""
        width="auto"
        height={height}
        className="whatsapp-logo-img"
      />
    </span>
  );
}
