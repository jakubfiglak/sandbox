"use client";

import { type Variants, motion } from "framer-motion";
import { Card } from "./card";

const paragraph =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laboriosam voluptate facilis praesentium distinctio ad perspiciatis corporis, minus accusantium reprehenderit culpa incidunt veritatis rem possimus sint quasi eveniet facere autem error rerum impedit, iste dignissimos earum? Consectetur dicta rerum quaerat quidem, facere optio aut consequuntur incidunt natus, ex quas facilis!";

const content = [
  { title: "Card 1", content: paragraph },
  { title: "Card 2", content: paragraph },
  { title: "Card 3", content: paragraph },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.9,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    x: "-200%",
  },
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      damping: 300,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const CardsList = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {content.map(({ title, content }) => (
        <Card
          key={title}
          title={title}
          content={content}
          animationVariants={{
            container: cardVariants,
            header: headerVariants,
            content: paragraphVariants,
          }}
        />
      ))}
    </motion.div>
  );
};
