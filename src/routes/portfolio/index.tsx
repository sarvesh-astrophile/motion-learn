import { createFileRoute } from "@tanstack/react-router";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/portfolio/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      {" "}
      <AnimatePresence>
        <CloudflareWorkerForm />
      </AnimatePresence>
    </div>
  );
}

const CloudflareWorkerForm = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState(false);
  const [keyHint, setKeyHint] = useState<"tab" | "shift-tab" | null>(null);

  // Demo sequence from the video
  useEffect(() => {
    if (!showDemo) return;

    const sequence = [
      { field: "name", hint: "tab" },
      { field: "template", hint: "tab" },
      { field: "date", hint: "tab" },
      { field: "deploy", hint: "tab" },
      { field: "date", hint: "shift-tab" },
      { field: "template", hint: "shift-tab" },
      { field: "name", hint: "shift-tab" },
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i >= sequence.length) {
        setFocusedField(null);
        setKeyHint(null);
        setShowDemo(false);
        return;
      }
      setFocusedField(sequence[i].field);
      setKeyHint(sequence[i].hint as "tab" | "shift-tab");
      i++;
    }, 600);

    return () => clearInterval(interval);
  }, [showDemo]);

  // Fire glow animation variants
  const glowVariants = {
    idle: {
      boxShadow: "0 0 0px rgba(249, 115, 22, 0)",
      borderColor: "rgba(75, 85, 99, 0.4)",
    },
    glow: {
      boxShadow: [
        "0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(249, 115, 22, 0.2), inset 0 0 20px rgba(249, 115, 22, 0.1)",
        "0 0 30px rgba(249, 115, 22, 0.6), 0 0 60px rgba(249, 115, 22, 0.3), inset 0 0 30px rgba(249, 115, 22, 0.2)",
        "0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(249, 115, 22, 0.2), inset 0 0 20px rgba(249, 115, 22, 0.1)",
      ],
      borderColor: "rgba(249, 115, 22, 0.8)",
      transition: {
        boxShadow: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const isActive = (field: string) => focusedField === field;

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8 relative overflow-hidden font-sans">
      {/* Ambient grid background */}
      <AnimatePresence>
        {focusedField && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              backgroundPosition: "center center",
            }}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        )}
      </AnimatePresence>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <motion.div
            className="text-orange-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <svg
              width="80"
              height="48"
              viewBox="0 0 120 72"
              fill="currentColor"
            >
              <path d="M95.6 25.2c-1.6-6.7-7.3-11.2-14-11.2-1.9 0-3.7.4-5.4 1.1-2.6-8.9-10.8-15.1-20.2-15.1-11.1 0-20.2 8.4-20.8 19.3-.8-.1-1.6-.2-2.4-.2C15.6 18.9 7 27.5 7 38.1c0 10.3 8 18.6 18.1 18.6h72.4c9 0 16.3-7.3 16.3-16.3 0-8.4-6.4-15.2-14.8-16-.3 0-.4-.1-.4-.2z" />
              <path
                d="M95.6 25.2c-.8 0-1.6.1-2.4.2.6-11-8.5-19.4-19.6-19.4-9.4 0-17.6 6.2-20.2 15.1-1.7-.7-3.5-1.1-5.4-1.1-6.7 0-12.4 4.5-14 11.2-.3 0-.4.1-.4.2-1.6.2-3.1.7-4.5 1.4 2.4-6.2 8.3-10.6 15.1-10.6.8 0 1.6.1 2.4.2.6-11 8.5-19.4 19.6-19.4 9.4 0 17.6 6.2 20.2 15.1 1.7-.7 3.5-1.1 5.4-1.1 6.7 0 12.4 4.5 14 11.2 1.4.1 2.7.4 4 .9-.9-6.5-6.4-11.5-13.1-11.5z"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        </div>

        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Create a Worker
          </h1>
          <p className="text-gray-400 text-sm">
            Deploy serverless code instantly across Cloudflare's global network.
          </p>
        </motion.div>

        {/* Form */}
        <div className="space-y-5">
          {/* Name Field */}
          <motion.div
            className="relative rounded-lg"
            variants={glowVariants}
            animate={isActive("name") ? "glow" : "idle"}
            onMouseEnter={() => setFocusedField("name")}
            onMouseLeave={() => !showDemo && setFocusedField(null)}
          >
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                defaultValue="my-api"
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors"
                onFocus={() => setFocusedField("name")}
                onBlur={() => !showDemo && setFocusedField(null)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">
                .workers.dev
              </span>
            </div>
          </motion.div>

          {/* Starter Template */}
          <motion.div
            className="relative rounded-lg"
            variants={glowVariants}
            animate={isActive("template") ? "glow" : "idle"}
            onMouseEnter={() => setFocusedField("template")}
            onMouseLeave={() => !showDemo && setFocusedField(null)}
          >
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Starter template
            </label>
            <div className="relative">
              <select
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none transition-colors cursor-pointer"
                onFocus={() => setFocusedField("template")}
                onBlur={() => !showDemo && setFocusedField(null)}
              >
                <option>Hello World</option>
                <option>API Handler</option>
                <option>Proxy</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Compatibility Date */}
          <motion.div
            className="relative rounded-lg"
            variants={glowVariants}
            animate={isActive("date") ? "glow" : "idle"}
            onMouseEnter={() => setFocusedField("date")}
            onMouseLeave={() => !showDemo && setFocusedField(null)}
          >
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Compatibility date
            </label>
            <input
              type="text"
              defaultValue="2026-04-02"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
              onFocus={() => setFocusedField("date")}
              onBlur={() => !showDemo && setFocusedField(null)}
            />
          </motion.div>

          {/* Deploy Button */}
          <motion.div
            className="relative rounded-lg pt-2"
            variants={glowVariants}
            animate={isActive("deploy") ? "glow" : "idle"}
            onMouseEnter={() => setFocusedField("deploy")}
            onMouseLeave={() => !showDemo && setFocusedField(null)}
          >
            <motion.button
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors relative z-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onFocus={() => setFocusedField("deploy")}
              onBlur={() => !showDemo && setFocusedField(null)}
            >
              Deploy
            </motion.button>
          </motion.div>

          {/* Git Repository Link */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-500 text-sm">
              Or connect a{" "}
              <a href="#" className="text-orange-500 hover:text-orange-400">
                Git repository
              </a>{" "}
              for CI/CD
            </p>
          </motion.div>
        </div>

        {/* Keyboard Navigation Hints */}
        <AnimatePresence mode="wait">
          {keyHint && (
            <motion.div
              className="fixed bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gray-800/90 backdrop-blur px-4 py-2 rounded-lg border border-gray-700 shadow-2xl"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {keyHint === "shift-tab" && (
                <>
                  <span className="text-white text-xs font-medium">
                    ⇧ Shift
                  </span>
                  <span className="text-gray-500">+</span>
                </>
              )}
              <div className="flex items-center gap-1 text-white">
                <span className="text-lg">⇥</span>
                <span className="text-xs font-medium">Tab</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Demo Trigger (Optional - remove in production) */}
        <motion.button
          className="fixed bottom-4 right-4 text-xs text-gray-600 hover:text-gray-400 transition-colors"
          onClick={() => setShowDemo(true)}
          whileHover={{ scale: 1.05 }}
        >
          Replay Demo
        </motion.button>
      </div>

      <style jsx global>{`
        @keyframes fireFlicker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.85;
          }
        }
      `}</style>
    </div>
  );
};

export default CloudflareWorkerForm;
