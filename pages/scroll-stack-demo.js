import Head from "next/head";
import Layout from "../components/Layout";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

export default function ScrollStackDemo() {
  return (
    <>
      <Head>
        <title>Scroll Stack Demo</title>
        <meta name="description" content="Demo page showcasing the ScrollStack component in action." />
      </Head>
      <Layout>
        <section className="demo-hero">
          <h1>Scroll Stack Demo</h1>
          <p>Scroll down to see how cards stack gracefully using the ScrollStack component.</p>
        </section>

        <section className="demo-stack">
          <ScrollStack
            className="demo-scroll-stack"
            useWindowScroll
            itemDistance={120}
            itemScale={0.035}
            itemStackDistance={35}
            stackPosition="20%"
            scaleEndPosition="8%"
            baseScale={0.94}
            blurAmount={0}
          >
            <ScrollStackItem>
              <h2>Card 1</h2>
              <p>This is the first card in the stack.</p>
            </ScrollStackItem>
            <ScrollStackItem>
              <h2>Card 2</h2>
              <p>This is the second card in the stack.</p>
            </ScrollStackItem>
            <ScrollStackItem>
              <h2>Card 3</h2>
              <p>This is the third card in the stack.</p>
            </ScrollStackItem>
          </ScrollStack>
        </section>

        <style jsx>{`
          .demo-hero {
            text-align: center;
            padding: 80px 20px 20px;
          }

          .demo-hero h1 {
            font-size: 2.8rem;
            margin-bottom: 1rem;
          }

          .demo-hero p {
            font-size: 1.1rem;
            color: #4a5568;
          }

          .demo-stack {
            padding-bottom: 120px;
          }

          .demo-scroll-stack {
            max-width: 900px;
            margin: 0 auto;
          }

          :global(.demo-scroll-stack .scroll-stack-card) {
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.08);
          }

          :global(.demo-scroll-stack .scroll-stack-card h2) {
            margin-bottom: 0.5rem;
          }

          :global(.demo-scroll-stack .scroll-stack-card p) {
            margin: 0;
            color: #4a5568;
          }
        `}</style>
      </Layout>
    </>
  );
}
