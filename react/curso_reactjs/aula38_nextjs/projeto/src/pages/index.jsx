import P from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';

// const Heading = styled.h1`
//   background: ${({ theme }) => theme.colors.secondaryColor};
// `;

export default function Index({ name }) {
  // return <Heading>OI</Heading>;
  return <h1>{name}</h1>;
}

export const getStaticProps = async () => {
  return {
    props:{
      name: 'Luiz',
    }
  }
}

Index.propTypes = {
  name: P.string,
}
