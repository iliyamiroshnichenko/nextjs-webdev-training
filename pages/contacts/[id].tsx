import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo';
import { IContactInfo } from '../../types'

interface IProps {
  contact: IContactInfo
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  const data = await response.json();

  return data
    ? {
        props: {
          contact: data,
        },
      }
    : {
        notFound: true,
      };
};

const Contact:FC<IProps> = ({ contact }) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact} />
  </>
);

export default Contact;
