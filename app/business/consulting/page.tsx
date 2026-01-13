import DetailHero from "@/components/layout/detail/hero";
import Sidebar from "@/components/layout/sidebar";
import { BUSINESS_MENU } from "@/lib/menu";
import { MdChevronRight } from "react-icons/md";

export default function BusinessConsultingPage() {
  return (
    <>
      <DetailHero
        imgSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
        title="IT Consulting"
        description="성공적인 디지털 전환을 위한 최적의 IT 전략과 로드맵을 제시합니다"
      />

      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 items-start min-h-124">
        <Sidebar title="Business" menu={BUSINESS_MENU} current="/business/consulting" />

        <div className="flex-1 min-w-0 space-y-20">
          {/* Consulting Fields */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary font-bold tracking-widest uppercase text-sm font-display">
                Service Areas
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <h2 className="text-3xl font-bold text-text-main mb-6">
              Consulting Service
            </h2>
            <p className="text-text-sub leading-relaxed mb-10">
              기업의 비즈니스 목표 달성을 위해 IT 현황을 진단하고, 최신 기술
              트렌드를 반영한 미래 모델과 실행 계획을 수립합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ISP */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:border-primary/30 group">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-[2px]" />
                  ISP (정보전략계획)
                </h3>
                <p className="text-sm text-text-sub leading-relaxed mb-4">
                  경영 전략과 연계된 중장기 정보화 마스터플랜을 수립합니다.
                </p>
                <ul className="text-sm text-text-sub space-y-2 list-disc pl-5">
                  <li>정보화 환경 분석</li>
                  <li>미래 모델 설계</li>
                  <li>이행 계획 수립</li>
                </ul>
              </div>

              {/* BPR/PI */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:border-primary/30 group">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-3">
                  <span className="w-2 h-8 bg-secondary rounded-[2px]" />
                  BPR / PI (업무혁신)
                </h3>
                <p className="text-sm text-text-sub leading-relaxed mb-4">
                  비효율적인 업무 프로세스를 재설계하여 생산성을 극대화합니다.
                </p>
                <ul className="text-sm text-text-sub space-y-2 list-disc pl-5">
                  <li>As-Is 프로세스 진단</li>
                  <li>To-Be 프로세스 정의</li>
                  <li>변화 관리(Change Management)</li>
                </ul>
              </div>

              {/* EA/ITA */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:border-primary/30 group">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gray-800 rounded-[2px]" />
                  EA / ITA (아키텍처)
                </h3>
                <p className="text-sm text-text-sub leading-relaxed mb-4">
                  복잡한 IT 자원을 체계적으로 관리하기 위한 아키텍처를
                  수립합니다.
                </p>
                <ul className="text-sm text-text-sub space-y-2 list-disc pl-5">
                  <li>비즈니스/데이터/앱/기술 아키텍처</li>
                  <li>상호 운용성 확보</li>
                  <li>IT 거버넌스 체계 수립</li>
                </ul>
              </div>

              {/* PMO */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:border-primary/30 group">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gray-400 rounded-[2px]" />
                  PMO (프로젝트 관리)
                </h3>
                <p className="text-sm text-text-sub leading-relaxed mb-4">
                  프로젝트의 성공적인 수행을 위한 전문적인 관리 서비스를
                  제공합니다.
                </p>
                <ul className="text-sm text-text-sub space-y-2 list-disc pl-5">
                  <li>진척/위험/품질 관리</li>
                  <li>이슈 해결 지원</li>
                  <li>산출물 관리</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Methodology */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm font-display">
                Methodology
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <h2 className="text-3xl font-bold text-text-main mb-12">
              Consulting Methodology
            </h2>

            <div className="relative bg-surface-light rounded-3xl p-8 lg:p-12 border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Phase 1 */}
                <div className="text-center group">
                  <div className="size-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 mx-auto text-3xl group-hover:scale-110 transition-transform duration-300">
                    🔍
                  </div>
                  <h4 className="font-bold text-lg mb-3">
                    1. 환경 분석 (Analyze)
                  </h4>
                  <p className="text-sm text-text-sub leading-relaxed">
                    대내외 환경 분석<br />
                    현황 진단 및 이슈 도출<br />
                    벤치마킹
                  </p>
                </div>

                {/* Arrow for Desktop */}
                <div className="hidden md:flex absolute top-1/2 left-[26%] -translate-y-1/2 text-gray-300">
                  <MdChevronRight className="text-4xl" />
                </div>

                {/* Phase 2 */}
                <div className="text-center group">
                  <div className="size-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 mx-auto text-3xl group-hover:scale-110 transition-transform duration-300">
                    💡
                  </div>
                  <h4 className="font-bold text-lg mb-3">
                    2. 목표 수립 (Design)
                  </h4>
                  <p className="text-sm text-text-sub leading-relaxed">
                    비전 및 전략 수립<br />
                    목표 모델(To-Be) 설계<br />
                    Gap 분석
                  </p>
                </div>

                {/* Arrow for Desktop */}
                <div className="hidden md:flex absolute top-1/2 right-[28%] -translate-y-1/2 text-gray-300">
                  <MdChevronRight className="text-4xl" />
                </div>

                {/* Phase 3 */}
                <div className="text-center group">
                  <div className="size-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 mx-auto text-3xl group-hover:scale-110 transition-transform duration-300">
                    🚀
                  </div>
                  <h4 className="font-bold text-lg mb-3">3. 이행 계획 (Plan)</h4>
                  <p className="text-sm text-text-sub leading-relaxed">
                    이행 로드맵 수립<br />
                    소요 예산 및 인력 산정<br />
                    기대 효과 분석
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
