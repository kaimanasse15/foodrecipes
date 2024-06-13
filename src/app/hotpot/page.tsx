import React from 'react';

const HotPot = () => {
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
        Hot Pot Page
      </h1>
      <p
        style={{
          fontSize: '18px',
          marginBottom: '20px',
        }}
      >
        This is the Hot Pot page.
      </p>
      <img
        src="/Pho.png"
        alt="Hot Pot Image"
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
          About Hot Pot
        </h2>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          Hot pot is a popular communal dish originating from China.
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          It's a simmering pot of broth placed at the center of the table, and diners add various ingredients to cook in the pot.
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
          Popular Hot Pot Ingredients
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
            Thinly sliced beef
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Pork belly
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Shrimp
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Mushrooms
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Noodles
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Vegetables (e.g. carrots, lotus root, bok choy)
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
          Hot Pot Tips
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
            Choose a variety of ingredients to ensure a balanced meal.
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Start with lighter ingredients (e.g. vegetables) and move to heavier ones (e.g. meat).
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Don't overcook your ingredients!
          </li>
        </ol>
      </section>
    </div>
  );
};

export default HotPot;