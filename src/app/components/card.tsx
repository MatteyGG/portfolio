"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  type?: string;
  topic: string;
  images: string[];
  description: string;
  shortDescription?: string;
  redirect: string;
  github?: string;
  indev?: boolean;
  private?: boolean;
}

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
  },
};

const imageHoverVariants = {
  hover: {
    x: 10,
    y: 10,
    scale: 1.1,
  },
};

const Card = ({
  type,
  topic,
  images,
  description,
  shortDescription,
  redirect,
  github,
  indev,
  private: isPrivate,
}: CardProps) => {
  return (
    <motion.div
      className="card relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      variants={cardVariants}
    >
      {/* In-dev badge */}
      {indev && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full"
        >
          In Development
        </motion.div>
      )}

      <h1 className="text-2xl font-bold mb-4">{topic}</h1>

      <motion.div className="flex gap-4 mb-4" variants={{ hover: { transition: { staggerChildren: 0.1 } } }}>
        <motion.div
          className="w-1/2 h-32 relative overflow-hidden rounded-lg"
          variants={imageHoverVariants}
        >
          {images.length > 0 && (
            <motion.div
              className="h-full w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                className="object-cover"
                src={images[0]}
                alt={topic}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </motion.div>
          )}
        </motion.div>

        <motion.p
          className="w-1/2 text-balance text-sm line-clamp-3 ml-4"
          initial={{ opacity: 0, x: 20 }} 
          animate={{
            opacity: 1,
            x: 0, 
            transition: {
              delay: 0.2,
              type: "spring", 
              stiffness: 120
            }
          }}
        >
          {shortDescription || description}
        </motion.p>
      </motion.div>

      <motion.div className="flex items-center justify-between gap-4">
        <motion.div whileHover={{ x: 5 }}>
          <Link
            href={`/projects${type ? `?type=${type}&topic=${topic}` : `?topic=${topic}`}`}
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            Read more →
          </Link>
        </motion.div>

        <div className="flex items-center gap-4">
          {github && !isPrivate ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-600 hover:text-black"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </Link>
            </motion.div>
          ) : (
            <span className="text-red-500 text-sm">Private</span>
          )}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={redirect}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Visit
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;