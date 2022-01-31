import { FC } from 'react';
import Head from 'next/head';
import Heading from '../components/Heading';
import Socials from '../components/Socials';
import styles from '../styles/Home.module.scss';
import { ISocial } from '../types';

interface IProps {
  socials: ISocial[]
}

export const getStaticProps = async () => {
  try {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const data = await response.json();
 
    return data
      ? {
        props: {
          socials: data,
        },
      }
      : {
        notFound: true,
      };
    
  } catch (error) {
    return {
      props: {
        socials: null,
      }
    }
  }
};

const Home: FC<IProps> = ({ socials }) => (
  <div className={styles.wrapper} style={{ flexDirection: 'column' }}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text='Hello guys! I"m a start page!' />
    <Socials socials={socials} />
  </div>
);

export default Home;
