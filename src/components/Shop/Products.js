import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const US_PRODUCTS = [
  { id: 1, price: 1, title: "Title 1", description: "Text" },
  { id: 2, price: 1, title: "Title 1", description: "Text" },
  { id: 3, price: 1, title: "Title 1", description: "Text" },
  { id: 4, price: 1, title: "Title 1", description: "Text" },
  { id: 5, price: 1, title: "Title 2", description: "Text" }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy products:</h2>
      <ul>
        {US_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
