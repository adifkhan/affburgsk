import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { Props } from '@/types/models';

export default function LandingLayout({ children }: Props) {
    return (
        <>
            <Navbar />{children}<Footer />
        </>
    );
}