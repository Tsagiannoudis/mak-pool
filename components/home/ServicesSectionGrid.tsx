import ServicesData from "@/data/ServicesData";
import Image from "next/image";



const ServicesSectionGrid = () => {
    return (
        <section className="py-20 bg-zinc-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Οι Υπηρεσίες μας
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {ServicesData.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden"
                        >
                            <div className="relative h-128 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionGrid;