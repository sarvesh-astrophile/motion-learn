import {
  IconRocket,
  IconSparkles,
  IconShield,
  IconHeart,
  IconCloud,
} from "@tabler/icons-react";

export default function HooksAnimate() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-10">
        {features.map((feature) => (
          <div key={feature.title}>
            <div>{feature.icon}</div>
            <div>{feature.title}</div>
            <div>{feature.description}</div>
            <div>{feature.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
        src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=300&fit=crop"
        alt="Rocket launch"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
  },
  {
    icon: <IconSparkles className="text-amber-500" />,
    title: "Magical Animations",
    description: "Delight users with smooth, physics-based motion effects.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop"
        alt="Technology"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
  },
  {
    icon: <IconShield className="text-emerald-600" />,
    title: "Secure by Default",
    description: "Enterprise-grade security built into every component.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop"
        alt="Security"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
  },
  {
    icon: <IconShield className="text-yellow-500" />,
    title: "Instant Deployments",
    description: "Push to production in seconds with zero downtime.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
        alt="Circuit board"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
  },
  {
    icon: <IconHeart className="text-rose-500" />,
    title: "Made with Love",
    description: "Crafted by passionate developers for the community.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop"
        alt="Team collaboration"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
  },
  {
    icon: <IconCloud className="text-sky-500" />,
    title: "Cloud Native",
    description: "Built for the cloud with auto-scaling capabilities.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop"
        alt="Cloud computing"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
  },
];
