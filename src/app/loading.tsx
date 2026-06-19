export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-slate-300">
      <div className="animate-pulse rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center shadow-xl">
        <p>Loading...</p>
      </div>
    </div>
  );
}
