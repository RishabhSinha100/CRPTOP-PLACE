// src/Features.js
import React from 'react';
import './Features.css';
import Tred from '../../assets/Tred.png';
import Ui from '../../assets/Ui.png';
import Wallet from '../../assets/wallet.png';
import Crypto from '../../assets/Crypto.png';

const Features = () => {
  return (
    <div className="features">
      <h2 className="features-title">Why Choose Our Crypto Tracker?</h2>
      <div className="features-container">
        <div className="feature-card">
          <img src={Crypto} alt="Real-time Updates" className="feature-icon" />
          <h3>Real-time Updates</h3>
          <p>Stay up-to-date with the latest prices and trends in the cryptocurrency market. Our tracker ensures you never miss a beat, providing minute-by-minute updates and in-depth analysis for every major cryptocurrency.</p>
          <div className="tooltip"><p>Get real-time data for all major cryptocurrencies and stay ahead in the market.</p></div>
        </div>
        <div className="feature-card">
          <img src={Wallet} alt="Secure Wallet" className="feature-icon" />
          <h3>Secure Wallet</h3>
          <p>Keep your assets safe with our industry-leading security measures. Our secure wallet uses advanced encryption and multi-factor authentication to ensure that your investments are protected from any threats.</p>
          <div className="tooltip"><p>Your funds are protected with top-notch security protocols.</p></div>
        </div>
        <div className="feature-card">
          <img src={Tred} alt="Detailed Analytics" className="feature-icon" />
          <h3>Detailed Analytics</h3>
          <p>Analyze the market with our comprehensive data and insights. From historical price charts to predictive modeling, our tools help you make informed decisions and optimize your investment strategy.</p>
          <div className="tooltip"><p>Access in-depth analysis to make informed decisions and optimize your investments.</p></div>
        </div>
        <div className="feature-card">
          <img src={Ui} alt="User-friendly Interface" className="feature-icon" />
          <h3>User-friendly Interface</h3>
          <p>Navigate through our app with ease, thanks to our intuitive design. Whether you’re a novice or an experienced trader, our user-friendly interface ensures a seamless and enjoyable experience.</p>
          <div className="tooltip"><p>Enjoy a seamless and intuitive user experience with our well-designed interface.</p></div>
        </div>
      </div>
    </div>
  );
}

export default Features;
