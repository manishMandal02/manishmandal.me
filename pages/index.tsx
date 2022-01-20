import Head from 'next/head';

// components

import Header from '../components/Header';
import HeroSection from '../components/landingSection/Index';

export default function Home() {
  return (
    <div className=' flex flex-col min-h-screen overflow-x-hidden transition-all duration-150'>
      <Head>
        <title>Manish Mandal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <HeroSection />
      <p className='mt-96'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium nulla aliquid doloremque sit
        repellendus, eius eum dolorum maxime perspiciatis, dolor quibusdam mollitia alias magnam cupiditate,
        minima accusamus consectetur corrupti?
      </p>
    </div>
  );
}
