import ProjectPageIntro from "../_components/project-page-intro";

const REVIEW_ITEMS = [
  {
    title: "데이터와 보안 경계",
    description:
      "외부 반출이 제한된 데이터, 사용자 권한, 보안 정책을 먼저 확인해 운영 범위를 정리합니다.",
  },
  {
    title: "업무 적합성",
    description:
      "문서 검색, 요약, 질의응답 등 적용 후보 업무를 구분하고 필요한 정확도와 응답 기준을 확인합니다.",
  },
  {
    title: "운영 환경",
    description:
      "예상 사용량과 응답 속도, 유지관리 조건을 기준으로 모델과 인프라 구성 방향을 검토합니다.",
  },
] as const;

const IMPLEMENTATION_STEPS = [
  ["01", "요구사항 확인", "적용 업무와 보안·운영 제약을 정리합니다."],
  ["02", "데이터 점검", "활용할 문서와 데이터의 품질 및 접근 권한을 확인합니다."],
  ["03", "구성안 설계", "업무 범위에 맞는 모델과 인프라 구성안을 설계합니다."],
  ["04", "검증 기준 수립", "응답 품질, 보안, 운영 관점의 검증 항목을 정의합니다."],
] as const;

export default function LocalLlmPage() {
  return (
    <div className="space-y-20">
      <section>
        <ProjectPageIntro
          eyebrow="Technology"
          title="로컬 LLM"
          description="조직 내부 환경에서 언어 모델을 운영할 때 필요한 데이터, 보안, 인프라 조건을 검토하고 업무에 맞는 적용 범위를 설계합니다."
        />

        <div className="border-y border-slate-200">
          {REVIEW_ITEMS.map(({ title, description }, index) => (
            <article
              key={title}
              className="grid gap-3 border-b border-slate-200 py-7 last:border-b-0 sm:grid-cols-[4rem_11rem_1fr] sm:gap-5"
            >
              <span className="font-display text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-bold text-text-main break-keep">{title}</h3>
              <p className="text-sm leading-relaxed text-text-sub break-keep">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-7 flex items-center gap-4">
          <span className="font-display text-sm font-bold uppercase tracking-widest text-secondary">
            Review Process
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <h3 className="mb-8 text-2xl font-bold text-text-main">적용 검토 절차</h3>

        <ol className="border-y border-slate-200">
          {IMPLEMENTATION_STEPS.map(([number, title, description]) => (
            <li
              key={number}
              className="grid gap-3 border-b border-slate-200 py-6 last:border-b-0 sm:grid-cols-[4rem_11rem_1fr] sm:gap-5"
            >
              <span className="font-display text-sm font-semibold text-primary">
                {number}
              </span>
              <h4 className="font-bold text-text-main break-keep">{title}</h4>
              <p className="text-sm leading-relaxed text-text-sub break-keep">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
