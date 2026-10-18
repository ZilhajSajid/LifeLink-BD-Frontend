"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Heart, Droplet, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Blood Requests", value: "1,250+", icon: Droplet },
  { label: "Registered Donors", value: "2,800+", icon: Users },
  { label: "Hospital Network", value: "120+", icon: Building2 },
  { label: "Lives Saved", value: "500+", icon: Heart },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const entrance = shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 };

  const entranceTransition = {
    duration: shouldReduceMotion ? 0 : 0.6,
    ease: "easeOut" as const,
  };

  return (
    <section className="overflow-hidden bg-gradient-to-br from-red-50 via-white to-rose-50 dark:from-slate-950 dark:via-background dark:to-rose-950/30">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Hero content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-950 dark:text-red-300"
            >
              <Heart className="size-4 fill-red-600" />
              Donate Blood <span>·</span> Save Lives
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl"
            >
              Every Drop Counts
              <span className="mt-2 block text-red-600 dark:text-red-400">
                Save Lives Together
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg"
            >
              LifeLink BD connects generous blood donors with people in need.
              Join our community and become part of something bigger—because
              together, we can save lives.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="h-12 w-full rounded-full bg-red-600 px-7 text-base font-semibold text-white shadow-md shadow-red-600/20 transition-colors hover:bg-red-700 sm:w-auto"
                >
                  <Link href="/become-donor" className="gap-2">
                    Become a Donor
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-full border-red-200 bg-background px-7 text-base font-semibold text-red-700 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-800 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950/50 sm:w-auto"
                >
                  <Link href="/request-blood" className="gap-2">
                    Request Blood
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex -space-x-3">
                {["A", "B", "O", "AB"].map((group, index) => (
                  <motion.div
                    key={group}
                    initial={entrance}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      ...entranceTransition,
                      delay: shouldReduceMotion ? 0 : 0.65 + index * 0.1,
                    }}
                    className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-red-100 text-xs font-bold text-red-700 dark:border-slate-950 dark:bg-red-950 dark:text-red-300"
                  >
                    {group}
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300">
                Every blood group matters.
                <br />
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  Every donor makes a difference.
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* Animated hero illustration */}
          <motion.div
            initial={entrance}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...entranceTransition,
              delay: shouldReduceMotion ? 0 : 0.3,
            }}
            className="relative mx-auto flex min-h-[320px] w-full max-w-lg items-center justify-center sm:min-h-[440px]"
          >
            <motion.div
              animate={
                shouldReduceMotion ? { scale: 1 } : { scale: [1, 1.06, 1] }
              }
              transition={{
                duration: 5,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-8 rounded-full bg-red-100/70 blur-2xl dark:bg-red-900/30"
            />

            <motion.div
              animate={shouldReduceMotion ? { y: 0 } : { y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="relative flex size-64 items-center justify-center rounded-full border border-red-100 bg-background shadow-xl shadow-red-100/60 dark:border-red-900/60 dark:shadow-red-950/40 sm:size-80"
            >
              <div className="flex size-44 items-center justify-center rounded-full bg-red-50 dark:bg-red-950/50 sm:size-56">
                <motion.div
                  animate={
                    shouldReduceMotion ? { scale: 1 } : { scale: [1, 1.06, 1] }
                  }
                  transition={{
                    duration: 2.5,
                    repeat: shouldReduceMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Droplet className="size-32 fill-red-600 text-red-600 sm:size-40" />
                </motion.div>
                <Heart className="absolute size-12 fill-white text-white sm:size-14" />
              </div>
            </motion.div>

            {/* Floating card: top */}
            <motion.div
              animate={shouldReduceMotion ? { y: 0 } : { y: [0, -7, 0] }}
              transition={{
                duration: 3.5,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute right-0 top-10 rounded-2xl border border-red-100 bg-background p-4 shadow-lg dark:border-red-900/60 sm:right-2"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-red-100 p-2 text-red-600 dark:bg-red-950 dark:text-red-400">
                  <Heart className="size-5 fill-red-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">
                    Be a Lifesaver
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Your donation matters
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating card: bottom */}
            <motion.div
              animate={shouldReduceMotion ? { y: 0 } : { y: [0, 7, 0] }}
              transition={{
                duration: 4,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-8 left-0 rounded-2xl border border-red-100 bg-background p-4 shadow-lg dark:border-red-900/60"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                One donation can help
              </p>
              <p className="text-xl font-bold text-red-600 dark:text-red-400">
                Save up to 3 lives
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-4 rounded-3xl border border-red-100 bg-background p-6 shadow-sm dark:border-red-900/50 md:grid-cols-4 md:gap-6 md:p-8"
        >
          {stats.map(({ label, value, icon: Icon }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="flex items-center gap-3 rounded-xl"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400">
                <Icon className="size-5" />
              </div>

              <div>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
