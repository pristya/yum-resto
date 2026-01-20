import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        className="relative px-10 md:px-20 flex items-center justify-end w-full min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url('img/bg.jpg')` }}
      >
        <div className="absolute inset-0 md:bg-linear-to-l bg-black/60 md:from-black/20 md:to-transparent"></div>

        <div className="relative z-10 max-w-2xl text-right flex flex-col items-end text-shadow-sm text-shadow-black bottom-8">
          <h1 className="text-5xl md:text-7xl loading-[1.1] text-white tracking-tight font-black">
            Rasakan <br /> <span className="text-amber-400">Kelezatan </span>
            Sejati
          </h1>

          <div className="w-24 h-1 bg-amber-400 mt-6"></div>

          <p className="text-lg md:text-2xl text-gray-200 font-medium max-w-lg leading-relaxed mb-8">
            Dibuat dengan bahan premium untuk setiap gigitannya.
          </p>

          <div className="flex gap-4">
            <Link
              href={"/menu"}
              className="bg-amber-400 hover:bg-amber-950 text-white px-8 py-3 tracking-wider rounded-md font-bold text-shadow-xs text-shadow-black transition-all"
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
