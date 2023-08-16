import React from 'react';
import styles from '../styles/content.module.scss'

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_title}>
                <h2>LINCODE BLOG</h2>
            </div>

        </div>
    );
}
