import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

import * as Styled from './styles';

import { mapData } from '../../api/map-data';

import { Heading } from '../../components/Heading';
import {GridTwoColumns, GridTwoColumnsProps} from '../../components/GridTwoColumns';
import {GridContent, GridContentProps} from '../../components/GridContent';
import {GridText, GridTextProps} from '../../components/GridText';
import {GridImage, GridImageProps} from '../../components/GridImage';

import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import config from '../../config';

import P from 'prop-types';
import pagesFakeData from './../../api/dados.json';
import {MenuProps} from "../../components/Menu";
import {LogoLinkProps} from "../../components/LogoLink";
import {MenuLinkProps} from "../../components/MenuLink";

export type PageData = {
  title: string,
  slug: string,
  footerHtml: string,
  menu: LogoLinkProps & { links: MenuLinkProps[] }
  section : SectionProps[]
};

export type SectionProps = (GridImageProps | GridTextProps | GridTwoColumnsProps | GridContentProps) & {component: string};

export type HomeProps = {
  data:  PageData [],
};

function Home({ data }: HomeProps) {
  // if (!data || !data.length) {
  //   return <PageNotFound />;
  // }

  const { menu, sections, footerHtml, slug } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...(section as GridContentProps)} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...(section as GridTextProps) } />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...(section as GridImageProps)} />;
        }
      })}
    </Base>
  );
}

export default Home;


