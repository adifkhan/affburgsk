'use client'
import React from 'react'
import styles from '@/styles/AllReviews.module.css'
import { Review } from '@/types/models';
import Image from 'next/image';
import avatar from '../../public/pngegg.png';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';


export default function AllReviews() {
    const reviews: Review[] = [
        {
            _id: '1',
            image: 'https://i.ibb.co/98hMwXV/crypto.jpg',
            date: 'November 10 2023',
            name: 'Decoding',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',

        },
        {
            _id: '2',
            image: 'https://i.ibb.co/tcZHf1m/decode.jpg',
            date: 'November 10 2023',
            name: 'Crypto',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',
        },
        {
            _id: '3',
            image: 'https://i.ibb.co/SRmTTCy/news.jpg',
            date: 'November 10 2023',
            name: 'An A',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',

        },
        {
            _id: '4',
            image: 'https://i.ibb.co/hXDC8R3/social-News.jpg',
            date: 'November 10 2023',
            name: 'Former',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',

        },
        {
            _id: '5',
            image: 'https://i.ibb.co/SRmTTCy/news.jpg',
            date: 'November 10 2023',
            name: 'Former SoftBank',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',

        },
        {
            _id: '6',
            image: 'https://i.ibb.co/tcZHf1m/decode.jpg',
            date: 'November 10 2023',
            name: 'Crypto',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis debitis tempora soluta, aperiam sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum doloremque praesentium, aut hic rem neque amet asperiores veritatis eius.',

        },

    ];
    const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: 500,
        },
    });
    return (
        <div className={styles.all_review_container}>
            {
                reviews.map((review, index) => (
                    <CustomWidthTooltip key={index}
                        placement="top-end"
                        title={review.description}>
                        <div className={styles.review_container}>
                            <div className={styles.review_info}>
                                <Image className={styles.reviewer_image} src={avatar} height={75} width={75} alt='reviewer'></Image>
                                <h3 className={styles.review_name}>{review.name}</h3>
                                <p className={styles.review_date}>{review.date}</p>
                                <p className={styles.review_text}>{review.description.slice(0, 150) + '...'}</p>
                            </div>
                        </div>
                    </CustomWidthTooltip>

                ))
            }
        </div>
    )
}
