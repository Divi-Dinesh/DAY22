import React from 'react';


const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <h2>{title}</h2>
      <div className="price">${price}</div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

function App() {
  const products = [
    {
      title: 'FREE',
      price: 0,
      features: [
        'Single User', 
      '50GB Storage', 
      'Unlimited Public Projects',
      'Community Access'

    ],
    },
    {
      title: 'PLUS',
      price: 9,
      features: [
        '5Users', 
      '50GB Storage', 
      'Unlimited Public Projects', 
      'Communite Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain'

    ]
    },
    {
      title: 'PRO',
      price: 49,
      features: [
        ' Unlimited Users', 
        '50GB Storage', 
        'Unlimited Public Projects', 
        'Communite Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports'
      ],
    },
  ];

  return (
    <div className="app">
      {products.map((product, index) => (
        <PriceCard key={index} {...product} />
      ))}
    </div>
  );
}

export default App;


  
    
 
   
    
  

  





