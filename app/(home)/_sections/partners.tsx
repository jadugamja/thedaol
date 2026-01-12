import Image from "next/image";

const PARTNERS = [
  { name: "국회", image: "/images/ci/national-assembly.webp" },
  { name: "함께 만드는 세상", image: "/images/ci/together.webp" },
  { name: "NH농축협", image: "/images/ci/nh.webp" },
  { name: "BNK부산은행", image: "/images/ci/bnk.webp" },
  { name: "Posco DX", image: "/images/ci/posco.webp" },
  { name: "LG CNS", image: "/images/ci/lg-cns.webp" },
  { name: "Hyundai Card", image: "/images/ci/hyundai-card.webp" },
  { name: "KT DS", image: "/images/ci/kt-ds.webp" },
]

export default function HomePartners() {
  return (
    <section
      className="relative z-30 py-24 bg-surface-light border-t border-gray-100"
      id="clients"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main font-display">
            Our Partners
          </h2>
          <p className="text-text-sub text-lg mt-4 max-w-2xl mx-auto">
            최고의 기술력과 신뢰를 바탕으로 대한민국을 대표하는 기업들과
            함께하고 있습니다.
          </p>
        </div>
        <div className="relative w-full overflow-hidden group">
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background-light to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background-light to-transparent z-10 pointer-events-none"></div>
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 gap-16 animate-marquee items-center min-w-full px-8">
              {PARTNERS.map(({ name, image}) => (
                <Image
                  key={name}
                  alt={name}
                  className="h-32 w-44 bg-white p-4 rounded-2xl border border-gray-100 transition-all duration-300 object-contain flex items-center justify-center"
                  src={image}
                  width={176}
                  height={128}
                />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="flex shrink-0 gap-16 animate-marquee items-center min-w-full px-8"
            >
              {PARTNERS.map(({ name, image}) => (
                <Image
                  key={name}
                  alt={name}
                  className="h-32 w-44 bg-white p-4 rounded-2xl border border-gray-100 transition-all duration-300 object-contain flex items-center justify-center"
                  src={image}
                  width={176}
                  height={128}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
