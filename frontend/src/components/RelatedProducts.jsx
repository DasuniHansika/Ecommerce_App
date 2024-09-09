// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'; // Added useState here
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

// eslint-disable-next-line react/prop-types
const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]); // Correct useState

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      // Filtering related products based on category and subCategory
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

      setRelated(productsCopy.slice(0, 5)); // Limiting to 5 related products
    }
  }, [category, subCategory, products]); // Adding dependencies

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item, index) => ( // Corrected .map syntax
          <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
