import * as Styled from './styles';
import Link from "next/Link";

export type MenuLinkProps = {
  children: React.ReactNode,
  link: string,
  newTab: boolean,
};


export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink =  link.match(/^\//) ? true : false;
  if(nextLink){
    return (
        <Link href={link} passHref>
          <Styled.Container target={target}>
            {children} (NL)
          </Styled.Container>
        </Link>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {children} (A)
    </Styled.Container>
  );
};
