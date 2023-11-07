'use client';

import { increment } from '@/app/GlobalRedux/features/counte-slice';
import { AppDispatch, useAppSelector } from '@/app/GlobalRedux/store';
import React from 'react'
import { useDispatch } from 'react-redux';

export default function TestPage() {
    const dispatch = useDispatch<AppDispatch>();
    const countValue = useAppSelector((state) => state.counterReducer.value);

    console.log(countValue)
    return (
        <div>
            <button
                // className={styles.button}
                onClick={() => dispatch(increment())}
            >Increment</button>
            <span>{countValue}</span>
        </div>
    )
}
