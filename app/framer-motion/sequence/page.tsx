"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Variants, motion } from "framer-motion";

const MotionCard = motion(Card);
const MotionCardHeader = motion(CardHeader);

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    x: "-200%",
  },
  visible: (idx: number) => ({
    x: 0,
    transition: {
      when: "beforeChildren",
      delay: idx * 1.2,
      staggerChildren: 0.3,
    },
  }),
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const SequencePage = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">Sequence</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8 overflow-hidden"
      >
        <MotionCard variants={cardVariants} custom={0}>
          <MotionCardHeader variants={headerVariants} className="font-bold">
            Card 1
          </MotionCardHeader>
          <CardContent>
            <motion.p variants={paragraphVariants}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              laboriosam voluptate facilis praesentium distinctio ad
              perspiciatis corporis, minus accusantium reprehenderit culpa
              incidunt veritatis rem possimus sint quasi eveniet facere autem
              error rerum impedit, iste dignissimos earum? Consectetur dicta
              rerum quaerat quidem, facere optio aut consequuntur incidunt
              natus, ex quas facilis!
            </motion.p>
          </CardContent>
        </MotionCard>
        <MotionCard variants={cardVariants} custom={1}>
          <MotionCardHeader variants={headerVariants} className="font-bold">
            Card 2
          </MotionCardHeader>
          <CardContent>
            <motion.p variants={paragraphVariants}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              laboriosam voluptate facilis praesentium distinctio ad
              perspiciatis corporis, minus accusantium reprehenderit culpa
              incidunt veritatis rem possimus sint quasi eveniet facere autem
              error rerum impedit, iste dignissimos earum? Consectetur dicta
              rerum quaerat quidem, facere optio aut consequuntur incidunt
              natus, ex quas facilis!
            </motion.p>
          </CardContent>
        </MotionCard>
        <MotionCard variants={cardVariants} custom={2}>
          <MotionCardHeader variants={headerVariants} className="font-bold">
            Card 3
          </MotionCardHeader>
          <CardContent>
            <motion.p variants={paragraphVariants}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              laboriosam voluptate facilis praesentium distinctio ad
              perspiciatis corporis, minus accusantium reprehenderit culpa
              incidunt veritatis rem possimus sint quasi eveniet facere autem
              error rerum impedit, iste dignissimos earum? Consectetur dicta
              rerum quaerat quidem, facere optio aut consequuntur incidunt
              natus, ex quas facilis!
            </motion.p>
          </CardContent>
        </MotionCard>
      </motion.div>
    </div>
  );
};

export default SequencePage;
