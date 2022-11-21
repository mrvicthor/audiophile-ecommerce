import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

type SidebarProps = {
  showNav: boolean;
};

const Sidebar = ({ showNav }: SidebarProps) => {
  const router = useRouter();
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

  const menu = [
    { id: 1, title: "home", path: "/" },
    { id: 2, title: "headphones", path: "/headphones" },
    { id: 3, title: "speakers", path: "/speakers" },
    { id: 4, title: "earphones", path: "/earphones" },
  ];

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
          className="lg:hidden sidebar"
        >
          <motion.ul
            className="lg:hidden  mobile_nav"
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {menu.map((item) => (
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={item.id}
                className={`${
                  router.pathname === item.path ? "active" : "null"
                } text-xl font-semibold uppercase tracking-wider text-black hover:text-[#d87d4a] cursor-pointer my-4`}
              >
                <Link href={item.title === "home" ? "/" : item.title}>
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Sidebar;
