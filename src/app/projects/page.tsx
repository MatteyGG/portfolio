"use client";

import cards from "@/lib/cards.json";
import { useSearchParams } from "next/navigation";
import Slider from "../components/slider";
import Link from "next/link";

export default function Project() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "any";
  const topic = searchParams.get("topic");

  if (!topic) return <div>Project not found</div>;

  const project = cards[type as keyof typeof cards].find(
    (card) => card.topic === topic
  );

  if (!project) return <div>Project not found</div>;

  return (
    <div className="frame">
      <h1 className="text-left mb-2 text-4xl">{project.topic}</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="w-full row-span-2">
          <Slider srcs={project.images} />
        </div>
        <div>
          <p className="text-xl">{project.description}</p>
          <div className="inline-flex gap-2 text-base mt-2">
            {project.github && !project.private ? (
              <button
                onClick={() =>
                  window.open(project.github, "_blank", "noopener,noreferrer")
                }
                className="link"
              >
                Github
              </button>
            ) : (
              <span className=" text-red-600 ml-4">Private</span>
            )}
            {project.indev && (
              <span className=" text-green-600 ml-4">In development</span>
            )}
            <Link href={project.redirect || "/"} target="_blank" className="link">
              Visit &uarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
