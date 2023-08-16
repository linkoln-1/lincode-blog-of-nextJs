import React from 'react';
import styles from '../../styles/blogs.module.scss'
import {Blogs_data} from "@/data_view/Blogs";
import {Blog} from "@/components/Blogs/Blog";

export const Blogs: React.FC = () => {
    return (
        <div className={styles.container}>
            {
                Blogs_data.map((item) => {
                    return <Blog item={item} key={item.id}/>
                })
            }
        </div>
    );
}
