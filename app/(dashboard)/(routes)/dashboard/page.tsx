'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Dashboard/DashboardHome.module.css';
import { Button, IconButton, Tooltip } from '@mui/material';
import { BiDownload, BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { styled } from '@mui/material/styles';
import { Offer, PieChartData, TopCardData, transactionData } from '@/types/models';
import { FaUserPlus } from 'react-icons/fa';
import { MdMarkEmailRead, MdOutlineAccountBalanceWallet, MdPointOfSale } from 'react-icons/md';
import { RiTrafficLightFill } from 'react-icons/ri';
import { DonutChart } from '@/components/dashComponents/charts/DonutChart';
import LineChart from '@/components/dashComponents/charts/LineChart';
import { BarChartData, donutChartCampData, paiData } from '@/components/dashComponents/charts/ChartsData';
import Image from 'next/image';
// import NL from '../../../../public/dashboard.png';
import { DonutChartCamp } from '@/components/dashComponents/charts/DonutChartCamp';
import ReportByDays from '@/components/dashComponents/tables/ReportByDays';
import BarChart from '@/components/dashComponents/charts/BarChart';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const topCardsData: TopCardData[] = [
    {
        icon: <MdMarkEmailRead />,
        value: 12000,
        title: 'Emails Sent',
        chartValue: 100,
        qualityLowHigh: 10,
        color: '#383B8C'
    },
    {
        icon: <MdPointOfSale />,
        value: 12000,
        title: 'Sales Obtained',
        chartValue: 100,
        qualityLowHigh: 10,
        color: '#383B8C'
    },
    {
        icon: <FaUserPlus />,
        value: 12000,
        title: 'New Client',
        chartValue: 100,
        qualityLowHigh: 10,
        color: '#383B8C'
    },
    {
        icon: <RiTrafficLightFill />,
        value: 12000,
        title: 'Traffic Received',
        chartValue: 100,
        qualityLowHigh: 10,
        color: '#383B8C'
    }
]

let allOffers: Offer[] = [
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, labore.',
        flag: '',
        countryName: 'NL',
        category: 'Social',
        price: '2.00',
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, labore.',
        flag: '',
        countryName: 'NL',
        category: 'Social',
        price: '4.00',
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, labore.',
        flag: '',
        countryName: 'NL',
        category: 'Social',
        price: '5.00',
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, labore.',
        flag: '',
        countryName: 'NL',
        category: 'Social',
        price: '8.00',
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, labore.',
        flag: '',
        countryName: 'NL',
        category: 'Social',
        price: '8.00',
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, labore.',
        flag: '',
        countryName: 'NL',
        category: 'Social',
        price: '2.00',
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, labore.',
        flag: '',
        countryName: 'NL',
        category: 'Social',
        price: '5.10',
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, labore.',
        flag: '',
        countryName: 'NL',
        category: 'Social',
        price: '20.00',
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, labore.',
        flag: '',
        countryName: 'NL',
        category: 'Social',
        price: '12.00',
    },
]
let allTransactionReports: transactionData[] = [
    {
        id: 'as34asdf',
        name: 'Demo name',
        date: '21-02-2023',
        amount: '563'
    },
    {
        id: 'as34a1sdf',
        name: 'Demo name',
        date: '21-02-2023',
        amount: '856'
    },
    {
        id: 'as34as2df',
        name: 'Demo name',
        date: '21-02-2023',
        amount: '154'
    },
    {
        id: 'as343asdf',
        name: 'Demo name',
        date: '21-02-2023',
        amount: '890'
    },
    {
        id: 'as34a4sdf',
        name: 'Demo name',
        date: '21-02-2023',
        amount: '768'
    },
    {
        id: 'as3475asdf',
        name: 'Demo name',
        date: '21-02-2023',
        amount: '657'
    },
    {
        id: 'as348asdf',
        name: 'Demo name',
        date: '21-02-2023',
        amount: '345'
    },
];

export default function DashboardHomePage() {
    const [data, setData] = useState(allOffers);


    function handleCardPercentage(paiData: PieChartData[]) {
        let prev = 0;
        let curr = 0;
        let per = 0;
        paiData.forEach((element) => {
            if (element.id === 'prev') {
                prev = element.value
            }
            else if (element.id === 'current') {
                curr = element.value
            }
        });
        per = (curr - prev) / prev * 100;
        return per.toFixed(2);
    }

    function handleLtoH() {
        let sortedOffer = [...allOffers].sort((a, b) => parseInt(a.price) - parseInt(b.price));
        setData(sortedOffer);
    }

    function handleHtoL() {
        let sortedOffer = [...allOffers].sort((a, b) => parseInt(b.price) - parseInt(a.price));
        setData(sortedOffer);
    }

    return (
        <div>
            <div className={styles.welcome_cotaianer}>
                {/* <div className={styles.welcome_cotaianer_left}>
                    <h2>Dashboard</h2>
                    <p>Welcome to your dashboard</p>
                </div> */}
                <div className={styles.balance_container}>
                    <div className={styles.balance_container_left}>
                        <span><MdOutlineAccountBalanceWallet /></span>
                        <h1>Balance</h1>
                    </div>
                    <div className={styles.balance_container_right}>
                        <p>$15,000.02</p>
                    </div>
                </div>
                <div className={styles.welcome_cotaianer_right}>
                    <Button sx={{
                        bgcolor: '#383b8c', fontSize: '.7rem', px: '15px', py: '8px', letterSpacing: '.1ch', fontFamily: 'Dosis', '&:hover': {
                            bgcolor: '#36a689', boxShadow: '1px 5px 3px -4px rgba(158,158,158,1)',

                        }
                    }} component="label" variant="contained" startIcon={<BiDownload />}>
                        Download Report
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </div>
            </div>
            <div className={styles.top_cards_container}>
                {
                    topCardsData.map((data: TopCardData, index: number) =>
                        <div
                            key={index}
                            style={{ backgroundColor: `${data.color}` }}
                            className={styles.single_top_card_container}>
                            <div className={styles.single_top_card_left}>
                                <span>{data.icon}</span>
                                <h1>{data.value}</h1>
                                <p>{data.title}</p>
                            </div>
                            <div className={styles.single_top_card_right}>
                                <div className={styles.single_top_card_right_chart}>
                                    <DonutChart data={paiData[index]} />
                                </div>
                                <p>{handleCardPercentage(paiData[index])}%</p>
                            </div>
                        </div>
                    )}
            </div>
            <div className={styles.dashboard_middle_container}>
                <div className={styles.dashboard_middle_container_left}>
                    <div className={styles.dashboard_middle_container_left_top_info}>
                        <span className='flex flex-col gap-y-1'>
                            <h2>Recvenue Generated</h2>
                            <h1>$12,500.88</h1>
                        </span>
                        <Button sx={{
                            px: '15px', py: '8px', color: '#36a689',
                        }} component="label">
                            <BiDownload size='20px' />
                            <VisuallyHiddenInput type="file" />
                        </Button>
                    </div>
                    <div className={styles.lineChart_container}>
                        <LineChart />
                    </div>
                </div>
                <div className={styles.dashboard_middle_container_right}>
                    <div className={styles.best_offer_heading}>
                        <h1>Best Offers</h1>
                        <div className={styles.best_offer_heading_btns}>
                            <Tooltip
                                onClick={handleLtoH}
                                title="Low to High"
                                placement="top">
                                <IconButton
                                    sx={{ color: 'lightGrey' }}>
                                    <BiSolidDownArrow size={15} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip
                                onClick={handleHtoL}
                                title="High to Low"
                                placement="top">
                                <IconButton sx={{ color: 'lightGrey' }}>
                                    <BiSolidUpArrow size={15} />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    <div className={styles.allOffer_container}>
                        {
                            data.map((offer: Offer, index: number) =>
                                <div
                                    key={index}
                                    className={styles.single_offer}>
                                    <h2>{offer.title.slice(0, 25) + '...'}</h2>
                                    <div className={styles.offer_image}>
                                        {/* <Image src={NL} width={200} height={200} alt='flag' /> */}
                                    </div>
                                    <span>{offer.countryName}</span>
                                    <span>{offer.category}</span>
                                    <span className={styles.price_container}>${(offer.price)}</span>
                                    <button className={styles.offer_btn}>Achieve</button>
                                </div>
                            )
                        }
                        <button className={styles.seeAllOffers_btn}>See All Offers</button>
                    </div>
                </div>

            </div>
            <div className={styles.report_by_days}>
                <ReportByDays />
            </div>
            <div className={styles.dashboard_bottom_container}>
                <div className={styles.dashboard_bottom_container_left}>
                    <h3>Campaign</h3>
                    <div className={styles.dashboard_bottom_container_left_chart}>
                        <DonutChartCamp data={donutChartCampData} />
                    </div>
                    <div className={styles.dashboard_bottom_container_left_chart_info}>
                        <h2>$32,345.56 revenue generated</h2>
                        <p>Include extra misc expenditures ans costs</p>
                    </div>
                </div>
                <div className={styles.dashboard_bottom_container_middle}>
                    <h3 className={styles.dashboard_bottom_container_middle_heading}>Quantity</h3>
                    <div className={styles.dashboard_bottom_container_middle_chart}>
                        <BarChart data={BarChartData} />
                    </div>
                </div>
                <div className={styles.dashboard_bottom_container_right}>
                    <h3 className={styles.dashboard_bottom_container_right_heading}>Recent Transactions</h3>
                    <div className={styles.dashboard_bottom_container_right_contents}>
                        {allTransactionReports.map((report: transactionData, index: number) =>
                            <div
                                className={styles.dashboard_bottom_container_right_single_content}
                                key={index}>
                                <div className={styles.dashboard_bottom_container_right_single_content_info}>
                                    <h2>{report.id}</h2>
                                    <h6>{report.name}</h6>
                                </div>
                                <p>{report.date}</p>
                                <span>${report.amount}</span>
                            </div>
                        )}
                        <button className={styles.all_transaction}>All Transaction</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
