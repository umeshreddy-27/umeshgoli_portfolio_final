export const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeInOut" } },
  exit: { opacity: 0, y: -60, transition: { duration: 0.6, ease: "easeOut" } },
};
