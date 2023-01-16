import { AnimatePresence, motion } from "framer-motion";
import { Product } from "../index";

type SidebarProps = {
  showNav: boolean;
};

const Sidebar = ({ showNav }: SidebarProps) => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100vw" }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          className="lg:hidden sidebar h-[46.875rem] bg-white md:h-[20rem]"
        >
          <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            className="mt-12 grid gap-16 md:grid-cols-3 md:items-center lg:hidden mobile_nav"
          >
            <motion.div variants={itemVariants}>
              <Product
                imagePath="/images/image-header-mobile.png"
                title="headphones"
                style="h-[9rem]"
                content="h-[9rem]"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Product
                imagePath="/images/image-speaker-mobile.png"
                title="speakers"
                style="h-[9rem]"
                content="h-[9rem]"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Product
                imagePath="/images/image-earbud-mobile.png"
                title="earphones"
                style="h-[9rem]"
                content="h-[9rem]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Sidebar;
