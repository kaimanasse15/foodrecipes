import React from 'react';

const Appetizers = () => {
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
        Vietnamese Appetizers
      </h1>
      <p
        style={{
          fontSize: '18px',
          marginBottom: '20px',
        }}
      >
        Explore the flavors of Vietnam with our delicious appetizers.
      </p>
      <img
        src="/appertizer.png"
        alt="Vietnamese Appetizer Image"
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
          Popular Vietnamese Appetizers
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
            textDecoration: 'underline',
            marginBottom: '10px',
            }}
          >
             <a href="https://www.hungryhuy.com/how-to-make-goi-cuon-vietnamese-spring-rolls/" target="_blank" rel="noopener noreferrer">
            Spring Rolls (Gỏi Cuốn)
            </a>
          </li>
          <li
            style={{
                textDecoration: 'underline',
                marginBottom: '10px',
            }}
          >
         <a href="https://thewoksoflife.com/cha-gio-vietnamese-fried-spring-rolls/" target="_blank" rel="noopener noreferrer">
            Fried Springroll (Chả Giò)
            </a>
          </li>
          <li
            style={{
                textDecoration: 'underline',
                marginBottom: '10px',
            }}
          >
               <a href="https://www.foodnetwork.com/recipes/vietnamese-bbq-pork-meatballs-nem-nuong-3644728" target="_blank" rel="noopener noreferrer">
            Grilled Pork Meatballs (Nem Nướng)
            </a>
          </li>
          <li
            style={{
                textDecoration: 'underline',
                marginBottom: '10px',
            }}
          >
                <a href="https://delightfulplate.com/vietnamese-fried-tofu-with-scallions/" target="_blank" rel="noopener noreferrer">
            Fried Tofu (Đậu Hũ Chiên)
            </a>
          </li>
          <li
            style={{
              textDecoration: 'underline',
              marginBottom: '10px',
            }}
          >
            <a href="https://jenhdao.com/banh-bot-loc/" target="_blank" rel="noopener noreferrer">
              Steamed Dumplings (Bánh Bot Loc)
            </a>
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
          Tips for Enjoying Vietnamese Appetizers
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
            Pair your appetizers with a refreshing Vietnamese beer or tea.
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Experiment with different dipping sauces to find your favorite.
          </li>
          <li
            style={{
              marginBottom: '10px',
            }}
          >
            Share your appetizers with friends and family for a fun and social dining experience.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Appetizers;