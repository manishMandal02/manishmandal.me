import Head from 'next/head';
import AboutMe from '../components/aboutMe/Index';
import ContactMe from '../components/contactMe/Index';

// components

import Header from '../components/Header';
import HeroSection from '../components/landingSection/Index';
import MyProjects from '../components/myProjects';

export default function Home() {
  return (
    <div className=' flex flex-col min-h-screen overflow-x-hidden transition-all duration-150'>
      <Head>
        <title>Manish Mandal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <HeroSection />
      {/* About Me */}
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </div>
  );
}
