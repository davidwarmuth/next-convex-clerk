export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-20">
      <div className="animate-spin size-12 border-t-4 border-zinc-600 rounded-full" />
    </div>
  );
}
