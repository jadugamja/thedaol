import DetailHero from "@/components/layout/detail/hero";
import Sidebar from "@/components/layout/sidebar";
import { BUSINESS_MENU } from "@/constants/menu";

const SYSTEM_INTEGRATIONS = [
  {
    number: "01",
    title: "금융 시스템",
    items: ["계정계/정보계 시스템", "비대면 채널 구축", "마이데이터 서비스"],
  },
  {
    number: "02",
    title: "공공 서비스",
    items: ["행정 업무 시스템", "대국민 포털 구축", "데이터 연계/통합"],
  },
  {
    number: "03",
    title: "기업 정보화",
    items: ["ERP / MES 구축", "그룹웨어/협업툴 구축", "모바일 오피스"],
  },
] as const;

const SYSTEM_MANAGEMENTS = [
  {
    number: "01",
    title: "통합 운영 관리",
    description:
      "SLA 기반의 체계적인 수준 관리 및 정기 점검을 통한 무중단 운영 지원",
  },
  {
    number: "02",
    title: "Help Desk 운영",
    description:
      "사용자 문의 신속 대응 및 기술 지원 제공, VOC 분석을 통한 서비스 개선",
  },
  {
    number: "03",
    title: "보안 관리",
    description: "최신 보안 패치 적용 및 취약점 점검을 통한 시스템 보안성 강화",
  },
  {
    number: "04",
    title: "성능 최적화",
    description:
      "DB 튜닝, 애플리케이션 리팩토링 등 지속적인 성능 개선 활동 수행",
  },
] as const;

export default function BusinessSiSmPage() {
  return (
    <>
      <DetailHero
        imgSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
        title="System Integration & Management"
        description="고객의 비즈니스 가치를 극대화하는 맞춤형 시스템 구축 및 운영 서비스"
      />

      <div className="mx-auto flex min-h-124 max-w-5xl flex-col gap-16 px-6 py-20 md:flex-row">
        <Sidebar
          title="Business"
          menu={BUSINESS_MENU}
          current="/business/si-sm"
        />

        <div className="min-w-0 flex-1 space-y-20">
          <section>
            <SectionLabel label="Service 01" tone="primary" />
            <h2 className="mb-6 text-3xl font-bold text-text-main">
              System Integration
            </h2>
            <p className="mb-12 break-keep leading-relaxed text-text-sub">
              공공, 금융, 제조 등 다양한 산업 분야의 노하우를 바탕으로 고객의
              요구사항을 정확히 분석하여 최적의 정보 시스템을 구축합니다. 최신
              기술 트렌드와 안정성을 고려한 아키텍처 설계로 비즈니스 경쟁력을
              강화합니다.
            </p>

            <ol
              className="grid border-y border-slate-300 md:grid-cols-3"
              aria-label="시스템 통합 분야"
            >
              {SYSTEM_INTEGRATIONS.map((service, index) => (
                <li
                  key={service.number}
                  className={`py-8 md:px-6 ${
                    index === 0
                      ? ""
                      : "border-t border-slate-200 md:border-l md:border-t-0"
                  }`}
                >
                  <span className="mb-8 block font-display text-sm font-bold tabular-nums text-primary">
                    {service.number}
                  </span>
                  <h3 className="mb-5 text-lg font-bold text-text-main">
                    {service.title}
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-text-sub">
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
            <SectionLabel label="Service 02" tone="secondary" />
            <h2 className="mb-6 text-3xl font-bold text-text-main">
              System Management
            </h2>
            <p className="mb-12 break-keep leading-relaxed text-text-sub">
              시스템의 안정적인 운영을 위해 전문 인력과 체계적인 관리 프로세스를
              제공합니다. 장애 예방부터 신속한 대응, 지속적인 성능 개선까지
              고객의 IT 자산을 안전하게 보호합니다.
            </p>

            <ol
              className="border-t border-slate-300"
              aria-label="시스템 운영 관리 항목"
            >
              {SYSTEM_MANAGEMENTS.map((item) => (
                <li
                  key={item.number}
                  className="grid gap-3 border-b border-slate-200 py-7 sm:grid-cols-[3rem_10rem_1fr] sm:gap-5"
                >
                  <span className="font-display text-sm font-bold tabular-nums text-secondary">
                    {item.number}
                  </span>
                  <h3 className="font-bold text-text-main">{item.title}</h3>
                  <p className="break-keep text-sm leading-relaxed text-text-sub sm:col-start-auto">
                    {item.description}
                  </p>
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
