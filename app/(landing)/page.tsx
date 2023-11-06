import AdsSocial from '@/components/AdsSocial'
import Advertisers from '@/components/Advertisers'
import Banner from '@/components/Banner'
import BannerDownAdd from '@/components/BannerDownAdd'
import Blogs from '@/components/Blogs'
import Leaderboard from '@/components/Leaderboard'
import LeaderboardSecond from '@/components/LeaderboardSecond'
import Publisher from '@/components/Publisher'
import Reviewers from '@/components/Reviewers'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import WhyAffburg from '@/components/WhyAffburg'

export default function LandingPage() {
  return (
    <main>
      <Banner />
      <BannerDownAdd />
      <Leaderboard />
      <Advertisers />
      <AdsSocial />
      <Publisher />
      <LeaderboardSecond />
      {/* <Blogs /> */}
      {/* <WhyAffburg/> */}
      {/* <Services /> */}
      <Reviewers />
      <Reviews />
    </main>
  )
}
