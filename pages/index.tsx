import type { GetStaticProps } from 'next';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import path from 'path';
import { promises as fs } from 'fs';
import { PageData } from '../interfaces/interfaces';
import React, { useState } from 'react';
import ExampleSites from '../components/ExampleSites';
import ContactForm from '../components/ContactForm';

interface Props {
    data: PageData;
}

const Home = (props: Props) => {
    const [atTop, setAtTop] = useState<boolean>(true);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const scrollTop = event.currentTarget.scrollTop;
        setAtTop(scrollTop < 10);
    };

    return (
        <div style={{ height: '100vh', overflowY: 'scroll' }} onScroll={handleScroll}>
            <SEO title={"patrick o'neill"} description={'web developer'} />
            <Header atTop={atTop} />
            <Hero {...props.data.hero} />
            <Services {...props.data.services} />
            <ExampleSites {...props.data.examples} />
            <Features {...props.data.features} />
            <Pricing />
            <ContactForm {...props.data.contact} />
            {/*<CallToAction />*/}
            {/*<Footer />*/}
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
    const dataDirectory = path.join(process.cwd(), 'data');
    const dataRaw = await fs.readFile(dataDirectory + '/data.json', 'utf8');
    const data = JSON.parse(dataRaw);

    return {
        props: { data }, // will be passed to the page component as props
    };
};
