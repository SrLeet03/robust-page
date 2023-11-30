import Image from 'next/image'
import styles from './page.module.css'
import Landing from '@/components/landing'
import Header from '@/components/header/Header' 
import HighRes from '@/components/high-res'
import Footer from '@/components/footer'
import EmailUs from '@/components/email-us'

global.performance = global.performance || {
  now: () => new Date().getTime(),
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <HighRes/>
      {/* <Landing/> */}
      <EmailUs/>
      <Footer/>
    </main>
  )
}
