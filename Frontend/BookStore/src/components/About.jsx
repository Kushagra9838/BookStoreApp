import React from 'react'
import Navbar from './Navbar'

export default function About(){
    return (
      <>
      <div>
        <Navbar />
        <div className='dark:bg-slate-900 dark:text-white p-10 mt-14'>
            <div className='mt-6 space-y-2'>
            <h1 className="font-bold text-3xl ">About Us</h1>
            <p>Welcome to BookStore, your premier destination for discovering, purchasing, and reading books online. Our platform is designed for book lovers, offering a seamless and enjoyable experience from browsing to reading.</p>
            </div>
            <div className='mt-6 space-y-2'>
                <h3 className="font-bold text-lg">Our Mission</h3>
                <p>At BookStore, we believe in the power of literature to inspire, educate, and entertain. Our mission is to make books accessible to everyone, everywhere, and to create a vibrant community of readers and writers.</p>
            </div>
            <div className='mt-6 space-y-2'>
                <h3 className="font-bold text-lg">What We Offer</h3>
                <ol>
                    <li><span className='font-bold'>Extensive Collection:</span> Explore a wide range of books across various genres and categories. Whether you’re into fiction, non-fiction, mystery, romance, or sci-fi, we have something for everyone.</li>
                    <li><span className='font-bold'>User-Friendly Experience:</span> Our intuitive interface ensures you can easily find and purchase the books you love. With just a few clicks, you can start reading your favorite titles online.</li>
                    <li><span className='font-bold'>Secure and Reliable:</span> We prioritize your security and privacy. Our platform is built with state-of-the-art technologies to ensure your data is safe and your transactions are secure</li>
                    <li><span className='font-bold'>Community Engagement:</span> Join our community of book enthusiasts. Share reviews, participate in discussions, and connect with fellow readers and authors.</li>
                </ol>
            </div>
            <div className='mt-6 space-y-2'>
                <h3 className="font-bold text-lg">Our Technology</h3>
                <p>Powered by cutting-edge technologies like React and Node.js, BookStore delivers a fast, responsive, and reliable experience. We continually update our platform to bring you the best features and functionalities.</p>
            </div>
            <div className='mt-4 space-y-2'>
                <h3 className="font-bold text-lg">Join Us Today</h3>
                <p>Create an account today to start your literary journey with us. Whether you're looking to buy a new release, discover hidden gems, or simply enjoy reading online, BookStore is your go-to platform.</p>
            </div>
            <div className='mt-4'>
            <p >Thank you for choosing BookStore. Happy reading!</p>
            </div>
        </div>
        </div>
      </>
    )
}
