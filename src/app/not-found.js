import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[75vh] flex-col items-center justify-center bg-white px-5 text-center">
        <div>
          <h1 className="text-7xl font-bold text-[#171717]">
            404
          </h1>

          <h2 className="mt-5 text-3xl font-semibold text-[#171717]">
            Page Not Found
          </h2>

          <p className="mt-4 text-base text-gray-500">
            The page you are looking for does not exist or has been moved.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block bg-[#171717] px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-gray-700"
          >
            Back to Homepage
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}