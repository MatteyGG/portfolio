"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { ReactNode, Children, cloneElement, isValidElement } from 'react';
import { ComponentPropsWithRef } from 'react';

interface OrbitingAvatarProps {
    speed?: number;
    radius?: number;
    children: ReactNode;
    avatarSrc: string;
}

export const OrbitingAvatar = ({
    speed = 1,
    radius = 120,
    children,
    avatarSrc,
}: OrbitingAvatarProps) => {
    const items = Children.toArray(children);
    const totalItems = items.length;
    const angleStep = (2 * Math.PI) / totalItems;

    return (
        <div className="relative h-[500px] w-[500px] mx-auto">
            {/* Вращающиеся элементы */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 10 / speed,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute h-full w-full"
            >
                {items.map((child, index) => {
                    const angle = angleStep * index;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={index}
                            className="absolute left-1/2 top-1/2 h-20 w-20"
                            style={{
                                x: x - 40, // Центрируем элемент (40px = 50% от 80px)
                                y: y - 40,
                            }}
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 10 / speed,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                        >
                            {isValidElement(child) && React.createElement(
                                child.type,
                                { ...child.props, className: `${child.props.className || ''} absolute inset-0` },
                                child.props.children
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Центральная аватарка */}
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2">
                <Image
                    src={avatarSrc}
                    alt="User avatar"
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                />
            </div>
        </div>
    );
};