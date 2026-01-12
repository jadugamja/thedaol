import Image from "next/image";

export default function PortfolioCard({
    title,
    description,
    image,
    category
}: {
    title: string;
    description: string;
    image: string;
    category: string;
}) {
  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-52 overflow-hidden bg-gray-100 rounded-t-xl">
        <div
          className="absolute inset-0 bg-center transition-transform duration-700 group-hover:scale-110 rounded-t-xl"
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
        <div className="absolute top-4 left-4">
          {/* badge */}
          <span className="px-3 py-1 bg-white/90 text-text-main text-xs font-bold rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-text-main mb-2">
          {title}
        </h3>
        <p className="text-text-sub text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  )
}