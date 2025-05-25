"use client";

import { motion } from "framer-motion";
import cards from "@/lib/cards.json";
import { useSearchParams } from "next/navigation";
import Slider from "../components/slider";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 }
  }
};

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="frame max-w-6xl mx-auto px-4 py-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
          {project.topic}
        </motion.h1>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          <motion.div
            variants={itemVariants}
            className="relative aspect-video rounded-xl overflow-hidden shadow-xl"
          >
            <Slider srcs={project.images} />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.p variants={itemVariants} className="text-xl leading-relaxed">
              {project.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              {project.indev && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  In Development
                </span>
              )}

              <div className="flex gap-4">
                {project.github && !project.private ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <FiGithub className="text-xl" />
                    <span>GitHub</span>
                  </motion.button>
                ) : (
                  <span className="px-4 py-2 text-red-600">Private</span>
                )}

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={project.redirect || "/"}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}