import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Heading from '../../components/Heading';
import { IContactInfo } from '../../types'

interface IProps {
  contacts: IContactInfo[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return data
    ? {
        props: {
          contacts: data,
        },
      }
    : {
        notFound: true,
      };
};

const Contacts:FC<IProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="All contacts list:" />
      <ul>
        {contacts.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
