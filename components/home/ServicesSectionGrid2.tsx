import ServicesData from "@/data/ServicesData";
import Image from "next/image";
import Link from "next/link";

const ServicesSectionGrid2 = () => {
    return (
        <section className="py-20 bg-zinc-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Οι Υπηρεσίες μας
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {ServicesData.map((service) => (
                        <Link
                            href="/services"
                            key={service.id}
                            className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 group overflow-hidden transition-all duration-300"
                        >
                            <div className="relative h-48 w-full md:w-48 lg:w-64 flex-shrink-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionGrid2;