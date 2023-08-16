import React from 'react';
import styles from '../../styles/blogs.module.scss'
interface BlogProps {
    item: {
        id: number
        title: string
        blogs_text: string
    }
}

export const Blog: React.FC<BlogProps> = ({ item }) => {
    return (
        <div className={styles.blog}>
            <h2>{item.title}</h2>

            <p>{item.blogs_text}</p>
        </div>
    );
}
