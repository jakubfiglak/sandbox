"use client";

import { type Variants, motion } from "framer-motion";

import {
  Card as ShadcnCard,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

const MotionCard = motion(ShadcnCard);
const MotionCardHeader = motion(CardHeader);

type CardProps = {
  title: string;
  content: string;
  animationVariants?: {
    container?: Variants;
    header?: Variants;
    content?: Variants;
  };
};

export const Card = ({ title, content, animationVariants = {} }: CardProps) => {
  return (
    <MotionCard variants={animationVariants.container}>
      <MotionCardHeader
        variants={animationVariants.header}
        className="font-bold"
      >
        {title}
      </MotionCardHeader>
      <CardContent>
        <motion.p variants={animationVariants.content}>{content}</motion.p>
      </CardContent>
    </MotionCard>
  );
};
