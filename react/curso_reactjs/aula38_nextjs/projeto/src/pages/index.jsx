import P from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';
import config from '../config';
import pagesFakeData from './../api/dados.json';

// const Heading = styled.h1`
//   background: ${({ theme }) => theme.colors.secondaryColor};
// `;

export default function Index({ data = null }) {
  console.log(data);
  // return <Heading>OI</Heading>;
  return <h1>Luiz</h1>;
};

export const getStaticProps = async () => {
  // const raw = await fetch(config.url + config.defaultSlug);
  // const json = await raw.json();
  // const data = mapData(json)[0];

  const json = pagesFakeData;
  const data = mapData(json)[0];

  return {
    props:{
      data,
    }
  }
};

Index.propTypes = {
  data: P.object,
};
