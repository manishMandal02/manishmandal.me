import Head from 'next/head';

// compoents
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div className=' flex flex-col min-h-screen overflow-hidden'>
      <Head>
        <title>Manish Mandal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <HeroSection />
    </div>
  );
}
