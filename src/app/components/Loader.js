export default function Loader({ className = "" }) {
  return (
    <div
      className={`w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin ${className}`}
    ></div>
  );
}