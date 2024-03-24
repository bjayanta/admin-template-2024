'use client';

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link';
  

export default function AuthCarousel() {
    const slides = [
        {name: "Accounting", image: "slides/accounting.svg", description: null, url: "/"},
        {name: "E-Commerce", image: "slides/e-commerce.svg", description: null, url: "/"},
        {name: "E-Wallet", image: "slides/e-wallet.svg", description: null, url: "/"},
        {name: "Inventory", image: "slides/inventory.svg", description: "", url: "/"},
        {name: "Manufacturing", image: "slides/manufacturing.svg", description: "", url: "/"},
        {name: "Marketing Consulting", image: "slides/marketing-consulting.svg", description: "", url: "/"},
        {name: "POS", image: "slides/pos.svg", description: "", url: "/"},
    ]

    const myStyle = {
        backgroundImage: `url(/images/slides/accounting.jpg)`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <section>
            <Carousel plugins={[Autoplay({ delay: 5000 })]}>
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="h-screen flex flex-col justify-center items-center p-24">
                                <article className='w-1/2'>
                                    <Image 
                                        src={`/images/${slide.image}`} 
                                        alt="auth image" 
                                        width={360} 
                                        height={360} 
                                        className='mx-auto'
                                    />

                                    <h2 className="text-xl font-medium mt-6">{ slide.name }</h2>

                                    <p className='text-justify mt-4'>{ slide.description ?? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat consequuntur sapiente beatae sed ullam quas iste, aperiam provident quisquam fugit quaerat id nulla! In, ut? Quibusdam quasi fugiat odit accusantium?' }</p>

                                    <div className="mt-6">
                                        <Link 
                                            href={slide.url} 
                                            className='flex items-center text-indigo-600 text-sm transition hover:underline'
                                        >
                                            <span className="mr-2">Learn More</span>
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* 
                <CarouselPrevious />
                <CarouselNext /> 
                */}
            </Carousel>
        </section>
    )
}
