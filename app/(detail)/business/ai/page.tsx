import DetailHero from "@/components/layout/detail/hero";
import Sidebar from "@/components/layout/sidebar";
import { BUSINESS_MENU } from "@/constants/menu";

const AI_CAPABILITIES = [
  {
    title: "Document Intelligence",
    label: "문서 인텔리전스",
    description:
      "다양한 형식의 문서를 읽을 수 있는 데이터로 바꾸고, 검색과 생성에 적합한 지식 구조로 정리합니다.",
    details: ["OCR·문서 구조 인식", "청킹·임베딩", "문서 메타데이터 자동분류"],
  },
  {
    title: "Language & Retrieval",
    label: "언어 모델과 검색",
    description:
      "로컬 LLM과 벡터 검색을 연결해 질문의 맥락을 이해하고, 근거 문서를 바탕으로 답변을 생성합니다.",
    details: ["로컬 LLM·프롬프트 설계", "RAG 문서 검색", "질의응답·자동요약"],
  },
  {
    title: "AI Quality Operations",
    label: "AI 품질 운영",
    description:
      "검색과 생성 결과를 정해진 평가 기준으로 점검하고, 운영 과정의 변화를 추적해 품질을 지속적으로 개선합니다.",
    details: ["AI 평가 데이터셋", "검색 정확도·답변 품질 평가", "모델·프롬프트 이력 관리"],
  },
] as const;

const AI_PROCESS_STEPS = [
  {
    title: "Consulting",
    label: "AI 과제 정의",
    description:
      "업무 흐름과 문서 유형을 분석해 AI 적용 범위를 정하고, 사용 시나리오와 품질 목표를 구체화합니다.",
    details: ["업무·사용자 시나리오 분석", "데이터와 LLM 적용성 검토", "정확도·응답 품질 기준 수립"],
  },
  {
    title: "Modeling",
    label: "데이터·모델 설계",
    description:
      "문서가 AI 지식으로 변환되는 흐름을 설계하고, 과제에 맞는 로컬 LLM과 검색 구조를 구성합니다.",
    details: ["OCR·전처리·임베딩 설계", "Vector DB 검색 구조", "로컬 LLM·프롬프트 설계"],
  },
  {
    title: "Development",
    label: "AI 기능 구현",
    description:
      "RAG 검색과 생성 모델을 연결해 근거 기반 질의응답, 문서 요약, 자동분류 기능을 구현합니다.",
    details: ["RAG 문서 검색·질의응답", "업로드 문서 자동요약", "문서 유형·메타데이터 자동분류"],
  },
  {
    title: "Deployment",
    label: "AI 평가·운영",
    description:
      "실제 업무 기준으로 검색과 답변 품질을 평가하고, 모델과 프롬프트의 변경 이력을 관리합니다.",
    details: ["검색 정확도·근거 일치 평가", "환각·응답 안전성 점검", "품질 모니터링·지속 개선"],
  },
] as const;

export default function BusinessAiPage() {
  return (
    <>
      <DetailHero
        imgSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
        title="AI Solution"
        description="문서와 업무 데이터를 이해하고, 근거 있는 답변과 자동화 결과로 연결하는 AI 솔루션"
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-20 md:flex-row">
        <Sidebar title="Business" menu={BUSINESS_MENU} current="/business/ai" />

        <main className="min-w-0 grow space-y-24">
          <section aria-labelledby="ai-technology-heading">
            <SectionLabel>Core Technology</SectionLabel>
            <h2
              id="ai-technology-heading"
              className="mb-6 text-3xl font-bold text-text-main"
            >
              Advanced AI Tech
            </h2>
            <p className="mb-12 max-w-2xl break-keep text-text-sub leading-relaxed">
              문서를 읽고 찾고 답하는 전 과정을 하나의 AI 흐름으로 연결합니다.
              OCR·임베딩·로컬 LLM·RAG를 중심으로 설계하고, 요약과 분류
              결과를 품질 기준에 따라 검증합니다.
            </p>

            <ol className="border-y border-slate-300">
              {AI_CAPABILITIES.map((capability, index) => (
                <li
                  key={capability.title}
                  className="grid gap-4 border-b border-slate-200 py-8 last:border-b-0 md:grid-cols-[3.5rem_9rem_minmax(0,1fr)] md:gap-6"
                >
                  <p className="font-display text-sm font-semibold tabular-nums tracking-widest text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="break-keep text-sm font-semibold text-text-main">
                    {capability.label}
                  </p>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-text-main">
                      {capability.title}
                    </h3>
                    <p className="break-keep text-sm leading-7 text-text-sub">
                      {capability.description}
                    </p>
                    <DetailList items={capability.details} />
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="ai-process-heading">
            <SectionLabel tone="secondary">Implementation</SectionLabel>
            <h2
              id="ai-process-heading"
              className="mb-6 text-3xl font-bold text-text-main"
            >
              AI Development Process
            </h2>
            <p className="mb-12 max-w-2xl break-keep text-text-sub leading-relaxed">
              AI 과제 정의부터 데이터·모델 설계, 핵심 기능 구현, 품질 평가와
              운영까지 네 단계로 진행합니다.
            </p>

            <ol className="border-t border-slate-300">
              {AI_PROCESS_STEPS.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-4 border-b border-slate-300 py-9 md:grid-cols-[4.5rem_10rem_minmax(0,1fr)] md:gap-6"
                >
                  <p className="font-display text-3xl font-light tabular-nums text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <p className="mb-2 break-keep text-sm font-semibold text-secondary">
                      {step.label}
                    </p>
                    <h3 className="break-keep text-lg font-bold text-text-main">
                      {step.title}
                    </h3>
                  </div>
                  <div>
                    <p className="break-keep text-sm leading-7 text-text-sub">
                      {step.description}
                    </p>
                    <DetailList items={step.details} />
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </main>
      </div>
    </>
  );
}

function SectionLabel({
  children,
  tone = "primary",
}: {
  children: string;
  tone?: "primary" | "secondary";
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span
        className={`font-display text-sm font-bold uppercase tracking-widest ${
          tone === "primary" ? "text-primary" : "text-secondary"
        }`}
      >
        {children}
      </span>
      <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
    </div>
  );
}

function DetailList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 break-keep text-sm leading-6 text-slate-600"
        >
          <span className="text-slate-400" aria-hidden="true">
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
