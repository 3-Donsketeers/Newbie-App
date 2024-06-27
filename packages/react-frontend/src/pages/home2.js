import React from 'react';
import { Link } from 'wouter';

const Home2 = () => {
  return (
    <div>
      <div>
        <p>This is some text inside a box.</p>
      </div>
      <Link href="/another-page">
        <button>
          Go to Another Page
        </button>
      </Link>
    </div>
  );
};

const styles2 = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  textBox: {
    border: '2px solid #000',
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '20px',
    backgroundColor: '#fff',
  },
  text: {
    margin: 0,
    fontSize: '18px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Home2;
