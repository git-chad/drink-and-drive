import dynamic from "next/dynamic";
const Scene = dynamic(() => import("../components/Scene"), { ssr: false });
export default function Home() {
  // bg-gradient-to-b from-gray-800 to-gray-900
  return (
    <main className="relative flex h-screen items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="relative w-full h-full z-20">
        <Scene />
      </div>
      {/* <div className="absolute z-10 flex space-x-3">
        <h1 className="text-[10rem] font-semibold">Hernan</h1>
        <h1 className="text-[10rem] font-black">Cattaneo</h1>
      </div> */}
    </main>
  );
}
