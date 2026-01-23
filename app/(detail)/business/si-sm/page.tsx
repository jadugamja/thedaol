import DetailHero from "@/components/layout/detail/hero";
import Sidebar from "@/components/layout/sidebar";
import { BUSINESS_MENU } from "@/constants/menu";
import {
  MdMonitorHeart,
  MdOutlineAccountBalance,
  MdOutlineFactory,
  MdOutlinePublic,
  MdOutlineRocketLaunch,
  MdOutlineSecurity,
  MdOutlineSupportAgent,
} from "react-icons/md";

const SYSTEM_INTEGRATIONS = [
  {
    icon: <MdOutlineAccountBalance className="text-primary text-2xl" />,
    title: "금융 시스템",
    items: ["계정계/정보계 시스템", "비대면 채널 구축", "마이데이터 서비스"],
  },
  {
    icon: <MdOutlinePublic className="text-primary text-2xl" />,
    title: "공공 서비스",
    items: ["행정 업무 시스템", "대국민 포털 구축", "데이터 연계/통합"],
  },
  {
    icon: <MdOutlineFactory className="text-primary text-2xl" />,
    title: "기업 정보화",
    items: ["ERP / MES 구축", "그룹웨어/협업툴 구축", "모바일 오피스"],
  },
];

const SYSTEM_MANAGEMENTS = [
  {
    icon: <MdMonitorHeart className="text-secondary text-sm" />,
    title: "통합 운영 관리",
    description:
      "SLA 기반의 체계적인 수준 관리 및 정기 점검을 통한 무중단 운영 지원",
  },
  {
    icon: <MdOutlineSupportAgent className="text-secondary text-sm" />,
    title: "Help Desk 운영",
    description:
      "사용자 문의 신속 대응 및 기술 지원 제공, VOC 분석을 통한 서비스 개선",
  },
  {
    icon: <MdOutlineSecurity className="text-secondary text-sm" />,
    title: "보안 관리",
    description: "최신 보안 패치 적용 및 취약점 점검을 통한 시스템 보안성 강화",
  },
  {
    icon: <MdOutlineRocketLaunch className="text-secondary text-sm" />,
    title: "성능 최적화",
    description:
      "DB 튜닝, 애플리케이션 리팩토링 등 지속적인 성능 개선 활동 수행",
  },
];

export default function BusinessSiSmPage() {
  return (
    <>
      <DetailHero
        imgSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
        title="System Integration & Management"
        description="고객의 비즈니스 가치를 극대화하는 맞춤형 시스템 구축 및 운영 서비스"
      />

      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 min-h-124">
        <Sidebar
          title="Business"
          menu={BUSINESS_MENU}
          current="/business/si-sm"
        />

        <div className="flex-1 space-y-20">
          {/* SI Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary font-bold tracking-widest uppercase text-sm font-display">
                Service 01
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <h2 className="text-3xl font-bold text-text-main mb-6">
              System Integration
            </h2>
            <p className="text-text-sub leading-relaxed mb-10 break-keep">
              공공, 금융, 제조 등 다양한 산업 분야의 노하우를 바탕으로 고객의
              요구사항을 정확히 분석하여 최적의 정보 시스템을 구축합니다. 최신
              기술 트렌드와 안정성을 고려한 아키텍처 설계로 비즈니스 경쟁력을
              강화합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SYSTEM_INTEGRATIONS.map(({ icon, title, items }) => (
                <SICard key={title} icon={icon} title={title} items={items} />
              ))}
            </div>
          </section>

          {/* SM Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm font-display">
                Service 02
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <h2 className="text-3xl font-bold text-text-main mb-6">
              System Management
            </h2>
            <p className="text-text-sub leading-relaxed mb-10 break-keep">
              시스템의 안정적인 운영을 위해 전문 인력과 체계적인 관리 프로세스를
              제공합니다. 장애 예방부터 신속한 대응, 지속적인 성능 개선까지
              고객의 IT 자산을 안전하게 보호합니다.
            </p>

            <div className="bg-surface-light rounded-2xl p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {SYSTEM_MANAGEMENTS.map((item, index) => (
                  <SMCard key={index} {...item} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

const SICard = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-3">{title}</h3>
      <ul className="text-sm text-text-sub space-y-2">
        {items && items.map((item, idx) => <li key={idx}>- {item}</li>)}
      </ul>
    </div>
  );
};

const SMCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="mt-1 size-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-sm text-text-sub leading-relaxed break-keep">
          {description}
        </p>
      </div>
    </div>
  );
};
