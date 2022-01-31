interface IProps {
  tag?: string,
  text: string
}

const Heading = ({ tag, text }: IProps) => {
  const Tag: any = tag || 'h1';

  return <Tag>{text}</Tag>;
};

export default Heading;
