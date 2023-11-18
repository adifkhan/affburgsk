"use client"
import React, { useState } from 'react';
import { Props } from '@/types/models';
import Header from '@/components/dashComponents/Header';
import Sidebar from '@/components/dashComponents/Sidebar';

export default function DashboardLayout({ children }: Props) {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const [getDropdown, setGetDropdown] = useState<string | null>(null)
    const [dropDownOpen, setDropDownOpen] = useState<string | null>(null);


    // const [themeDark, setThemeDark] = useState<string | null>(localStorage.getItem("dark") ? localStorage.getItem("dark") : 'false');
    // const [themeDark, setThemeDark] = useState<string | null>('true');

    // useEffect(() => {
    //     themeDark && localStorage.setItem("dark", themeDark);
    // }, [themeDark])

    return (
        <div className='flex flex-col w-full'>
            <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                dropDownOpen={dropDownOpen}
                setDropDownOpen={setDropDownOpen}
                getDropdown={getDropdown}
                setGetDropdown={setGetDropdown}
            />
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                dropDownOpen={dropDownOpen}
                setDropDownOpen={setDropDownOpen}
                getDropdown={getDropdown}
                setGetDropdown={setGetDropdown}>
                {children}
            </Sidebar>
        </div>
    )
}
