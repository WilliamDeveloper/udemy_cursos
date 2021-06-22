import P from 'prop-types';
import * as Styled from './styles';
import Link from "next/Link";

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink =  link.match(/^\//) ? true : false;
  if(nextLink){
    return (
        <Link href={link} passHref>
          <Styled.Container href={link} target={target}>
            {children}
          </Styled.Container>
        </Link>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
