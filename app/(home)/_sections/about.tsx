import Image from "next/image";

export default function HomeAbout() {
  return (
    <section
      className="py-24 bg-white dark:bg-paper-dark relative overflow-hidden"
      id="about"
    >
      <div className="absolute top-20 left-80 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 font-display">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              기술 그 이상의 가치,
              <br />
              <span className="text-[#66748d] dark:text-gray-600">
                사람을 향한 혁신
              </span>
            </h3>
            <div className="text-text-sub text-lg leading-relaxed space-y-6 font-body break-keep">
              <p>
                더다올디앤씨는 고객의 비즈니스 환경에 최적화된 IT 솔루션을
                제공합니다.
              </p>
              <p>
                {"단순한 개발을 넘어 "}
                <strong className="text-text-main font-bold relative inline-block">
                  <span className="relative z-10">안정적인 SI/SM</span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-primary/20 -z-10" />
                </strong>
                {" 서비스와 "}
                <br />
                <strong className="text-text-main font-bold relative inline-block">
                  <span className="relative z-10">AI 기술 도입</span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-accent/20 -z-10" />
                </strong>
                을 통해 기업의 디지털 경쟁력을 강화합니다.
              </p>
              <p>
                기술의 난이도가 아닌 고객이 얻게 될 가치를 최우선으로 생각하며
                신뢰할 수 있는 파트너로서 함께 성장합니다.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 -right-0 h-[29.5rem] w-full bg-gradient-to-br from-white to-gray-400/10 rounded-3xl -z-10 transform rotate-2" />
            <div className="relative h-[29.5rem] w-full aspect-[4/5] bg-transparent overflow-hidden rounded-3xl shadow-sm">
              <Image
                alt="Meeting in office"
                className="size-full object-contain grayscale contrast-100 rounded-md"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                width={800}
                height={1000}
              />
              <div className="absolute top-[7.2rem] left-[10.5rem] w-1/5 h-1/6 bg-primary mix-blend-multiply opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
