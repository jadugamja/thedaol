export default function DetailHero({ imgSrc, title, description }: { imgSrc: string; title: string; description: string }) {
  return (
    <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden max-h-[352px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800/90 mix-blend-multiply"></div>
        <img
          src={imgSrc}
          alt={title}
          className="size-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 selection:bg-zinc-100 selection:text-[#131f1e]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
          {title}
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-pretendard">
          {description}
        </p>
      </div>
    </section>
  );
}