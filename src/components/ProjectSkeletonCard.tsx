export default function ProjectSkeletonCard() {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-sm p-4">
      <div className="w-full h-48 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-lg animate-pulse"></div>
      <div className="w-full h-7 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md mt-6 animate-pulse"></div>
      <div className="flex flex-col gap-3">
        <div className="w-11/12 h-5 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md mt-3  animate-pulse"></div>
        <div className="w-10/12 h-5 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
      <div className="w-full flex items-center gap-3 mt-4 animate-pulse">
        <div className="w-10/12 h-10 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md"></div>
        <div className="w-12 h-10 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
}
