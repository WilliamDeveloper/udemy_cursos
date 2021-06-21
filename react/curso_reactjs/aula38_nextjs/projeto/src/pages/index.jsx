import P from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';
import config from '../config';

// const Heading = styled.h1`
//   background: ${({ theme }) => theme.colors.secondaryColor};
// `;

export default function Index({ data }) {
  // return <Heading>OI</Heading>;
  return <h1>Luiz</h1>;
};

export const getStaticProps = async () => {
  const raw = await fetch(config.url + config.defaultSlug);
  const json = await raw.json();
  const data = mapData(json);

  return {
    props:{
      data,
    }
  }
};

Index.propTypes = {
  data: P.array,
};
