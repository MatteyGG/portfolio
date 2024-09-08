import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex-row mx-auto">
        <div className="font-bold text-6xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"><button><Link href="/code">Code<span className="blink">I</span></Link></button></div>
        <p className="text-4xl translate-x-2 text-slate-700">or</p>
        <div className="font-bold text-6xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"><button><Link href="/design">design <span className="rainbow">∆</span></Link></button> </div>
      </div>
    </div>
  );
}
