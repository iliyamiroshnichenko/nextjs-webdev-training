import { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import PostInfo from '../../components/PostInfo';
import { IPostInfo } from '../../types'

interface IProps {
  post: IPostInfo
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  const paths = data.map(({ id }) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  const data = await response.json();

  return data
    ? {
        props: {
          post: data,
        },
      }
    : {
        notFound: true,
      };
};

const Post: FC<IProps> = ({ post }) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <PostInfo post={post} />
  </>
);

export default Post;
