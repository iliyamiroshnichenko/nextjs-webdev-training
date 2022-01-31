import { FC } from 'react';
import Heading from './Heading';
import { IContactInfo } from '../types'

interface IContactProps {
  contact: IContactInfo
}

const ContactInfo: FC<IContactProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <Heading tag="h3" text="Empty contact"></Heading>;
  }

  return (
    <>
      <Heading tag="h3" text={name}></Heading>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
