'use client'

import React, { useState } from 'react'
import { Button, IconButton, Tooltip, Box, Typography, Card } from '@mui/material';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { Offer, PieChartData, TopCardData, transactionData } from '@/types/models';
import { FaUserPlus } from 'react-icons/fa';
import { MdMarkEmailRead, MdOutlineAccountBalanceWallet, MdPointOfSale } from 'react-icons/md';
import { RiTrafficLightFill } from 'react-icons/ri';
import { DonutChart } from '@/components/dashComponents/charts/DonutChart';
import LineChart from '@/components/dashComponents/charts/LineChart';
import { BarChartData, donutChartCampData, paiData } from '@/components/dashComponents/charts/ChartsData';
import Image from 'next/image';
import NL from '../../../../public/netherLandflag.png';
import { DonutChartCamp } from '@/components/dashComponents/charts/DonutChartCamp';
import ReportByDays from '@/components/dashComponents/tables/ReportByDays';
import BarChart from '@/components/dashComponents/charts/BarChart';
import ExportButton from '@/components/ui/ExportButton';




const topCardsData: TopCardData[] = [
    {
        icon: <MdMarkEmailRead />,
        value: 12000,
        title: 'Emails Sent',
        chartValue: 100,
        qualityLowHigh: 10,
        color: '#1c2437'
    },
    {
        icon: <MdPointOfSale />,
        value: 12000,
        title: 'Sales Obtained',
        chartValue: 100,
        qualityLowHigh: 10,
        color: '#1c2437'
    },
    {
        icon: <FaUserPlus />,
        value: 12000,
        title: 'New Client',
        chartValue: 100,
        qualityLowHigh: 10,
        color: '#1c2437'
    },
    {
        icon: <RiTrafficLightFill />,
        value: 12000,
        title: 'Traffic Received',
        chartValue: 100,
        qualityLowHigh: 10,
        color: '#1c2437'
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
        <>
            <Box component={'div'} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Box
                    component={'div'}
                    sx={{
                        width: { xs: 200, md: 200, lg: 300 },
                        backgroundColor: '#1C2437',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderRadius: .5,
                        padding: { xs: 1, md: 1, xl: 1.5 },
                        color: 'whiteSmoke',
                    }}>
                    <Box
                        component={'span'}
                        sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
                        <Box component={'span'} sx={{
                            fontSize: {
                                xs: 15, md: 20, xl: 25
                            }
                        }}><MdOutlineAccountBalanceWallet /></Box>
                        <Typography variant='h2' sx={{ fontSize: { xs: 12, md: 14, xl: 16 } }}>Balance</Typography>
                    </Box>
                    <Typography variant='body2' sx={{ fontSize: { xs: 12, md: 14, xl: 16 }, color: '#ED7D31' }}>$12500.00</Typography>
                </Box>
                <ExportButton />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 5,
                    flexWrap: 'wrap',
                    gap: 1,
                }}>
                {
                    topCardsData.map((data: TopCardData, index: number) =>
                        <Card
                            key={index}
                            sx={{
                                backgroundColor: `${data.color}`,
                                display: 'flex',
                                padding: 2,
                                flex: '1 0 300px',
                                justifyContent: 'space-between',
                                // maxWidth: "300px"
                            }}>
                            <Box component={'div'}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    rowGap: 1,

                                }}>
                                <Typography variant='h2' sx={{ color: '#36a689', fontSize: 25, }}>
                                    {data.icon}
                                </Typography>
                                <Typography variant='h2' sx={{ color: 'whitesmoke', fontSize: 20 }}>
                                    {data.value}
                                </Typography>
                                <Typography variant='h5' sx={{ color: '#36a689', fontSize: 16 }}>
                                    {data.title}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', color: '#36a689' }}>
                                <Box
                                    sx={{
                                        height: 30,
                                        width: 30,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        marginTop: 2,
                                    }}>
                                    <DonutChart data={paiData[index]} />
                                </Box>
                                <Typography variant='h5' sx={{ fontSize: 16, fontStyle: 'italic' }}>{handleCardPercentage(paiData[index])}%</Typography>
                            </Box>
                        </Card>
                    )}
            </Box>
            <Box component={'div'}
                sx={{
                    height: { xs: 'fit-content', xl: 450 },
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 4,
                    flexDirection: { xs: 'column', xl: 'row' },
                    gap: 2,
                }}>
                <Card
                    sx={{
                        display: 'flex',
                        height: '100%',
                        width: { xs: '100%', xl: '65%' },
                        flexDirection: 'column',
                        padding: 3,
                        backgroundColor: '#1C2437',
                        justifyContent: 'space-between',
                        overflowX: 'scroll',
                        '&::-webkit-scrollbar': { display: 'none' },
                    }}>
                    <Box component='span'
                        sx={{
                            marginLeft: 6,
                            marginBottom: 2
                        }}>
                        <Typography sx={{ fontSize: 20, color: 'whiteSmoke', marginBottom: 1 }} variant='h1'>Recvenue Generated</Typography>
                        <Typography sx={{ fontSize: 16, color: '#36a689' }} variant='body1'>$12,500.88</Typography>
                    </Box>
                    <Box sx={{ height: 300, width: '100%', minWidth: 600, }} component={'div'}>
                        <LineChart />
                    </Box>
                </Card>
                <Box component={'div'}
                    sx={{
                        height: '100%',
                        width: { xs: '100%', lg: '35%' },
                        borderRadius: '4px',
                        overflowY: 'scroll',
                        '&::-webkit-scrollbar': { display: 'none' },
                        // '&::-webkit-scrollbar-track': { background: '#1c2437' },
                        // '&::-webkit-scrollbar-thumb': { backgroundColor: '#444c61' },
                    }}>
                    <Box component={'div'}
                        sx={{
                            color: 'whitesmoke',
                            padding: '10px 15px',
                            backgroundColor: '#383B8C',
                            position: 'sticky',
                            top: 0,
                            marginBottom: '8px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            zIndex: 10
                        }}>

                        <Typography sx={{ fontSize: 28, letterSpacing: '.1ch' }} variant='h1'>Best Offers</Typography>
                        <Box component={'div'}
                            sx={{
                                width: '15%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
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
                        </Box>
                    </Box>
                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '5px',
                            maxHeight: '450px',
                        }}>
                        {
                            data.map((offer: Offer, index: number) =>
                                <Box component={'div'}
                                    key={index}
                                    sx={{
                                        backgroundColor: '#1c2437',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        padding: '8px 10px',
                                        alignItems: 'center',
                                        fontSize: { xs: '.8rem', md: '.9rem' },
                                        cursor: 'pointer',
                                        flexWrap: 'wrap',
                                        rowGap: '6px',
                                        color: 'wHiteSmoke'
                                    }}>
                                    <h2>{offer.title.slice(0, 25) + '...'}</h2>
                                    <Box component={'div'} sx={{ width: '35px' }}>
                                        <Image src={NL} width={200} height={200} alt='flag' />
                                    </Box>
                                    <Box component={'span'}>{offer.countryName}</Box>
                                    <Box component={'span'}>{offer.category}</Box>
                                    <Box component={'span'} sx={{ fontWeight: 600, color: '#ED7D31' }}>${(offer.price)}</Box>
                                    <Button
                                        size='small'
                                        style={{
                                            backgroundColor: '#3D30A2',
                                            borderRadius: '2px',
                                            letterSpacing: '.1ch',
                                            transition: '.2s',
                                            fontSize: '.8rem',
                                            color: 'whitesmoke',
                                        }}>Get</Button>
                                </Box>
                            )
                        }
                        <Button
                            style={{
                                width: '100%',
                                color: 'whitesmoke',
                                backgroundColor: '#ED7D31',
                                textAlign: 'center',
                                fontSize: '.8rem',
                                textTransform: 'capitalize',
                                position: 'sticky',
                                bottom: 0,
                                transition: '.1s',
                            }}>See All Offers</Button>
                    </Box>
                </Box>
            </Box>
            <Box component={'div'}
                sx={{
                    width: '100%',
                    height: 'fit-content',
                    marginTop: '20px',
                }}>
                <ReportByDays />
            </Box>
            <Box component={'div'}
                sx={{
                    height: { xs: 'auto', lg: '450px' },
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    gap: 2,
                    alignItems: 'center',
                    justifyContent: { xs: 'center', lg: 'space-between' },
                    marginBottom: '50px',
                }}>
                <Box component={'div'}
                    sx={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#1c2437',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: '20px',
                    }}>

                    <Typography variant='h3'
                        sx={{ fontSize: '1rem', color: 'whiteSmoke', width: '100%' }}>Campaign</Typography>
                    <Box component={'div'} sx={{ height: '80%', }}>
                        <DonutChartCamp data={donutChartCampData} />
                    </Box>
                    <Box component={'div'}
                        sx={{
                            textAlign: 'center',
                            width: '100%',
                            marginTop: '20px',
                            color: 'whitesmoke',
                        }}>
                        <Typography
                            sx={{ color: '#36a689' }} variant='body1'>$32,345.56 revenue generated</Typography>
                        <Typography variant='body1'>Include extra misc expenditures ans costs</Typography>
                    </Box>
                </Box>
                <Box component={'div'}
                    sx={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#1c2437',
                        borderRadius: '4px',
                        padding: '20px',
                    }}>
                    <Typography variant='h3'
                        sx={{ color: 'whitesmoke', fontSize: '1rem' }}>Quantity</Typography>
                    <Box component={'div'} sx={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <BarChart data={BarChartData} />
                    </Box>
                </Box>
                <Box component={'div'}
                    sx={{
                        height: '100%',
                        width: '100%',
                        borderRadius: '4px',
                        overflowY: 'scroll',
                        '&::-webkit-scrollbar': { display: 'none' },
                    }}>
                    <Typography variant='body2'
                        sx={{
                            fontWeight: '500',
                            fontSize: '1rem',
                            backgroundColor: '#383B8C',
                            padding: '10px 20px',
                            marginBottom: '10px',
                            position: 'sticky',
                            top: 0,
                            color: 'whitesmoke',
                        }}>Recent Transactions</Typography>
                    <Box component={'div'}
                        sx={{
                            color: 'whitesmoke',
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '5px',
                            width: '100%',
                        }}>
                        {allTransactionReports.map((report: transactionData, index: number) =>
                            <Box component={'div'}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: '#1c2437',
                                    flexWrap: 'wrap',
                                    rowGap: '10px',
                                    padding: '10px 20px',
                                }}
                                key={index}>
                                <Box component={'div'}
                                    sx={{
                                        maxWidth: '30%',
                                        textAlign: 'center',
                                    }}>
                                    <Typography sx={{ fontSize: 12, color: '#36a689' }} variant='h2'>{report.id}</Typography>
                                    <Typography sx={{ fontSize: 12 }} variant='h6'>{report.name}</Typography>
                                </Box>
                                <Typography sx={{ fontSize: 10 }} variant='body2'>{report.date}</Typography>
                                <Box sx={{ color: '#ED7D31', fontSize: 14 }} component={'span'}>${report.amount}</Box>
                            </Box>
                        )}
                        <Button
                            style={{
                                width: '100%',
                                color: 'whitesmoke',
                                backgroundColor: '#383B8C',
                                textAlign: 'center',
                                fontSize: '.8rem',
                                textTransform: 'capitalize',
                                transition: '.1s',
                                position: 'sticky',
                                bottom: 0,
                            }}>All Transaction</Button>
                    </Box>
                </Box>
            </Box >
        </>
    )
}
