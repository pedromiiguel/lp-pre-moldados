import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../components/Container';
import { Footer } from '../components/Footer';
import { SectionAbout } from '../components/Sections/SectionAbout';
import { SectionBanner } from '../components/Sections/SectionBanner';
import { SectionContacts } from '../components/Sections/SectionContacts';
import SectionProducts from '../components/Sections/SectionProducts';
import SectionServices from '../components/Sections/SectionServices';
import { WhatsappButton } from '../components/WhatsappButton';

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
      <Container as="section">
        <SectionAbout />
      </Container>

      <SectionServices />
      <SectionProducts />
      <SectionContacts />
      {/* <Footer /> */}

      <WhatsappButton phoneNumber="6141027744" text="" />
    </>
  );
};

export default Home;
