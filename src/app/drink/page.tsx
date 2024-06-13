import React from 'react';

const VietnameseDrinks = () => {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        Vietnamese Drinks Page
      </h1>
      <p
        style={{
          fontSize: '18px',
          marginBottom: '20px',
        }}
      >
        This is the Vietnamese Drinks page.
      </p>
      <img
        src="/drink.png"
        alt="Vietnamese Coffee"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          marginBottom: '20px',
        }}
      />
      <section
        style={{
          marginBottom: '40px',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '0',
          }}
        >
          Popular Vietnamese Drinks
        </h2>
        <ul
          style={{
            listStyle: 'none',
            padding: '0',
            margin: '0',
          }}
        >
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Vietnamese Coffee
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Fresh Coconut Water
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Sugarcane Juice
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Vietnamese Tea
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Fresh Fruit Smoothies
          </li>
        </ul>
      </section>
      <section
        style={{
          marginBottom: '40px',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '0',
          }}
        >
          About Vietnamese Coffee
        </h2>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          Vietnamese coffee is a strong and rich coffee made from robusta beans. It's typically served over ice and sweetened with condensed milk.
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          The coffee is brewed in a small metal filter called a phin, which sits on top of a cup. The coffee drips slowly through the filter, creating a strong and flavorful coffee.
        </p>
      </section>
      <section
        style={{
          marginBottom: '40px',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '0',
          }}
        >
          About Fresh Coconut Water
        </h2>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          Fresh coconut water is a refreshing and hydrating drink made from young coconuts. It's a popular drink in Vietnam, especially during the hot summer months.
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          The coconut water is rich in electrolytes and has many health benefits, including reducing inflammation and improving digestion.
        </p>
      </section>
    </div>
  );
};

export default VietnameseDrinks;