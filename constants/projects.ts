export type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
};

export const PROJECTS = [
  {
    title: "국회 e-의안시스템 차세대 분석/설계 참여",
    description: "국회 입법 프로세스의 디지털 혁신을 위한 차세대 시스템 구축",
    image: "/images/projects/national-assembly-e-bill-system.webp",
    category: "Enterprise",
  },
  {
    title: "서울시의회 차세대 의정지원시스템 ISP",
    description:
      "서울시의회 차세대 의정지원시스템 구축 정보화 전략 계획 수립",
    image: "/images/projects/seoul-metropolitan-council-isp.webp",
    category: "Consulting",
  },
  {
    title: "국회 의정지원시스템 ISP 컨설팅",
    description: "국회 사무처 차세대 의정지원시스템 구축 정보화 전략 계획 수립",
    image: "/images/projects/national-assembly-legislative-isp.webp",
    category: "Consulting",
  },
  {
    title: "국회 정보화 기반 프로젝트 고도화",
    description:
      "국회 본회의장 시스템 UI/UX 개선 및 노후 인프라 교체를 통한 국회 정보시스템 안정화",
    image: "/images/projects/national-assembly-plenary-it.webp",
    category: "Platform",
  },
  {
    title: "CBTI 청렴도 조사 설문 시스템 구축",
    description:
      "이노크루 업체에 공공기관 청렴도 조사를 위한 설문조사 플랫폼 구축",
    image: "/images/projects/cbti-survey.webp",
    category: "Service",
  },
  {
    title: "관세청 상용 솔루션 성능 컨설팅",
    description:
      "관세청 노후 장비 교체 환경에서의 상용 SW 기능 적합성 평가 및 컨설팅",
    image: "/images/projects/korea-customs-service.webp",
    category: "Consulting",
  },
  {
    title: "AI 열화상 이미지 인식 데이터 구축",
    description: "열화상 이미지 데이터 수집, 라벨링 및 AI 학습용 데이터셋 구축",
    image: "/images/projects/ai-thermal-imaging-data.webp",
    category: "AI",
  },
] satisfies Project[];
