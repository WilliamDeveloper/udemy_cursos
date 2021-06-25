import P from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';
import config from '../config';
import pagesFakeData from './../api/dados.json';
import { mapData } from './../api/map-data';
import Home, {HomeProps} from './../templates/Home';
import {GetStaticProps} from "next";


export default function Index({ data = null } : HomeProps) {
  return <Home data={data} />;
}

export const getStaticProps  = async () => {

  const json = pagesFakeData;
  const data = mapData(json);

  return {
    props: {
      data,
    },
  };
};

