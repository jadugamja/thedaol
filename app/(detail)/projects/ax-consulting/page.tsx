import ProjectPageIntro from "../_components/project-page-intro";

const CONSULTING_AREAS = [
  {
    label: "Assess",
    title: "업무 현황 진단",
    description:
      "현재 업무 흐름과 데이터 보유 현황을 살펴보고 반복 작업과 개선 필요 영역을 정리합니다.",
  },
  {
    label: "Define",
    title: "AI 적용 과제 정의",
    description:
      "업무 영향도와 실행 난이도를 기준으로 적용 후보를 비교하고 우선 검토 과제를 선정합니다.",
  },
  {
    label: "Plan",
    title: "실행 로드맵 수립",
    description:
      "단계별 추진 범위, 필요한 데이터와 시스템, 검증 기준을 포함한 실행 계획을 구성합니다.",
  },
  {
    label: "Operate",
    title: "운영 기준 정리",
    description:
      "사용 권한, 품질 점검, 변경 관리 등 도입 이후 필요한 운영 원칙을 함께 검토합니다.",
  },
] as const;

const DELIVERABLES = [
  "현황과 주요 개선 과제 정리",
  "AI 적용 후보 및 우선순위 기준",
  "단계별 실행 로드맵",
  "데이터·시스템·운영 검토 항목",
] as const;

export default function AxConsultingPage() {
  return (
    <div className="space-y-20">
      <section>
        <ProjectPageIntro
          eyebrow="AI Transformation"
          title="AX Consulting"
          description="업무와 데이터의 현재 상태를 기준으로 AI 적용 가능 영역을 찾고, 검증 가능한 과제와 단계별 실행 계획을 정리합니다."
        />

        <ol className="border-y border-slate-200">
          {CONSULTING_AREAS.map(({ label, title, description }, index) => (
            <li
              key={label}
              className="grid gap-3 border-b border-slate-200 py-7 last:border-b-0 sm:grid-cols-[4rem_11rem_1fr] sm:gap-5"
            >
              <span className="font-display text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-widest text-text-sub">
                  {label}
                </span>
                <h3 className="mt-1 font-bold text-text-main break-keep">
                  {title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-text-sub break-keep">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="mb-7 flex items-center gap-4">
          <span className="font-display text-sm font-bold uppercase tracking-widest text-secondary">
            Deliverables
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <h3 className="mb-8 text-2xl font-bold text-text-main">검토 결과</h3>
        <ul className="border-y border-slate-200 text-sm text-text-sub">
          {DELIVERABLES.map((item, index) => (
            <li
              key={item}
              className="grid grid-cols-[4rem_1fr] border-b border-slate-200 py-5 last:border-b-0"
            >
              <span className="font-display text-xs font-semibold text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="break-keep">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
