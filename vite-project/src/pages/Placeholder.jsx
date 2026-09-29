import { useLocation } from "react-router-dom";

function Placeholder() {
  const location = useLocation();

  const title =
    location.pathname
      .replace("/", "")
      .replace("-", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
          📄
        </div>

        <h1 className="mt-5 text-2xl font-bold text-slate-800">
          {title}
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          This page will be developed later.
        </p>
      </div>
    </div>
  );
}

export default Placeholder;