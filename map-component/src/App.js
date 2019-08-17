import React from 'react';
import Products from './Products'
import productsData from './vschoolProducts'

function App() {
  const productComponents = productsData.map(item => <Products key={item.id} product={item} />)
  return (
    <div>
      {productComponents}
    </div>
  );
}

export default App;
