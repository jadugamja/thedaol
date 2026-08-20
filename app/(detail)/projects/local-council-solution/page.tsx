import ProjectPageIntro from "../_components/project-page-intro";
import ScreenPreviewDialog from "./_components/screen-preview-dialog";

const SOLUTION_SCREENS = [
  {
    number: "01",
    category: "시스템 접속",
    title: "의안업무 시스템 로그인",
    description:
      "발급된 계정으로 시스템에 접속하며, 로그인 전에도 전체 의안 현황을 확인할 수 있습니다. 아이디 저장 기능을 지원합니다.",
    features: ["계정 로그인", "의안 현황 확인", "아이디 저장"],
    image: "/images/projects/local-council-solution/login.webp",
    width: 2560,
    height: 1391,
    alt: "지방의회 의안지원 시스템 로그인 화면",
  },
  {
    number: "02",
    category: "의원 화면",
    title: "오늘의 의안 업무를 한눈에",
    description:
      "서명·발의·관심의안 현황과 최근 의안 흐름을 확인하고, 월별 의사일정과 주요 업무 화면으로 바로 이동할 수 있습니다.",
    features: ["업무 현황", "빠른 메뉴", "월별 의사일정"],
    image: "/images/projects/local-council-solution/member-dashboard.webp",
    width: 2558,
    height: 1397,
    alt: "의원용 오늘의 의안 업무 대시보드",
  },
  {
    number: "03",
    category: "의안 업무",
    title: "4단계로 진행하는 의안 등록",
    description:
      "의안 작성부터 등록 확인, 서명, 게재까지 단계별로 진행합니다. 발의 구분과 공동 서명 대상을 지정하고 의안 내용을 작성할 수 있습니다.",
    features: ["단계별 등록", "발의 구분", "공동 서명 지정"],
    image: "/images/projects/local-council-solution/bill-registration.webp",
    width: 2560,
    height: 1398,
    alt: "4단계 의안등록 작성 화면",
  },
  {
    number: "04",
    category: "외부 의안정보",
    title: "전국 기초의회 의안 통합 검색",
    description:
      "시도·의회·종류·제안자·처리결과·기간·의안명 조건으로 전국 기초의회 의안을 조회하고, 의안별 상세 내용과 처리 단계를 확인합니다.",
    features: ["조건별 검색", "의안 목록", "처리 단계 확인"],
    image: "/images/projects/local-council-solution/bill-search.webp",
    width: 2560,
    height: 1395,
    alt: "전국 기초의회 의안정보 검색 결과 화면",
  },
  {
    number: "05",
    category: "관리자 화면",
    title: "시스템 운영 현황과 기준정보 관리",
    description:
      "관리자는 운영 항목과 7일 내 의사일정, 의안 처리 현황, 최근 처리 이력을 확인하고 기준정보 관리 화면으로 이동할 수 있습니다.",
    features: ["운영 항목", "처리 현황", "기준정보 관리"],
    image: "/images/projects/local-council-solution/admin-dashboard.webp",
    width: 2558,
    height: 1395,
    alt: "관리자용 시스템 운영 현황 대시보드",
  },
] as const;

type SolutionScreen = (typeof SOLUTION_SCREENS)[number];

function ScreenShowcase({ screen }: { screen: SolutionScreen }) {
  return (
    <article className="border-t border-slate-300 pt-7">
      <div className="mb-6 grid gap-4 sm:grid-cols-[4rem_1fr] sm:gap-5">
        <span className="font-display text-xl leading-none font-semibold text-primary tabular-nums sm:text-2xl">
          {screen.number}
        </span>
        <div>
          <p className="mb-2 text-sm font-semibold text-text-sub">{screen.category}</p>
          <h3 className="mb-3 text-2xl font-bold leading-snug text-text-main break-keep">
            {screen.title}
          </h3>
          <p className="leading-relaxed text-text-sub break-keep">{screen.description}</p>

          <ul
            className="mt-4 grid gap-1 text-sm text-text-sub sm:grid-cols-3 sm:gap-4"
            aria-label={`${screen.title} 주요 기능`}
          >
            {screen.features.map((feature) => (
              <li key={feature} className="flex gap-2 break-keep">
                <span aria-hidden="true" className="text-slate-400">
                  ·
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ScreenPreviewDialog
        src={screen.image}
        width={screen.width}
        height={screen.height}
        alt={screen.alt}
        title={screen.title}
        priority={screen.number === "01"}
      />
    </article>
  );
}

export default function LocalCouncilSolutionPage() {
  return (
    <div>
      <ProjectPageIntro
        eyebrow="Solution Preview"
        title="지방의회 의안관리 솔루션"
        description="권한별로 제공되는 로그인, 의원 업무, 의안 등록, 통합 검색, 관리자 운영 화면을 소개합니다."
      />

      <p className="mb-14 text-sm leading-relaxed text-text-sub break-keep">
        화면 이미지를 선택하면 세부 내용을 확대해서 확인할 수 있습니다.
      </p>

      <section className="space-y-16 sm:space-y-20" aria-labelledby="solution-screens-title">
        <h2 id="solution-screens-title" className="sr-only">
          지방의회 의안관리 솔루션 주요 화면
        </h2>
        {SOLUTION_SCREENS.map((screen) => (
          <ScreenShowcase key={screen.number} screen={screen} />
        ))}
      </section>
    </div>
  );
}
