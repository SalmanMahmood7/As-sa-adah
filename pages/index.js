import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import About from "../components/About";
import YouTubeSection from "../components/YouTubeSection";
import ImpactStories from "../components/ImpactStories";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>As-sa'adah Foundation - Comprehensive Islamic Welfare Organization</title>
        <meta name="description" content="As-sa'adah Foundation is a comprehensive Islamic welfare organization providing education, healthcare, poverty alleviation, spiritual development, and emergency relief based on Islamic principles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" type="image/png" />
      </Head>
      <Layout>
        <Hero />
        <About />
        <Programs />
        <YouTubeSection />
        <ImpactStories />
        <Testimonials />
        <CallToAction />
      </Layout>
    </>
  );
}
