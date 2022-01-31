import { FC } from 'react';
import Heading from './Heading';
import { IPostInfo } from '../types'

interface IProps {
  post: IPostInfo
}

const PostInfo: FC<IProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post"></Heading>;
  }

  return (
    <>
      <Heading tag="h3" text={title}></Heading>
      {body}
    </>
  );
};

export default PostInfo;
