import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>It is not given to every man to take a bath of multitude; enjoying a crowd is an art; and only he can relish a debauch of vitality at the expense of the human species, on whom, in his cradle, a fairy has bestowed the love of masks and masquerading, the hate of home, and the passion for roaming.</p>
        <p>Multitude, solitude: identical terms, and interchangeable by the active and fertile poet. The man who is unable to people his solitude is equally unable to be alone in a bustling crowd.
          The poet enjoys the incomparable privilege of being able to be himself of someone else, as he chooses. Like those wandering souls who go looking for a body, he enters as he likes into each man's personality. For him alone everything is vacant; and if certain places seem closed to him, it is only because in his eyes they are not worth visiting.
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}