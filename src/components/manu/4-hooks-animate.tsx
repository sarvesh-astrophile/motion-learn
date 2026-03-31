import {
  IconRocket,
  IconSparkles,
  IconShield,
  IconHeart,
  IconCloud,
} from "@tabler/icons-react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export default function HooksAnimate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const backgrounds = ["#fee2e2", "#ff3dd5", "#ecfccb"];
  const [background, setBackground] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
    console.log("latest background", backgrounds[finalValue]);
  });
  return (
    <motion.div
      ref={containerRef}
      animate={{
        background,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex items-center justify-center"
    >
      <div className="flex flex-col gap-10 max-w-4xl mx-auto py-40">
        {features.map((feature) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const traslateContent = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blurText = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scaleText = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 items-center gap-20 py-40"
      key={feature.title}
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blurText}px)`,
          scale: scaleText,
        }}
        className="flex flex-col gap-5"
      >
        <div>{feature.icon}</div>
        <h2 className="text-4xl font-bold text-gray-950 dark:text-neutral-50">
          {feature.title}
        </h2>
        <p className="text-lg text-gray-700 dark:text-neutral-400">
          {feature.description}
        </p>
      </motion.div>
      <motion.div
        style={{ translateY: traslateContent, opacity: opacityContent }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <IconRocket className="text-blue-600" />,
    title: "Blazing Fast Performance",
    description:
      "Experience lightning-speed interactions with optimized rendering.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=400&fit=crop"
        alt="Rocket launch"
        className="size-full object-cover rounded-lg"
      />
    ),
  },
  {
    icon: <IconSparkles className="text-amber-500" />,
    title: "Magical Animations",
    description: "Delight users with smooth, physics-based motion effects.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop"
        alt="Technology"
        className="size-full object-cover rounded-lg"
      />
    ),
  },
  {
    icon: <IconShield className="text-emerald-600" />,
    title: "Secure by Default",
    description: "Enterprise-grade security built into every component.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop"
        alt="Security"
        className="size-full object-cover rounded-lg"
      />
    ),
  },
  {
    icon: <IconShield className="text-yellow-500" />,
    title: "Instant Deployments",
    description: "Push to production in seconds with zero downtime.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop"
        alt="Circuit board"
        className="size-full object-cover rounded-lg"
      />
    ),
  },
  {
    icon: <IconHeart className="text-rose-500" />,
    title: "Made with Love",
    description: "Crafted by passionate developers for the community.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop"
        alt="Team collaboration"
        className="size-full object-cover rounded-lg"
      />
    ),
  },
  {
    icon: <IconCloud className="text-sky-500" />,
    title: "Cloud Native",
    description: "Built for the cloud with auto-scaling capabilities.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=400&fit=crop"
        alt="Cloud computing"
        className="size-full object-cover rounded-lg"
      />
    ),
  },
];
