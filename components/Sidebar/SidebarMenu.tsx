"use client";
import React, { FC, useState } from "react";
import styles from "../../styles/Sidebar.module.scss";
import { title_menu } from "@/data_view/title_menu";
import MailIcon from "@mui/icons-material/Mail";
import { motion } from "framer-motion";
import { SidebarIcon } from "@/components/Sidebar/SidebarIcon";

export const SidebarMenu: FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const handleToggle = () => {
    setOpen(!open);
    console.log(open);
  };
  const sideContainerVariant = {
    true: {
      width: "100%",
    },
    false: {
      width: "20%",
      transition: {
        delay: 0.3,
      },
    },
  };

  const iconVariant = {
    true: {
      transition: {
        delay: 0.6,
      },
      alignSelf: "flex-end",
    },
    false: {
      transition: {
        delay: 0.6,
      },
      alignSelf: "flex-start",
      marginTop: "20px",
    },
  };
  return (
    <motion.div
      date-open={open}
      variants={sideContainerVariant}
      initial={open ? "true" : "false"}
      animate={open ? "true" : "false"}
    >
      <motion.div className={styles.sidebar}>
        <div className={styles.button_close_menu}>
          <motion.span
            layout
            onClick={handleToggle}
            initial={open ? "true" : "false"}
            animate={open ? "true" : "false"}
            className={open ? styles.sidebar_open : styles.sidebar_close}
            variants={iconVariant}
            transition={{ duration: 0.03 }}
          ></motion.span>
        </div>
        <div className={styles.title_menu}>
          <motion.ul>
            {title_menu.map((item) => {
              return (
                <motion.li
                  key={item.id}
                  whileHover={{
                    backgroundColor: "rgba(1, 23, 81, 0.9)",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur(5.5px)",
                    WebkitBackdropFilter: "blur(5.5px)",
                    borderRadius: "10px",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                >
                  <SidebarIcon
                    icon={<MailIcon />}
                    title={item.title}
                    open={open}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
};
