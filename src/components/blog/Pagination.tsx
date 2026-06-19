interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
      <p className="text-sm text-slate-400">Page {currentPage} of {totalPages}</p>
      <div className="flex gap-3">
        <button className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 hover:border-brand-500">Previous</button>
        <button className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 hover:border-brand-500">Next</button>
      </div>
    </div>
  );
}
