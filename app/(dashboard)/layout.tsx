"use client"
import React, { useEffect, useState } from 'react';
import { Props } from '@/types/models';
import Header from '@/components/dashComponents/Header';
import Sidebar from '@/components/dashComponents/Sidebar';
import { useAppSelector } from '../GlobalRedux/store';

export default function DashboardLayout({ children }: Props) {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const [fixedSidebar, setFixedSidebar] = useState<boolean>(true)
    const [getDropdown, setGetDropdown] = useState<string | null>(null)
    const [dropDownOpen, setDropDownOpen] = useState<string | null>(null);

    const [reportsDropDownMenu, setReportDropDownMenu] = useState<boolean>(false);
    const [fqaDropDownMenu, setFqaDropDownMenu] = useState<boolean>(false);
    // const [themeDark, setThemeDark] = useState<string | null>(localStorage.getItem("dark") ? localStorage.getItem("dark") : 'false');
    // const [themeDark, setThemeDark] = useState<string | null>('true');

    // useEffect(() => {
    //     themeDark && localStorage.setItem("dark", themeDark);
    // }, [themeDark])

    function handleEnterMouse() {
        if (!fixedSidebar && !sidebarOpen) {
            setSidebarOpen(!sidebarOpen)
            setDropDownOpen(getDropdown)
        }
    }

    function handleLeaveMouse() {
        if (!fixedSidebar) {
            setSidebarOpen(!sidebarOpen)
            setDropDownOpen(null)
        }
    }

    function handleSetSidebar() {
        if (!fixedSidebar) {
            setFixedSidebar(!fixedSidebar)
        }
    }

    //for dropdown button handle
    function handleDropdownOpen(id: string) {
        if (dropDownOpen === id) { setDropDownOpen(null) }
        if (dropDownOpen !== id) { setDropDownOpen(id) }
    }
    //for home and configurations route
    // const handleClick = (menu: MenuType) => {
    //     if (menu.subMenus) {
    //         setGetDropdown(menu.mainTitle)
    //         setDropDownOpen(menu.mainTitle)
    //         handleDropdownOpen(menu.mainTitle);
    //     } else {
    //         router.push(menu.path);
    //     }
    // };
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
