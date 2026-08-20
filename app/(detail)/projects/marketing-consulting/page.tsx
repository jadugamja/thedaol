import ProjectPageIntro from "../_components/project-page-intro";

const CONSULTING_STEPS = [
  {
    number: "01",
    title: "현황 진단",
    description:
      "운영 중인 채널과 콘텐츠, 캠페인 현황을 확인하고 개선이 필요한 지점을 정리합니다.",
  },
  {
    number: "02",
    title: "고객과 메시지 정리",
    description:
      "주요 고객군과 제공 가치를 구분하고 채널별로 전달할 핵심 메시지를 구성합니다.",
  },
  {
    number: "03",
    title: "실행 계획 수립",
    description:
      "콘텐츠와 캠페인의 우선순위, 일정, 운영 역할을 포함한 실행안을 정리합니다.",
  },
  {
    number: "04",
    title: "측정 기준 설정",
    description:
      "목표에 맞는 지표와 점검 주기를 정해 실행 결과를 일관되게 확인할 수 있도록 합니다.",
  },
] as const;

const REVIEW_SCOPES = [
  ["채널", "웹사이트와 보유 채널의 역할 및 연결 구조"],
  ["콘텐츠", "고객 여정에 맞춘 주제와 메시지 체계"],
  ["운영", "실행 일정, 담당 역할, 성과 점검 기준"],
] as const;

export default function MarketingConsultingPage() {
  return (
    <div className="space-y-20">
      <section>
        <ProjectPageIntro
          eyebrow="Marketing"
          title="마케팅 컨설팅"
          description="시장과 고객, 채널 운영 현황을 함께 살펴보고 조직이 실행하고 점검할 수 있는 마케팅 과제를 정리합니다."
        />

        <ol className="border-y border-slate-200">
          {CONSULTING_STEPS.map(({ number, title, description }) => (
            <li
              key={number}
              className="grid gap-3 border-b border-slate-200 py-7 last:border-b-0 sm:grid-cols-[4rem_11rem_1fr] sm:gap-5"
            >
              <span className="font-display text-sm font-semibold text-primary">
                {number}
              </span>
              <h3 className="font-bold text-text-main break-keep">{title}</h3>
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
            Scope
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <h3 className="mb-8 text-2xl font-bold text-text-main">주요 검토 범위</h3>
        <dl className="border-y border-slate-200">
          {REVIEW_SCOPES.map(([title, description]) => (
            <div
              key={title}
              className="grid gap-2 border-b border-slate-200 py-6 last:border-b-0 sm:grid-cols-[15rem_1fr] sm:gap-5"
            >
              <dt className="font-bold text-text-main">{title}</dt>
              <dd className="text-sm leading-relaxed text-text-sub break-keep">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
