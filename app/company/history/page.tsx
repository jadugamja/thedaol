import DetailHero from "@/components/layout/detail/hero";
import Sidebar from "@/components/layout/sidebar";
import { COMPANY_MENU } from "@/lib/menu";

const HISTORY = [
  {
    year: "2025",
    events: [
      "지능형 AI 관제 솔루션 상용화",
      "공공기관 클라우드 전환 지원사업 주관기업 선정",
    ],
  },
  {
    year: "2024",
    events: [
      "AI 기반 금융 리스크 관리 시스템 고도화",
      "공공기관 차세대 시스템 구축 사업 수주",
    ],
  },
  {
    year: "2023",
    events: [
      "기업부설연구소 설립 및 벤처기업 인증",
      "자체 AI 솔루션 'Daol-AI' Beta 출시",
      "기술혁신형 중소기업(Inno-Biz) 인증 획득",
    ],
  },
  {
    year: "2022",
    events: ["주식회사 더다올디앤씨 설립"],
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
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16">
        <Sidebar title="Company" menu={COMPANY_MENU} current="/company/history" />

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
                      {events.map((event, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-2 size-1.5 bg-text-sub rounded-full shrink-0"></span>
                          <span>{event}</span>
                        </li>
                      ))}
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
