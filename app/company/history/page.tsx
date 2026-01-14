import DetailHero from "@/components/layout/detail/hero";
import Sidebar from "@/components/layout/sidebar";
import { COMPANY_MENU } from "@/constants/menu";

const HISTORY = [
  {
    year: "2025",
    events: [
      "09. 국회 e-의안시스템 차세대 분석/설계",
    ],
  },
  {
    year: "2024",
    events: [
      "12. 관세청 상용솔루션 성능 및 기능 검증",
      "04. SNET 중고차 및 강원랜드 유지보수",
    ],
  },
  {
    year: "2023",
    events: [
      "11. SNET 강원랜드 유지보수",
      "06. CBTI 진단 시스템 구축",
      "03. 사회연대은행 구축 제안",
    ],
  },
  {
    year: "2022",
    events: [
      "08. 국회입안지원 시스템 고도화 구축",
      "07. 인디에프 통합관리 시스템 연계 수행",
      "06. 주식회사 더다올디앤씨 설립"],
  },
];

export default function CompanyHistoryPage() {
  return (
    <>
      <DetailHero
        imgSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
        title="History"
        description="더다올디앤씨가 걸어온 길과 앞으로 나아갈 비전을 소개합니다. 끊임없는 도전과 혁신으로 성장해왔습니다."
      />
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16">
        <Sidebar
          title="Company"
          menu={COMPANY_MENU}
          current="/company/history"
        />

        {/* Main Content - Timeline */}
        <section className="flex-1">
          <div className="relative pl-8 border-l-2 border-primary/20">
            <div className="absolute -left-[9px] top-0 size-4 bg-primary rounded-full ring-4 ring-white"></div>

            <div className="space-y-12">
              {HISTORY.map(({ year, events }) => (
                <div key={year} className="group">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-start">
                    <span className="text-xl font-bold text-text-main font-display min-w-[3rem]">
                      {year}
                    </span>
                    <ul className="space-y-3 text-text-sub font-pretendard flex-1">
                      {events.map((event, idx) => {
                        const match = event.match(/^(\d{2})\.\s*(.+)$/);
                        const month = match ? match[1] : null;
                        const description = match ? match[2] : event;

                        return (
                          <li key={idx} className="leading-relaxed">
                            {month ? (
                              <>
                                <span className="text-slate-600 font-semibold mr-2">{month}월</span>
                                <span>{description}</span>
                              </>
                            ) : (
                              <span>{event}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
