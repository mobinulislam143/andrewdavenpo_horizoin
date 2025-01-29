"use client"

import Image from "next/image"
import React, { useState } from "react"
import { IoIosArrowForward } from "react-icons/io";

import books from '@/assets/home/book.png'
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Link from "next/link";
import { useGetAllBooksQuery } from "@/redux/api/bookApi";



const coursess = [
    {
        id: 1,
        title: "English Textbook for Class 12",
        discountPrice: "170",
        OldPrice: "200",
        image: books,
    },
    {
        id: 2,
        title: "English Textbook for Class 12",
        discountPrice: "170",
        OldPrice: "200",
        image: books,
    },
    {
        id: 3,
        title: "English Textbook for Class 12",
        discountPrice: "170",
        OldPrice: "200",
        image: books,
    },
    {
        id: 4,
        title: "English Textbook for Class 12",
        discountPrice: "170",
        OldPrice: "200",
        image: books,
    },

]

export default function Shop() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const { data, isLoading } = useGetAllBooksQuery(undefined)
    const books = data?.data || []
    console.log(data?.data);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === books.length - 3 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? books.length - 3 : prev - 1))
    }

    return (
        <div className=" bg-white mx-auto px-4 py-[80px] sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-[38px] font-bold text-gray-900 mb-2">Our Shop</h1>
                    <p className="text-lg text-[#807D7D]">Find Everything You Need in One Place</p>
                </div>

                <div className="relative overflow-hidden px-10">
                    {/* Previous Button */}
                    <div
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Previous slide"
                    >
                        <IoIosArrowBack />

                    </div>

                    {/* Slider Container */}
                    <div
                        className="flex transition-transform duration-300 pb-[20px] ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / 3)}%)`,
                        }}
                    >
                        {books.map((book: any) => (
                            <div key={book.id} className="flex-none w-full md:w-1/2 lg:w-1/3 px-2">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="relative pb-[56.25%]">
                                        <Image
                                            height={100 } width={100 }
                                            src={book?.thumbImage}
                                            alt={book?.name}
                                            className="absolute top-0 left-0 w-full h-full object-cover"
                                        />
                                        <div className="w-[50px] h-[50px] p-2 rounded-full z-[1000] absolute top-8 cursor-pointer right-2 transform -translate-y-1/2 bg-[#535252fc] hover:bg-[#434141fc] flex items-center justify-center">
                                            <HiOutlineShoppingCart className="text-white text-[24px]" />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-[#807D7D] mb-4 line-clamp-2">{book?.name}</h3>

                                        <div className="flex gap-4 py-[20px] items-center">
                                            <h2 className="text-black text-[20px]">$ {book?.discountPrice}</h2>
                                            <h2 className="text-[18px] text-[#807D7D]"><del>${book?.price}</del></h2>
                                        </div>


                                        <Link href={`/productDetails/${book?.id}`} className="w-full bg-bg_primary hover:bg-gray-700 text-white py-3 px-6  block text-center rounded-md transition-colors duration-200">
                                            Order Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <div
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Next slide"
                    >
                        <IoIosArrowForward />

                    </div>
                </div>
            </div>
        </div>
    )
}