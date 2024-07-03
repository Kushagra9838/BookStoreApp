import React, { useEffect, useState } from 'react'
import axios from 'axios'
//CSS React-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';

export default function FreeBooks() {

  const [book, setBook] = useState([]);

  useEffect(()=>{

    const getBook = async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data.filter((data) =>  data.category === "Free" ));
      }catch(error){
        console.log("Error : ", error);
      }
    }
    getBook();
  }, [])

  //setting for slider from React-slick
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
          <p>Explore a world of free books on our website! Dive into a variety of genres and find your next favorite read without spending a dime.

</p>
        </div>
        <div className='space-x-4 pt-6'>
          <Slider {...settings}>
            {book.map((item)=>(
              <Card item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
