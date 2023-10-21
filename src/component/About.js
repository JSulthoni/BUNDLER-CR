import React from 'react';

const About = () => {
    return (
        <>
        <article className='abt-art'>
            <div className='abt-1st flexcol'>
                <h3>Welcome to <span>BUNDLER</span>: Your Global Shopping Hub!</h3>
                <p>At <span>BUNDLER</span>, we've reimagined the way you shop online. We understand the thrill of discovering fantastic products from around the world and the convenience of having them delivered to your doorstep. That's why we've designed a platform that not only connects you to every major e-commerce store across the globe but also lets you bundle items from different places and buy them all in one go.</p>
            </div>
            <div className='abt-3rd flexcol'>
                {/* <p>
                <span>BUNDLER</span> is more than just an online shop; it's your gateway to a world of shopping possibilities. We're here to redefine convenience, minimize shipping delays, and make global shopping an enjoyable experience.
                </p> */}
                <p>
                Discover the future of online shopping with <span>BUNDLER</span>. 
                </p>
                <a className='clickable' href='#main'>Start bundling your favorites today!</a>
            </div>
        </article>
        </>
    );
}

export default About;
