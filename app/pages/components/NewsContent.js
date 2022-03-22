import React from 'react';
import Link from 'next/link';

function News() {
  return (
    <>
      <div>
        <h2>CNPP NEWS</h2>
        <p>
          Get the latest news, updates and hear how a Community Navigator can
          help small businesses.
        </p>
        <div>
            {/* <input placeholder="Enter your email"></input> */}
            <button>Subscribe</button>
            {/* <p>Subscribed ✅</p> */}
        </div>
      </div>
    </>
  )
}

export default News
