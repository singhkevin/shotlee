import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-inner">
        <Link to="/" className="not-found-logo">
          <img src="/assets/14.png" alt="Shot Lee" />
        </Link>
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Page not found.</p>
        <Link to="/" className="not-found-link">
          Back to home
        </Link>
      </div>
    </div>
  );
}
