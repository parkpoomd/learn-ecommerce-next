import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '@framework/product/get-all-products';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero, Marquee } from '@components/ui';

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookies, ice cream and muffin"
        description="Pastry brownie muffin sugar plum lollipop sweet roll candy. Cupcake sweet roll gummi bears toffee tart brownie danish soufflé. Biscuit ice cream cookie cake chocolate bar. Gummi bears bonbon macaroon sugar plum gummi bears brownie sugar plum lemon drops biscuit. Cupcake apple pie pastry pudding marzipan dessert jelly beans. Jelly beans bonbon marzipan shortbread muffin jelly oat cake ice cream cake. Tiramisu caramels pie icing fruitcake brownie lollipop carrot cake pie. Cake macaroon jelly-o bonbon macaroon jelly-o. Toffee sesame snaps sesame snaps lollipop cake jelly beans icing chupa chups sesame snaps. Brownie icing jelly cake jelly caramels jelly."
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} variant="slim" product={product} />
        ))}
      </Marquee>
    </>
  );
}

Home.Layout = Layout;
