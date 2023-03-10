import React from 'react';
import Head from 'next/head';
import { apiRoute } from '../utils/helpers';
import Layout from '../components/Layout';
import DOMPurify from 'isomorphic-dompurify';

const TermsOfServices = ({ pageData }) => {
  const terms = pageData['0'].description;
  return (
    <Layout>
      <Head>
        <title>Terms of services</title>
        <link rel="canonical" href=" https://www.sattvaconnect.com/terms-of-services" />
      </Head>
      <div class='wrapper'>
        <main>
          <section className='sec sec-inabout light-purplebg sec-list'>
            <div class='container'>
              <p>
                <h3 className='revamp-subtitle'>Terms of services</h3>
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(terms),
                }}
              ></div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(apiRoute('cms-page-data/OQ=='));
  const pageData = await res.json();
  return {
    props: {
      pageData,
    },
    revalidate: 1,
  };
}

export default TermsOfServices;
