'use client'
import { Blog } from '@/types/models';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blogs.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Blogs() {
    const allBlogs: Blog[] = [
        {
            _id: '1',
            image: 'https://i.ibb.co/98hMwXV/crypto.jpg',
            date: 'November 10 2023',
            name: 'Decoding Dunzo’s deepening crisis in five stories',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',

        },
        {
            _id: '2',
            image: 'https://i.ibb.co/tcZHf1m/decode.jpg',
            date: 'November 10 2023',
            name: 'Crypto exchange Coinbase gets Singapore payments licence',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',

        },
        {
            _id: '3',
            image: 'https://i.ibb.co/SRmTTCy/news.jpg',
            date: 'November 10 2023',
            name: 'An Amitabh Bachchan advert has landed Flipkart in big trouble',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',

        },
        {
            _id: '4',
            image: 'https://i.ibb.co/hXDC8R3/social-News.jpg',
            date: 'November 10 2023',
            name: 'Former SoftBank executive Akshay Naheta’s DeFi startup DTR launches UAE',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',

        },
        {
            _id: '5',
            image: 'https://i.ibb.co/SRmTTCy/news.jpg',
            date: 'November 10 2023',
            name: 'Former SoftBank executive Akshay Naheta’s DeFi startup DTR launches UAE',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',

        },
        {
            _id: '6',
            image: 'https://i.ibb.co/hXDC8R3/social-News.jpg',
            date: 'November 10 2023',
            name: 'Former SoftBank executive Akshay Naheta’s DeFi startup DTR launches UAE',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',

        },

    ];
    const showBlogs = allBlogs.slice(-5).reverse();
    const [detailedBlog, setDetailedBlog] = useState<Blog>(showBlogs[0]);

    const handleDetailedBlog = (blog: Blog): void => {
        setDetailedBlog(blog);
    }
    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //         gsap.from(".singleblog", {
    //             x: 500,
    //             opacity: 0,
    //             ease: "none",
    //             stagger: .3,
    //             scrollTrigger: {
    //                 trigger: ".blogc",
    //                 start: "top 90%",
    //                 end: "top 40%",
    //                 scrub: 3,
    //             },
    //         });
    //     });
    //     return () => ctx.revert();
    // }, [])
    return (
        <div id='blogs' className={`${styles.blog__content} blogc`}>
            <div className={styles.detailed__blog}>
                <div className={styles.blog__img__container}>
                    <Image quality={100} height={500} width={500} src={detailedBlog.image} alt="" />
                </div>
                <p className={styles.detailed_blog_date}>{detailedBlog.date}</p>
                <h3 className={styles.detailed_blog_date_blog_name}>{detailedBlog.name}</h3>
                <p className={styles.detailed_text}>{detailedBlog.description}</p>
                <button>See More Details</button>
            </div>
            <div className={styles.all__blogs}>
                {
                    showBlogs?.map((blog, index) => (
                        <div
                            key={index}
                            onClick={() => handleDetailedBlog(blog)}
                            className={`${detailedBlog._id === blog._id ? styles.single__blog__container__right_active : styles.single__blog__container__right_deactive} singleblog`}
                        >
                            <div className={styles.blog__content__img__right}>
                                <Image quality={100} height={200} width={200} src={blog.image} alt="" />
                            </div>
                            <div className={styles.blog__content__info__right}>
                                <p className={styles.text}>{blog.date}</p>
                                <h3 className={styles.blog_name}>{blog.name}</h3>
                                <p className={styles.text}>{blog.description.slice(0, 20) + '...'}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
