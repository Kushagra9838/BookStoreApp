import React from 'react'

export default function Card({ item }) {
    console.log(item);
    return (
        <>
            <div className='mt-4 my-3 pb-3'>
                <a href="">
                    <div className="card bg-white w-60 shadow-xl dark:bg-slate-900 dark:text-white">
                        <figure>
                            <img
                                src={item.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{item.title}</p>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline">${item.price}</div>
                                <div className="badge badge-outline text-black dark:text-white dark:hover:text-pink-500 hover:text-pink-500 duration-200 ">Buy Now</div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}
