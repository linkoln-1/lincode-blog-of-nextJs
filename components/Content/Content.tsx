import React from 'react';
import styles from '../../styles/content.module.scss'
import {Header} from "@/components/Header";
import {Blogs} from "@/components/Blogs/Blogs";

export const Content: React.FC = () => {
    return (
        <div className={styles.content_container}>
            <Header />
            <Blogs />
        </div>
    );
}
