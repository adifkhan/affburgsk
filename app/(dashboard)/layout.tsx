"use client"
import React, { useEffect, useState } from 'react';
import { Props } from '@/types/models';
import Header from '@/components/dashComponents/Header';
import Sidebar from '@/components/dashComponents/Sidebar';
import { useAppSelector } from '../GlobalRedux/store';

export default function DashboardLayout({ children }: Props) {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

    // const [themeDark, setThemeDark] = useState<string | null>(localStorage.getItem("dark") ? localStorage.getItem("dark") : 'false');
    // const [themeDark, setThemeDark] = useState<string | null>('true');
    const [reportsDropDownMenu, setReportDropDownMenu] = useState<boolean>(false);
    const [fqaDropDownMenu, setFqaDropDownMenu] = useState<boolean>(false);

    // useEffect(() => {
    //     themeDark && localStorage.setItem("dark", themeDark);
    // }, [themeDark])

    return (
        <div className='flex flex-col w-full'>
            <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                reportsDropDownMenu={reportsDropDownMenu}
                setReportDropDownMenu={setReportDropDownMenu}
                fqaDropDownMenu={fqaDropDownMenu}
                setFqaDropDownMenu={setFqaDropDownMenu}
            />
            <Sidebar
                setSidebarOpen={setSidebarOpen}
                sidebarOpen={sidebarOpen}
                fqaDropDownMenu={fqaDropDownMenu}
                setFqaDropDownMenu={setFqaDropDownMenu}
                reportsDropDownMenu={reportsDropDownMenu}
                setReportDropDownMenu={setReportDropDownMenu}
            >
                {children}
            </Sidebar>
        </div>
    )
}
