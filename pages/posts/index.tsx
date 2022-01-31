import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Heading from '../../components/Heading';
import { IPostInfo } from '../../types'

interface IProps {
  posts: IPostInfo[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return data
    ? {
        props: {
          posts: data,
        },
      }
    : {
        notFound: true,
      };
};

const Posts: FC<IProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="All contacts list:" />
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
