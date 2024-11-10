import React from 'react'
import why from '../assets/why.png'
import { IoIosCheckmark } from "react-icons/io";

const WhyUs = () => {
  return (
    <div className='py-20 px-20'>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className='py-10'>
                <span className='text-xl'>Why Choose Us?</span>
                <h1 className='text-5xl font-semibold'>Reasons to Choose Our Cakes</h1>
                <p className='mt-2 text-neutral-500'>Discover why our cakes are the perfect choice for any occasion. From premium ingredients to custom designs, we ensure every bite is a delight! Our cakes are crafted with love and attention to detail, making each one a unique masterpiece. With fast delivery and exceptional service, we promise to make your celebrations even sweeter!</p>
                <div className='mt-10'>
                    <div className='flex items-center space-x-4 my-4'>
                        <div>
                            <IoIosCheckmark className='text-4xl text-green-600' />
                        </div>
                        <div>
                            <h1 className='font-semibold text-xl'>Premium Quality Ingredients</h1>
                            <p className='text-neutral-500 text-md'>We use only the best ingredients to create fresh, delicious cakes.</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4 my-4'>
                        <div>
                            <IoIosCheckmark className='text-4xl text-green-600' />
                        </div>
                        <div>
                            <h1 className='font-semibold text-xl'>Custom Designs for Every Occasion</h1>
                            <p className='text-neutral-500 text-md'>Tailor cakes to your needs with personalized designs for any event.</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4 my-4'>
                        <div>
                            <IoIosCheckmark className='text-4xl text-green-600' />
                        </div>
                        <div>
                            <h1 className='font-semibold text-xl'>Fast & Reliable Delivery</h1>
                            <p className='text-neutral-500 text-md'>Enjoy timely delivery, ensuring your cake arrives fresh and on time.</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4 my-4'>
                        <div>
                            <IoIosCheckmark className='text-4xl text-green-600' />
                        </div>
                        <div>
                            <h1 className='font-semibold text-xl'>Outstanding Customer Service</h1>
                            <p className='text-neutral-500 text-md'>Our team is here to assist and ensure a smooth, hassle-free experience.</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4 my-4'>
                        <div>
                            <IoIosCheckmark className='text-4xl text-green-600' />
                        </div>
                        <div>
                            <h1 className='font-semibold text-xl'>Affordable Pricing</h1>
                            <p className='text-neutral-500 text-md'>Enjoy premium cakes without breaking the bank, with great value for every order.</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4 my-4'>
                        <div>
                            <IoIosCheckmark className='text-4xl text-green-600' />
                        </div>
                        <div>
                            <h1 className='font-semibold text-xl'>Wide Selection of Flavors</h1>
                            <p className='text-neutral-500 text-md'>Choose from a variety of mouth-watering flavors to suit every taste and preference.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={why} alt="Why choose us image" className='rounded' />
            </div>
        </div>
    </div>
  )
}

export default WhyUs