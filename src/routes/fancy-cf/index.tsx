import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "#/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "#/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import { Button } from "#/components/ui/button";
import { motion, AnimatePresence, animate } from "motion/react";
import { Progress } from "#/components/ui/progress";

const templates = [
  { label: "Select a template", value: null },
  { label: "Hello World", value: "hello-world" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
];

const progressWorks = [
  { label: "Building worker" },
  { label: "Uploading to edge network" },
  { label: "Deploying to region: Earth" },
];

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const Route = createFileRoute("/fancy-cf/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<number>(0);
  const [lastStepComplete, setLastStepComplete] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [progressControl, setProgressControl] = useState<ReturnType<
    typeof animate
  > | null>(null);
  const [showScanner, setShowScanner] = useState(false);

  const SCANNER_DURATION = 2000; // 2 seconds for scanner animation

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (progressControl) {
        progressControl.stop();
      }
    };
  }, [progressControl]);

  const startDeployment = () => {
    setIsDeploying(true);
    setVisibleSteps(0);
    setLastStepComplete(false);
    setDisplayProgress(0);
    setShowScanner(true);

    // Hide scanner after animation completes
    setTimeout(() => {
      setShowScanner(false);
    }, SCANNER_DURATION);

    // Step 1 appears after scanner completes
    setTimeout(() => {
      setVisibleSteps(1);
      const ctrl = animate(0, 33, {
        duration: 0.1,
        onUpdate: (latest) => setDisplayProgress(Math.round(latest)),
      });
      setProgressControl(ctrl);
    }, SCANNER_DURATION);

    // Step 2 appears 800ms after step 1
    setTimeout(() => {
      setVisibleSteps(2);
      const ctrl = animate(displayProgress, 66, {
        duration: 0.1,
        onUpdate: (latest) => setDisplayProgress(Math.round(latest)),
      });
      setProgressControl(ctrl);
    }, SCANNER_DURATION + 800);

    // Step 3 appears 1600ms after step 1, then completes after 5 seconds
    setTimeout(() => {
      setVisibleSteps(3);
      const ctrl = animate(displayProgress, 100, {
        duration: 0.3,
        onUpdate: (latest) => setDisplayProgress(Math.round(latest)),
      });
      setProgressControl(ctrl);

      // Mark last step as complete after 5 seconds
      setTimeout(() => {
        setLastStepComplete(true);
      }, 5000);
    }, SCANNER_DURATION + 1600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startDeployment();
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-sm w-full relative">
        <AnimatePresence>
          {isDeploying && (
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0 }}
              transition={{
                clipPath: {
                  duration: SCANNER_DURATION / 1000,
                  ease: "easeInOut",
                },
              }}
              className="absolute -inset-0.5 z-10 bg-background border ring-border rounded-md flex flex-col gap-5 items-center justify-center overflow-hidden"
            >
              {/* Scanner line animation */}
              <AnimatePresence>
                {showScanner && (
                  <motion.div
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: SCANNER_DURATION / 1000,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 right-0 h-[2px] bg-orange-400 z-20 pointer-events-none"
                    style={{
                      boxShadow:
                        "0 0 20px rgba(249, 115, 22, 0.8), 0 0 40px rgba(249, 115, 22, 0.4), 0 0 60px rgba(249, 115, 22, 0.2)",
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="w-20">
                <CFlogo />
              </div>
              <h2 className="text-xl font-semibold">Deploying...</h2>
              <div className="flex flex-col gap-3 min-h-[80px]">
                <AnimatePresence mode="popLayout">
                  {progressWorks.slice(0, visibleSteps).map((step, index) => (
                    <motion.div
                      key={step.label}
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center gap-2"
                    >
                      {index === 2 && !lastStepComplete ? (
                        <motion.div
                          className="size-4 rounded-full border-2 border-orange-400 border-t-transparent"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ) : (
                        <CheckIcon />
                      )}
                      <span className="text-xs font-light tracking-wide">
                        {step.label}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <Progress value={displayProgress} className="w-[60%]" />
              <div className="font-mono text-sm ring-1 px-3 py-1 rounded-sm ring-border bg-foreground/5 text-neutral-400">
                using motion.dev & tinyui.agency 💪
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col z-0 gap-5 ring-1 ring-border px-5 py-10 rounded-md"
        >
          <FieldGroup>
            <FieldSet>
              <FieldLegend className="text-2xl! font-medium dark:text-neutral-50">
                <div className="w-20 mb-5">
                  <CFlogo />
                </div>
                Create a Worker
              </FieldLegend>
              <FieldDescription className="text-sm font-normal dark:text-neutral-500">
                Deploy serverless code instantly across cloudflare global
                network.
              </FieldDescription>
            </FieldSet>
          </FieldGroup>
          <FieldGroup className="gap-5">
            <Field>
              <FieldLabel
                htmlFor="api-name-uv3"
                className="text-sm dark:text-neutral-300 font-normal"
              >
                Name
              </FieldLabel>

              <motion.div
                className="relative group isolate"
                onFocus={() => setActiveField("name")}
                onBlur={() => setActiveField(null)}
              >
                {/* 1. The Dots (Background Layer) */}
                <div
                  className="absolute -inset-x-20 -inset-y-12 pointer-events-none z-0! opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 mask-[radial-gradient(ellipse_at_center,white,transparent_75%)]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #fb923c 1px, transparent 0)`,
                    backgroundSize: "6px 6px",
                  }}
                />
                {/* 2. The Input Group (Middle Layer)  */}
                <InputGroup className="relative bg-background! z-0 group-focus-within:ring-0!">
                  {" "}
                  <InputGroupInput className="text-sm " placeholder="my-api" />
                  <InputGroupAddon
                    align="inline-end"
                    className="bg-background px-2 rounded-r-md"
                  >
                    .workers.dev
                  </InputGroupAddon>
                </InputGroup>
                {/* 3. The Glow/Ring (Top Layer)  */}
                {activeField === "name" && (
                  <motion.div
                    layoutId="glow-ring"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="absolute animate-pulse -inset-0.5 z-10 rounded-lg pointer-events-none ring-1 ring-offset-3 ring-offset-background ring-orange-300! shadow-[0_0_20px_rgba(249,115,22,0.4),0_0_40px_rgba(249,115,22,0.2),inset_0_0_20px_rgba(249,115,22,0.1)]"
                  />
                )}
              </motion.div>
            </Field>
            <Field>
              <FieldLabel
                htmlFor="starter-template-3d3e"
                className="text-sm font-normal dark:text-neutral-300"
              >
                Starter template
              </FieldLabel>
              <motion.div
                className="relative group isolate"
                onFocus={() => setActiveField("template")}
                onBlur={() => setActiveField(null)}
              >
                {/* 1. The Dots (Background Layer) */}
                <div
                  className="absolute -inset-x-20 -inset-y-12 pointer-events-none z-0! opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 mask-[radial-gradient(ellipse_at_center,white,transparent_75%)]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #fb923c 1px, transparent 0)`,
                    backgroundSize: "6px 6px",
                  }}
                />

                {/* 2. The Input Group (Middle Layer)  */}
                <Select items={templates}>
                  <SelectTrigger className="w-full relative bg-background! z-0 group-focus-within:ring-0!">
                    <SelectValue className="text-sm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {templates.map((item) => (
                        <SelectItem
                          key={item.value}
                          value={item.value}
                          className="text-sm"
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* 3. The Glow/Ring (Top Layer)  */}
                {activeField === "template" && (
                  <motion.div
                    layoutId="glow-ring"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="absolute -inset-0.5 z-20! animate-pulse rounded-lg pointer-events-none ring-1 ring-offset-3 ring-offset-background ring-orange-300! shadow-[0_0_20px_rgba(249,115,22,0.4),0_0_40px_rgba(249,115,22,0.2),inset_0_0_20px_rgba(249,115,22,0.1)]"
                  />
                )}
              </motion.div>
            </Field>
            <Field>
              <FieldLabel
                htmlFor="api-name-uv3"
                className="text-sm dark:text-neutral-300 font-normal"
              >
                Compatibility date
              </FieldLabel>
              <motion.div
                className="relative group isolate"
                onFocus={() => setActiveField("compatibility")}
                onBlur={() => setActiveField(null)}
              >
                {/* 1. The Dots (Background Layer) */}
                <div
                  className="absolute -inset-x-20 -inset-y-12 pointer-events-none z-0! opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 mask-[radial-gradient(ellipse_at_center,white,transparent_75%)]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #fb923c 1px, transparent 0)`,
                    backgroundSize: "6px 6px",
                  }}
                />
                {/* 2. The Input Group (Middle Layer)  */}
                <InputGroup className="w-full relative bg-background! z-10! group-focus-within:ring-0!">
                  <InputGroupInput
                    className="text-sm"
                    placeholder="E.g. 2024-01-01"
                  />
                </InputGroup>
                {/* 3. The Glow/Ring (Top Layer)  */}
                {activeField === "compatibility" && (
                  <motion.div
                    layoutId="glow-ring"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="absolute animate-pulse -inset-0.5 z-20! rounded-lg pointer-events-none ring-1 ring-offset-3 ring-offset-background ring-orange-300! shadow-[0_0_20px_rgba(249,115,22,0.4),0_0_40px_rgba(249,115,22,0.2),inset_0_0_20px_rgba(249,115,22,0.1)]"
                  />
                )}
              </motion.div>
            </Field>
            <Field>
              <motion.div
                className="relative group isolate"
                onFocus={() => setActiveField("submit")}
                onBlur={() => setActiveField(null)}
              >
                {/* 1. The Dots (Background Layer) */}
                <div
                  className="absolute -inset-x-20 -inset-y-12 pointer-events-none z-0! opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 mask-[radial-gradient(ellipse_at_center,white,transparent_75%)]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #fb923c 1px, transparent 0)`,
                    backgroundSize: "6px 6px",
                  }}
                />
                {/* 2. The Submit Button (Middle Layer)  */}
                <Button
                  type="submit"
                  className="bg-orange-400 hover:bg-orange-500 text-neutral-50  w-full relative z-0 group-focus-within:ring-0!"
                >
                  Deploy
                </Button>
                {/* 3. The Glow/Ring (Top Layer)  */}
                {activeField === "submit" && (
                  <motion.div
                    layoutId="glow-ring"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="absolute -inset-0.5 z-10 animate-pulse rounded-lg pointer-events-none ring-1 ring-offset-3 ring-offset-background ring-orange-300! shadow-[0_0_20px_rgba(249,115,22,0.4),0_0_40px_rgba(249,115,22,0.2),inset_0_0_20px_rgba(249,115,22,0.1)]"
                  />
                )}
              </motion.div>
            </Field>
          </FieldGroup>
          <div className="mx-auto text-xs font-normal dark:text-neutral-500">
            Or connect a <span className="text-orange-400">Git repository</span>{" "}
            for CI/CD
          </div>
        </form>
      </div>
    </div>
  );
}

export const CFlogo = () => {
  return (
    <svg viewBox="0 0 256 116" preserveAspectRatio="xMidYMid">
      <title>Cloudflare Logo</title>
      <path
        fill="#FFF"
        d="m202.357 49.394-5.311-2.124C172.085 103.434 72.786 69.289 66.81 85.997c-.996 11.286 54.227 2.146 93.706 4.059 12.039.583 18.076 9.671 12.964 24.484l10.069.031c11.615-36.209 48.683-17.73 50.232-29.68-2.545-7.857-42.601 0-31.425-35.497Z"
      />
      <path
        fill="#F4811F"
        d="M176.332 108.348c1.593-5.31 1.062-10.622-1.593-13.809-2.656-3.187-6.374-5.31-11.154-5.842L71.17 87.634c-.531 0-1.062-.53-1.593-.53-.531-.532-.531-1.063 0-1.594.531-1.062 1.062-1.594 2.124-1.594l92.946-1.062c11.154-.53 22.839-9.56 27.087-20.182l5.312-13.809c0-.532.531-1.063 0-1.594C191.203 20.182 166.772 0 138.091 0 111.535 0 88.697 16.995 80.73 40.896c-5.311-3.718-11.684-5.843-19.12-5.31-12.747 1.061-22.838 11.683-24.432 24.43-.531 3.187 0 6.374.532 9.56C16.996 70.107 0 87.103 0 108.348c0 2.124 0 3.718.531 5.842 0 1.063 1.062 1.594 1.594 1.594h170.489c1.062 0 2.125-.53 2.125-1.594l1.593-5.842Z"
      />
      <path
        fill="#FAAD3F"
        d="M205.544 48.863h-2.656c-.531 0-1.062.53-1.593 1.062l-3.718 12.747c-1.593 5.31-1.062 10.623 1.594 13.809 2.655 3.187 6.373 5.31 11.153 5.843l19.652 1.062c.53 0 1.062.53 1.593.53.53.532.53 1.063 0 1.594-.531 1.063-1.062 1.594-2.125 1.594l-20.182 1.062c-11.154.53-22.838 9.56-27.087 20.182l-1.063 4.78c-.531.532 0 1.594 1.063 1.594h70.108c1.062 0 1.593-.531 1.593-1.593 1.062-4.25 2.124-9.03 2.124-13.81 0-27.618-22.838-50.456-50.456-50.456"
      />
    </svg>
  );
};

export const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="size-4 text-green-500"
    >
      <title>Check</title>
      <path
        fillRule="evenodd"
        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
