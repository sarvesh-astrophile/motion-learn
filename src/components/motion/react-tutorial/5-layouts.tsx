import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Card {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
}

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        callback();
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);
  return ref;
};

const cards: Card[] = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://upload.wikimedia.org/wikipedia/en/2/22/SummertimeSadnessOfficial.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-sm text-neutral-500">
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "The Weeknd",
    title: "Blinding Lights",
    src: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-sm text-neutral-500">
          The Weeknd, born Abel Makkonen Tesfaye, is a Canadian singer,
          songwriter, and record producer. He rose to prominence with his
          mysterious persona and dark, atmospheric R&B sound. <br /> <br /> His
          music blends alternative R&B with new wave and dream pop influences,
          creating a distinctive sonic landscape. With chart-topping hits and
          critically acclaimed albums, The Weeknd has become one of the most
          influential artists of his generation, known for his falsetto vocals
          and introspective lyrics about love, heartbreak, and hedonism.
        </p>
      );
    },
  },
  {
    description: "Taylor Swift",
    title: "Cruel Summer",
    src: "https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-sm text-neutral-500">
          Taylor Swift is an American singer-songwriter who has redefined modern
          pop and country music. Known for her narrative songwriting and
          versatile artistic evolution, she has become one of the best-selling
          musicians of all time. <br /> <br /> From her country roots to pop
          superstardom and indie folk experimentation, Swift's music resonates
          with millions through its emotional honesty and storytelling prowess.
          Her ability to connect with fans through deeply personal lyrics has
          cemented her status as a cultural icon.
        </p>
      );
    },
  },
  {
    description: "Billie Eilish",
    title: "Bad Guy",
    src: "https://upload.wikimedia.org/wikipedia/en/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-sm text-neutral-500">
          Billie Eilish is an American singer-songwriter who burst onto the
          scene with her debut single "Ocean Eyes." Known for her whisper-like
          vocals and genre-defying sound, she has become a voice for her
          generation. <br /> <br /> Her music explores themes of mental health,
          climate change, and personal struggles with haunting melodies and
          innovative production. At just 18, she became the youngest artist to
          win all four major Grammy categories, marking a new era in
          contemporary music.
        </p>
      );
    },
  },
  {
    description: "Arctic Monkeys",
    title: "Do I Wanna Know?",
    src: "https://upload.wikimedia.org/wikipedia/en/0/04/Arctic_Monkeys_-_AM.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-sm text-neutral-500">
          Arctic Monkeys are an English rock band formed in Sheffield in 2002.
          Known for their witty lyrics and Alex Turner's distinctive vocals,
          they've evolved from indie rock upstarts to one of the most
          influential bands of their generation. <br /> <br /> Their discography
          showcases remarkable range, from the frenetic energy of their debut to
          the smooth, desert-rock inspired sound of later albums. With numerous
          awards and a devoted global following, Arctic Monkeys continue to push
          the boundaries of alternative rock.
        </p>
      );
    },
  },
];

export default function Layouts() {
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const ref = useOutsideClick(() => setCurrentCard(null));
  return (
    <div className="py-40 w-full relative">
      {currentCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"
        ></motion.div>
      )}
      {currentCard && (
        <motion.div
          layoutId={`card-${currentCard.title}`}
          ref={ref}
          className="h-150 fixed inset-0 z-20 m-auto w-80 bg-white rounded-lg ring-1 ring-neutral-200 p-4"
        >
          <motion.img
            layoutId={`card-image-${currentCard.title}`}
            src={currentCard.src}
            alt={currentCard.title}
            className="w-full aspect-square rounded-xl"
          />
          <div className="flex flex-col justify-between items-center">
            <div className="flex justify-between py-4 items-start w-full gap-2">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${currentCard.title}`}
                  className="font-bold text-sm tracking-tight text-black"
                >
                  {currentCard.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${currentCard.title}`}
                  className="text-sm text-neutral-500"
                >
                  {currentCard.description}
                </motion.p>
              </div>
              <motion.div layoutId={`card-cta-${currentCard.title}`}>
                <a
                  href={currentCard.ctaLink}
                  className="px-2 py-1 bg-green-500 rounded-full text-white! text-sm"
                >
                  {currentCard.ctaText}
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="h-40 overflow-auto mask-[linear-gradient(to_top,transparent,black_50%)]"
            >
              {currentCard.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrentCard(card)}
            type="button"
            key={card.title}
            className="p-4 rounded-lg cursor-pointer flex justify-between ring-1 ring-neutral-200"
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="h-14 aspect-square rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="font-bold text-sm text-black tracking-tight"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${card.title}`}
                  className="text-sm text-neutral-500"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="px-2 py-1 my-auto bg-green-500 rounded-full text-white text-sm"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
