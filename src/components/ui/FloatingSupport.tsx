"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, ChevronUp } from "lucide-react";

export function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // شماره واتساپ واقعی خود را اینجا قرار دهید
  const whatsappNumber = "989123456789";
  const phoneNumber = "+982100000000";

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-3">
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="flex flex-col gap-3 mb-2"
            >
              {/* واتساپ */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=سلام،%20من%20در%20مورد%20تحلیل%20بیومکانیک%20سوال%20دارم.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-green-500 text-white rounded-2xl shadow-lg hover:bg-green-600 transition-all group"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-bold hidden group-hover:block whitespace-nowrap">
                  پیام در واتساپ
                </span>
              </a>
              
              {/* تماس */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3 px-5 py-3 bg-blue-500 text-white rounded-2xl shadow-lg hover:bg-blue-600 transition-all group"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm font-bold hidden group-hover:block whitespace-nowrap">
                  تماس مستقیم
                </span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all ${
            isOpen 
              ? "bg-slate-800 text-white rotate-45" 
              : "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
          }`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.button>

      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white border-2 border-gray-200 rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all"
            aria-label="بازگشت به بالا"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
