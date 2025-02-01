import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex-row mx-auto">
        <p className="text-gray-500 text-lg ml-1">Choose:</p>
        <div className="font-bold text-6xl upper_animation">
          <button>
            <Link href="/code">
              Code<span className="blink">|</span>
            </Link>
          </button>
        </div>
        <p className="text-4xl translate-x-2 text-gray-500">OR</p>
        <div className="font-bold text-6xl upper_animation">
          <button>
            <Link href="/design">
              design <span className="rainbow">∆</span>
            </Link>
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
