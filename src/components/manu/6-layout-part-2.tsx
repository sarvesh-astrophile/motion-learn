import { motion } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="py-40">
      <nav className="max-w-xl mx-auto bg-gray-100 rounded-full py-1 px-1.5 flex">
        {navItems.map((item, idx) => (
          <a
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            key={item.href}
            href={item.href}
            className="w-full px-10 relative group py-3 text-lg inline-block text-center text-neutral-700!"
          >
            <span className="z-10 relative group-hover:text-neutral-50">
              {item.title}
            </span>
            {hovered === idx && (
              <motion.div
                layoutId="nav-hover"
                className="absolute inset-0 rounded-full w-full h-full bg-neutral-800"
              ></motion.div>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};
