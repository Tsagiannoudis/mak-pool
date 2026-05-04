"use client";

import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
    const galleryImages = [
        { id: 1, src: "/gallery1.jpg", alt: "Πισίνα 1" },
        { id: 2, src: "/gallery2.jpg", alt: "Πισίνα 2" },
        { id: 3, src: "/gallery3.jpg", alt: "Πισίνα 3" }, 
        { id: 4, src: "/gallery4.jpg", alt: "Πισίνα 4" }, 
        { id: 5, src: "/gallery5.jpg", alt: "Πισίνα 5" }, 
        { id: 6, src: "/gallery6.jpg", alt: "Πισίνα 6" }, 
        { id: 7, src: "/gallery7.jpg", alt: "Πισίνα 7" }, 
        { id: 8, src: "/gallery8.jpg", alt: "Πισίνα 8" }, 
    ];

    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <section className="py-24 bg-zinc-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Η Γκαλερί μας
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="relative h-128 w-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                priority={index < 4} // Prioritize loading for the first few images
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)} // Close modal when clicking outside image
                >
                    <div className="relative max-w-3xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            width={800} // Adjust as needed for desired max size
                            height={600} // Adjust as needed for desired max size
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;