import Head from "next/head";
import Layout from "../components/Layout";
import Education from "../components/Education";
import YouTubeSection from "../components/YouTubeSection";
import ImpactStories from "../components/ImpactStories";
import FounderMessage from "../components/FounderMessage";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>As-sa'adah-Religious Empowerment Program</title>
        <meta name="description" content="As-sa'adah Foundation is a comprehensive Islamic welfare organization providing education, healthcare, poverty alleviation, spiritual development, and emergency relief based on Islamic principles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Education />
        <div id="leadership">
          <FounderMessage />
        </div>
        <div id="impact">
          <ImpactStories />
        </div>
        <YouTubeSection />
        <CallToAction />
      </Layout>
    </>
  );
}
