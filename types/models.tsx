// react children
export type Props = {
    children: React.ReactNode
}
export interface navLinks {
    title: string;
    path: string;
    icon: any;
}
export interface review {
    review: string;
    author: string;
}
export interface Blog {
    _id: string
    image: string;
    date: string;
    name: string;
    description: string;
}
export interface AllBlogs {
    recipeBlogs: Blog[];
}
export interface Review {
    _id: string;
    image: string;
    date: string;
    name: string;
    description: string;
}
export interface AllReviews {
    allReviews: Review[];
}
export interface Service {
    name: string
    details: string
    icon: any
}

export type CountryType = {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
}

export type DashboardMenuType = {
    title: string;
    path: string;
    icon: any;
}

export type TopCardData = {
    icon: any;
    value: number;
    title: string;
    chartValue: number;
    qualityLowHigh: number;
    color: string;
}

export type PieChartData = {
    id: string;
    label: string;
    value: number;
}

export type Offer = {
    title: string;
    flag: string,
    countryName: string,
    category: string,
    price: string,
}

export type BarChartData = {
    country: string;
    Clicks: number;
    Subscription: number;
    Registration: number;
    Confirms: number;
    Installs: number;
    Sales: number;
}

export type transactionData = {
    id: string;
    name: string;
    date: string;
    amount: string;
}

export type dateType = {
    startDate: Date;
    endDate: Date;
    key: string
}

export type PayoutHistoryData = {
    id: string;
    Date: string;
    Clicks: number;
    Registrations: number;
    Confirms: number;
    Installs: number;
    Sales: number;
    Click2Reg: number;
    Reg2Conf: number;
    Reg2Sale: number;
    EPC: number;
    Revenue: number,
}

export type HeadCell = {
    id: keyof PayoutHistoryData;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
}

export type MainReportData = {
    id: string;
    Date: string;
    Clicks: number;
    Registrations: number;
    Confirms: number;
    Installs: number;
    Sales: number;
    Click2Reg: number;
    Reg2Conf: number;
    Reg2Sale: number;
    EPC: number;
    Revenue: number,
}
export type TransactionDataType = {
    id: string;
    Date: string;
    Clicks: number;
    Registrations: number;
    Confirms: number;
    Installs: number;
    Sales: number;
    Click2Reg: number;
    Reg2Conf: number;
    Reg2Sale: number;
    EPC: number;
    Revenue: number,
}

export type SignUpInputTypes = {
    firstName: string;
    lastName: string;
    email: string;
    confirmEmail: string;
    phone: string;
    password: string;
    address: string;
    apartment: string;
    city: string;
    country: string;
    checkTerm: string;
}
export type DepositTableDataType = {
    id: string;
    date: string;
    creditDebit: string;
    type: string;
    transactionID: string;
    status: string;
    invoice: string;
}
export type StatisticsTableDataType = {
    id: string;
    campaignTitle: string;
    click: string;
    cost: string;
    avgCPC: string;
}
