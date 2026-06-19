import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#FFFCF8" }}
    >
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: "#4ecca3" }}
      >
        TEMPORARILY UNAVAILABLE
      </p>

      <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
        We&apos;ll be back soon!
      </h1>

      <p className="mb-10 max-w-md text-base text-gray-500">
        Sorry for the inconvenience. We’re currently working on improving your
        experience. Please check back shortly.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#111110" }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}