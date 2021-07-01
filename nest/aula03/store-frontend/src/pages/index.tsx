import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { Product } from "../models";
import http from "../http";

interface ProductListPageProps {
  products: Product[];
}

const ProductListPage: NextPage<ProductListPageProps> = ({ products }) => {
  console.log(products);
  return (
    <div>
      <Head>
        <title>Lista de produtos</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Typography
        component="h1"
        variant="h3"
        color="textPrimary"
        gutterBottom
      >
        Produtos
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                style={{ paddingTop: "56%" }}
                image={
                  `https://source.unsplash.com/random?product,` + Math.random()
                }
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  href={"/products/[slug]"}
                  as={`/products/${product.slug}`}
                  passHref
                >
                  <Button size="small" color="primary" component="a">
                    Detalhes
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductListPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {data: products} = await http.get('products');

  return {
    props: {
      products,
    },
  };
};