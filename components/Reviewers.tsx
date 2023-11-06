'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Reviewers.module.css';
import { GoCodeReview } from 'react-icons/go';
import Image from 'next/image';
import avatar from '../public/pngegg.png';
import { review } from '@/types/models';
import { useRouter } from 'next/navigation';

export default function Reviewers() {
    const [counter, setCounter] = useState<number>(0);
    const router = useRouter();
    const reviews: review[] = [
        {
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quam quaerat sed tempore illo optio alias! Ad totam nihil error? quaerat sed tempore illo optio alias! Ad totam nihil error.',
            author: 'Davcon Next'
        },
        {
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quam quaerat sed tempore illo optio alias! Ad totam nihil error?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quam quaerat sed.',
            author: 'Davcon js'
        },
        {
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quam quaerat sed tempore illo optio alias! Ad totam nihil error?',
            author: 'Davcon css'
        },
        {
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quam quaerat sed tempore illo optio alias! Ad totam nihil error?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus?',
            author: 'Davcon Node'
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            counter === 3 ? setCounter(0) : setCounter(counter + 1);
        }, 4000);
    }, [counter]);

    return (
        <div className={`${styles.reviewer_container} reviewer`}>
            <div className={styles.layer}></div>
            <div className={styles.review_content}>
                <div className={styles.reviewer_left}>
                    {reviews &&
                        <div>
                            <Image className={styles.reviewer_image} src={avatar} height={75} width={75} alt='reviewer'></Image>
                            <p className={styles.reviewer_left_text}>{reviews[counter].review}</p>
                            <q className={styles.reviewer_left_quote}>-{reviews[counter].author}</q>
                        </div>
                    }
                </div>
                <div className={styles.reviewer_right}>
                    <span className={styles.reviewer_right_logo}><GoCodeReview /></span>
                    <p className={styles.reviewer_right_text}>Golden words of <q className={styles.reviewer_right_quots}>Affburg Dev</q></p>
                    <p className={styles.reviewer_right_text_detasils}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro. Doloribus aperiam neque recusandae est quis ex, accusamus repellat. Facilis.</p>
                    <button
                        onClick={() => router.push('/allReviews')}
                        className={styles.all_review_btn}>Show all reviews</button>
                </div>
            </div>
        </div>
    )
}
