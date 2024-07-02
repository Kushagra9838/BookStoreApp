import React from 'react'
import list from '../../public/list.json'
//CSS React-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';

export default function FreeBooks() {
  const filterData = list.filter((data) =>  data.category === "Free" );
  console.log(filterData);
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque corporis, labore voluptas possimus deserunt amet sint aperiam aut obcaecati ex rem sunt. Veritatis, asperiores!</p>
        </div>
        <div className='space-x-4 pt-6'>
          <Slider {...settings}>
            {filterData.map((item)=>(
              <Card item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
