import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="section-pad px-5 md:px-16 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
      <h1 className="font-display text-headline-lg text-primary">Lost on the Trail</h1>
      <p className="font-body text-body-lg text-on-surface-variant">
        The page you're looking for has wandered off into the deodars. Let's get you back.
      </p>
      <Link to="/" className="bg-primary text-on-primary font-body text-label-lg px-8 py-3 rounded-lg hover:bg-primary-container transition-all">
        Return Home
      </Link>
    </div>
  );
}
