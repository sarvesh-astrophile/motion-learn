import { useState } from "react";
import { motion } from "framer-motion";

const sidebarVariant = {
  open: {
    width: "16rem",
  },
  closed: {
    width: "4.5rem",
  },
};

const navVariant = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const ItemVariant = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -10,
  },
};

export default function Variants() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = ["Dashboard", "Projects", "Team", "Settings", "Reports"];

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3 }}
      className="flex h-screen bg-gray-100"
    >
      <motion.aside
        variants={sidebarVariant}
        className={`bg-white border-r border-gray-200 flex flex-col overflow-hidden ${
          isOpen ? "w-60" : "w-16"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-50 mb-4">
          <div className="font-bold text-xl truncate">Logo</div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <div className="w-5 h-0.5 bg-gray-600 mb-1" />
            <div className="w-5 h-0.5 bg-gray-600 mb-1" />
            <div className="w-5 h-0.5 bg-gray-600" />
          </button>
        </div>

        <motion.nav variants={navVariant} className="flex-1 px-2 space-y-1">
          {menuItems.map((item) => (
            <motion.div
              variants={ItemVariant}
              key={item}
              className="px-4 py-3 rounded-md hover:bg-gray-50 text-gray-700 cursor-pointer whitespace-nowrap"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item}
            </motion.div>
          ))}
        </motion.nav>
      </motion.aside>

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Content Area</h1>
        <p className="mt-4 text-gray-600">
          The sidebar above uses Framer Motion variants to handle the expansion
          and the staggered entrance of menu items.
        </p>
      </main>
    </motion.div>
  );
}
