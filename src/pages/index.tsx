import type { NextPage } from 'next';
import Head from 'next/head';

import { Footer } from '../components/Footer';

import { WhatsappButton } from '../components/WhatsappButton';

import { SectionBanner } from '../components/SectionBanner';
import { SectionAbout } from '../components/SectionAbout';
import SectionServices from '../components/SectionServices';
import SectionProducts from '../components/SectionProducts';
import { SectionContacts } from '../components/SectionContacts';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MP Pré Moldados</title>
        <meta
          name="description"
          content="A MP PRÉ-MOLDADOS foi criada e fundada em 2012 com intuito de suprir a
          demanda de materiais Pré-moldados para diversas regiões de Brasília."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionBanner />
      <SectionAbout />
      <SectionServices />
      <SectionProducts />
      <SectionContacts />
      <Footer />

      <WhatsappButton phoneNumber="61 993806396" text="" />
    </>
  );
};

export default Home;
