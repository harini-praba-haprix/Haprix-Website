import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

const ScrollButton = () => {
  const [showUp, setShowUp] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowUp(window.scrollY > 400);
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      setAtBottom(scrolledToBottom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {showUp && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-gold-glow transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!atBottom && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToBottom}
            className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground border border-border flex items-center justify-center shadow-lg hover:border-primary/50 transition-colors"
            aria-label="Scroll to bottom"
          >
            <ArrowDown size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollButton;
