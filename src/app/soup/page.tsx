import React from 'react';

const VietnameseSoups = () => {
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
        Vietnamese Soups Page
      </h1>
      <p
        style={{
          fontSize: '18px',
          marginBottom: '20px',
        }}
      >
        This is the Vietnamese Soups page.
      </p>
      <img
        src="/soups.png"
        alt="Vietnamese Soups Image"
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
          Popular Vietnamese Soups
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
            Phở
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Bún bò Huế
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Bánh canh
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Chè
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Canh chua
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Súp cua
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
          About Pho
        </h2>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          Pho is maybe the world’s most beloved soup. My earliest memories of going out to eat were to pho restaurants. As a Vietnamese person, pho is something I’ve been making for over 20 years and eaten for my whole life.
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          Pho (properly made) is a deeply spiced and aromatic soup of a clear broth and rice noodles, topped with different cuts and textures of meats and fresh herbs. It doesn’t need to be meat, and in fact many Vietnamese have vegan pho, but it’s by default beef noodle soup, which is what this recipe is for.
        </p>
        <img
          src="/pho.jpg"
          alt="Pho Image"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        />
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginTop: '0',
          }}
        >
          Pho Soup
        </h3>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          A great pho soup is a well made beef broth with charred aromatics, sweetened with sugar, and seasoned with fish sauce. The signature taste of beef pho though comes from the charred aromatics and spices: if you leave those out, you don’t have pho, you have generic beef noodle soup.
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          Traditionally pho soup was made with bones, but I prefer a cheap cut of meat. Where we live, bones cost more or less the same as cheap beef because of the popularity of bone broth and marrow. Lately we’ve gravitated towards a cut of beef that's commonly used for pho, called "oxtail" or "brisket". It's a tougher cut that's perfect for slow cooking and becomes tender and flavorful after hours of simmering.
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
          About Bún bò Huế
        </h2>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          Bún bò Huế is a popular Vietnamese noodle soup originating from Huế, a city in central Vietnam. The dish is made with a rich and spicy beef broth, rice noodles, and various toppings such as beef, pork, and seafood.
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          The broth is simmered for hours to extract the flavors from the bones and spices, giving it a deep and complex flavor profile. The noodles are typically served with a variety of toppings, including sliced beef, pork, and seafood, as well as herbs and chili sauce.
        </p>
        <img
          src="/bunbohue.jpg"
          alt="Bún bò Huế Image"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        />
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
          About Bánh canh
        </h2>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          Bánh canh is a popular Vietnamese noodle soup made with a rich and flavorful broth, rice noodles, and various toppings such as fish, shrimp, and pork.
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          The broth is typically made with a combination of fish sauce, sugar, and spices, giving it a sweet and savory flavor. The noodles are served with a variety of toppings, including fish balls, shrimp, and pork, as well as herbs and chili sauce.
        </p>
        <img
          src="/banhcanh.jpg"
          alt="Bánh canh Image"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        />
      </section>
    </div>
  );
};

export default VietnameseSoups;
