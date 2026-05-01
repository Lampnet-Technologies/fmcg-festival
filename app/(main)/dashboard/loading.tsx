export default function DashboardLoading() {
  return (
    <main className="flex-1 bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="h-10 w-64 bg-gray-200 animate-pulse rounded-md mb-2"></div>
        <div className="h-4 w-48 bg-gray-200 animate-pulse rounded-md mb-8"></div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded-md"></div>
            <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded-md"></div>
          </div>
          <div className="w-48 h-48 bg-gray-200 animate-pulse rounded-md hidden md:block"></div>
        </div>
      </div>
    </main>
  );
}