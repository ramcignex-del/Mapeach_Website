import React from 'react';
import privacyContent from './privacyContent';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {privacyContent.map((item, index) => {
        switch (item.type) {
          case 'h1':
            return <h1 key={index}>{item.text}</h1>;
          case 'h2':
            return <h2 key={index}>{item.text}</h2>;
          case 'p':
            return <p key={index}>{item.text}</p>;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default PrivacyPolicy;
