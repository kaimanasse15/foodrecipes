import React from 'react';

const SweetSoup = () => {
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
        Vietnamese Sweet Soup Page
      </h1>
      <p
        style={{
          fontSize: '18px',
          marginBottom: '20px',
        }}
      >
        This is the Vietnamese Sweet Soup page.
      </p>
      <img
        src="/s.png"
        alt="Vietnamese Sweet Soup Image"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '10px',
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
          About Vietnamese Sweet Soup
        </h2>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          Chè is a popular Vietnamese dessert soup made with various beans, fruits, and coconut milk.
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          It's a sweet and refreshing treat that's perfect for hot days.
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
          Popular Vietnamese Sweet Soup Ingredients
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
            Mung beans
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Red kidney beans
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Coconut milk
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Palm sugar
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Various fruits (e.g. jackfruit, longan, lychee)
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
          Vietnamese Sweet Soup Tips
        </h2>
        <ol
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
            Use a variety of beans and fruits to create a colorful and flavorful soup.
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Adjust the sweetness level to your taste by adding more or less palm sugar.
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Serve the soup chilled for a refreshing treat.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default SweetSoup;