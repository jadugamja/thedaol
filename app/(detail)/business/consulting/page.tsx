import DetailHero from "@/components/layout/detail/hero";
import Sidebar from "@/components/layout/sidebar";
import { BUSINESS_MENU } from "@/constants/menu";

const CONSULTING_SERVICES = [
  {
    number: "01",
    title: "ISP (정보전략계획)",
    description: "경영 전략과 연계된 중장기 정보화 마스터플랜을 수립합니다.",
    items: ["정보화 환경 분석", "미래 모델 설계", "이행 계획 수립"],
  },
  {
    number: "02",
    title: "BPR / PI (업무혁신)",
    description: "비효율적인 업무 프로세스를 재설계하여 생산성을 극대화합니다.",
    items: [
      "As-Is 프로세스 진단",
      "To-Be 프로세스 정의",
      "변화 관리(Change Management)",
    ],
  },
  {
    number: "03",
    title: "EA / ITA (아키텍처)",
    description: "복잡한 IT 자원을 체계적으로 관리하기 위한 아키텍처를 수립합니다.",
    items: [
      "비즈니스/데이터/앱/기술 아키텍처",
      "상호 운용성 확보",
      "IT 거버넌스 체계 수립",
    ],
  },
  {
    number: "04",
    title: "PMO (프로젝트 관리)",
    description: "프로젝트의 성공적인 수행을 위한 전문적인 관리 서비스를 제공합니다.",
    items: ["진척/위험/품질 관리", "이슈 해결 지원", "산출물 관리"],
  },
] as const;

const CONSULTING_PHASES = [
  {
    number: "01",
    title: "환경 분석",
    titleEn: "Analyze",
    items: ["대내외 환경 분석", "현황 진단 및 이슈 도출", "벤치마킹"],
  },
  {
    number: "02",
    title: "목표 수립",
    titleEn: "Design",
    items: ["비전 및 전략 수립", "목표 모델(To-Be) 설계", "Gap 분석"],
  },
  {
    number: "03",
    title: "이행 계획",
    titleEn: "Plan",
    items: ["이행 로드맵 수립", "소요 예산 및 인력 산정", "기대 효과 분석"],
  },
] as const;

export default function BusinessConsultingPage() {
  return (
    <>
      <DetailHero
        imgSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
        title="IT Consulting"
        description="성공적인 디지털 전환을 위한 최적의 IT 전략과 로드맵을 제시합니다"
      />

      <div className="mx-auto flex min-h-124 max-w-5xl flex-col items-start gap-16 px-6 py-20 md:flex-row">
        <Sidebar
          title="Business"
          menu={BUSINESS_MENU}
          current="/business/consulting"
        />

        <div className="min-w-0 flex-1 space-y-20">
          <section>
            <SectionLabel label="Service Areas" tone="primary" />
            <h2 className="mb-6 text-3xl font-bold text-text-main">
              Consulting Service
            </h2>
            <p className="mb-12 break-keep leading-relaxed text-text-sub">
              기업의 비즈니스 목표 달성을 위해 IT 현황을 진단하고, 최신 기술
              트렌드를 반영한 미래 모델과 실행 계획을 수립합니다.
            </p>

            <ol
              className="border-t border-slate-300"
              aria-label="컨설팅 서비스 분야"
            >
              {CONSULTING_SERVICES.map((service) => (
                <li
                  key={service.number}
                  className="grid gap-4 border-b border-slate-200 py-8 sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_1.1fr_1fr] lg:gap-6"
                >
                  <span className="font-display text-sm font-bold tabular-nums text-primary">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="mb-3 text-lg font-bold text-text-main">
                      {service.title}
                    </h3>
                    <p className="break-keep text-sm leading-relaxed text-text-sub">
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed text-text-sub sm:col-start-2 lg:col-start-auto">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          className="mt-[0.7em] h-px w-3 shrink-0 bg-slate-400"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <SectionLabel label="Methodology" tone="secondary" />
            <h2 className="mb-12 text-3xl font-bold text-text-main">
              Consulting Methodology
            </h2>

            <ol
              className="grid border-y border-slate-300 md:grid-cols-3"
              aria-label="컨설팅 수행 절차"
            >
              {CONSULTING_PHASES.map((phase, index) => (
                <li
                  key={phase.number}
                  className={`py-8 md:px-6 ${
                    index === 0
                      ? ""
                      : "border-t border-slate-200 md:border-l md:border-t-0"
                  }`}
                >
                  <span className="mb-8 block font-display text-sm font-bold tabular-nums text-secondary">
                    {phase.number}
                  </span>
                  <h3 className="mb-4 font-bold text-text-main">
                    {phase.title}
                    <span className="ml-2 text-sm font-normal text-text-sub">
                      {phase.titleEn}
                    </span>
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-text-sub">
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </>
  );
}

function SectionLabel({
  label,
  tone,
}: {
  label: string;
  tone: "primary" | "secondary";
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span
        className={`font-display text-sm font-bold uppercase tracking-widest ${
          tone === "primary" ? "text-primary" : "text-secondary"
        }`}
      >
        {label}
      </span>
      <div className="h-px flex-1 bg-gray-200" aria-hidden="true" />
    </div>
  );
}
