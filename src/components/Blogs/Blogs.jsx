import React, { useState } from 'react';
import './Blogs.css'; // Importing the CSS file for styling

const Blogs = () => {
    const [expandedPost, setExpandedPost] = useState(null);

    const toggleReadMore = (id) => {
        setExpandedPost(expandedPost === id ? null : id);
    };

    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: 'Understanding Bitcoin',
            summary: 'An in-depth look into the world of Bitcoin and its impact on the financial world. Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
            fullText: 'Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. Bitcoin was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.',
            date: 'June 10, 2024',
        },
        {
            id: 2,
            title: 'Ethereum 2.0: What You Need to Know',
            summary: 'A comprehensive guide to Ethereum 2.0 and its new features. Ethereum 2.0, also known as Eth2 or Serenity, is an upgrade to the Ethereum blockchain. The upgrade aims to enhance the speed, efficiency, and scalability of the Ethereum network so that it can process more transactions and ease bottlenecks.',
            fullText: 'Ethereum 2.0 is being launched in multiple phases, the first being the Beacon Chain, which went live on December 1, 2020. The Beacon Chain is a separate blockchain that will introduce proof-of-stake to the Ethereum ecosystem. The next phase is expected to be "The Merge," where Ethereum Mainnet will merge with the Beacon Chain.',
            date: 'June 5, 2024',
        },
        {
            id: 3,
            title: 'Top 10 Cryptocurrencies to Watch in 2024',
            summary: 'An analysis of the top 10 cryptocurrencies that are expected to perform well in 2024. The cryptocurrency market is known for its volatility and fast-paced changes. However, certain cryptocurrencies have shown resilience and potential for growth.',
            fullText: 'Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), Cardano (ADA), Solana (SOL), Polkadot (DOT), Ripple (XRP), Litecoin (LTC), Chainlink (LINK), and Stellar (XLM) are some of the top cryptocurrencies to watch in 2024. These cryptocurrencies have strong communities, use cases, and development teams behind them.',
            date: 'June 1, 2024',
        },
        {
            id: 4,
            title: 'The Rise of DeFi: Decentralized Finance Explained',
            summary: 'An exploration into the world of decentralized finance (DeFi) and how it is transforming traditional financial systems. DeFi is a movement that leverages decentralized networks to transform old financial products into trustless and transparent protocols that run without intermediaries.',
            fullText: 'DeFi platforms allow users to lend or borrow funds, trade cryptocurrencies, insure against risks, and earn interest in savings-like accounts. DeFi aims to create a more open, free, and fair financial system that is accessible to anyone with an internet connection.',
            date: 'May 28, 2024',
        },
        {
            id: 5,
            title: 'How to Safely Invest in Cryptocurrencies',
            summary: 'A guide to safely investing in cryptocurrencies and minimizing risks. Investing in cryptocurrencies can be highly profitable but also comes with risks. It is important to understand the market, do thorough research, and make informed decisions.',
            fullText: 'Diversification, keeping up with market trends, and using secure wallets and exchanges are some of the ways to invest safely in cryptocurrencies. Avoiding scams and being aware of regulatory changes are also crucial aspects of safe cryptocurrency investment.',
            date: 'May 20, 2024',
        },
        {
            id: 6,
            title: 'Blockchain Technology: Beyond Cryptocurrencies',
            summary: 'An overview of blockchain technology and its applications beyond cryptocurrencies. Blockchain is a distributed ledger technology that has the potential to revolutionize various industries.',
            fullText: 'Apart from powering cryptocurrencies, blockchain technology can be used in supply chain management, healthcare, finance, and voting systems. Its ability to provide transparency, security, and immutability makes it a valuable tool for various applications.',
            date: 'May 15, 2024',
        },
    ];

    return (
        <div className="blog-container">
            <h2>Latest Blog Posts</h2>
            <div className="blog-grid">
                {blogPosts.map(post => (
                    <div key={post.id} className="blog-post">
                        <h3>{post.title}</h3>
                        <p className="blog-summary">
                            {expandedPost === post.id ? post.summary + ' ' + post.fullText : post.summary}
                        </p>
                        <p className="blog-date">{post.date}</p>
                        <button onClick={() => toggleReadMore(post.id)} className="read-more">
                            {expandedPost === post.id ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
