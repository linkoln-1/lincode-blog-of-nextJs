import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Sidebar.module.scss";

interface SidebarIconProps {
  icon: ReactNode;
  title: string;
  open: boolean;
}
export const SidebarIcon: React.FC<SidebarIconProps> = ({
  icon,
  title,
  open,
}) => {
  const subHeading = {
    true: {
      opacity: 1,
    },
    false: {
      opacity: 0,
      transition: {
        delay: 0.3,
      },
      display: "none",
    },
  };
  return (
    <motion.div className={styles.icon_container}>
      <motion.div
        whileHover={{
          backgroundColor: "rgba(1, 23, 81, 0.9)",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur(5.5px)",
          WebkitBackdropFilter: "blur(5.5px)",
        }}
      >
        {icon}
      </motion.div>
      <motion.span
        variants={subHeading}
        initial={open ? "true" : "false"}
        animate={open ? "true" : "false"}
      >
        {title}
      </motion.span>
    </motion.div>
  );
};
