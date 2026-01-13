import DetailHero from "@/components/layout/detail/hero";
import Sidebar from "@/components/layout/sidebar";
import { COMPANY_MENU } from "@/lib/menu";
import Image from "next/image";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineHandshake, MdOutlineRocketLaunch } from "react-icons/md";

export default function CompanyAboutPage() {
  return (
    <>
      <DetailHero
        imgSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
        title="About Us"
        description="더다올디앤씨는 혁신적인 기술과 신뢰를 바탕으로 고객의 비즈니스 가치를 극대화하는 디지털 파트너입니다."
      />

      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16">
        <Sidebar title="Company" menu={COMPANY_MENU} current="/company/about" />

        <div className="flex-1 space-y-20">
          {/* Vision Section */}
          <section id="vision">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <span className="text-primary font-bold tracking-widest uppercase text-sm font-display">
                  Our Vision
                </span>
                <h2 className="text-3xl font-bold text-text-main leading-tight mt-6">
                  <span className="text-primary">Next Innovation</span>,
                  <br />
                  Better Tomorrow
                </h2>
                <p className="text-text-sub leading-relaxed font-pretendard break-keep">
                  우리는 끊임없이 변화하는 IT 환경 속에서, 고객이 직면한 문제를
                  기술로 해결하고 더 나은 미래를 만들어갑니다. 단순한 시스템
                  구축을 넘어, 비즈니스의 본질적인 성장을 돕는 파트너가 되는
                  것이 우리의 목표입니다.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex gap-4 p-6 rounded-xl bg-surface-light border border-slate-100 items-start">
                  <div className="size-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                    <MdOutlineRocketLaunch className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Innovation</h3>
                    <p className="text-sm text-text-sub leading-relaxed">
                      최신 AI 기술과 트렌드를 선도하며 끊임없이 혁신합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-xl bg-surface-light border border-slate-100 items-start">
                  <div className="size-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-secondary shrink-0">
                    <MdOutlineHandshake className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Trust</h3>
                    <p className="text-sm text-text-sub leading-relaxed">
                      고객과의 약속을 최우선으로 여기며, 투명하고 정직하게
                      소통합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-xl bg-surface-light border border-slate-100 items-start">
                  <div className="size-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                    <HiOutlineUserGroup className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Expertise</h3>
                    <p className="text-sm text-text-sub leading-relaxed">
                      최고의 전문가들이 모여 최상의 솔루션을 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CEO Section */}
          <section
            id="ceo"
            className="bg-surface-light rounded-3xl p-8 lg:p-12 border border-slate-100"
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="w-1/2 lg:w-[90%] aspect-4/5 bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
                  <Image
                    src="/images/ceo.webp"
                    alt="CEO Image"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black/80 to-transparent text-white">
                    <p className="text-sm opacity-80 mb-1">대표이사</p>
                    <p className="text-xl font-bold">박 규 원</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm font-display mb-2 block">
                  CEO Message
                </span>
                <h2 className="text-xl md:text-2xl font-bold mb-8 text-text-main">
                  "고객의 요구를 정확히 이해하고, <br />
                  최적의 솔루션을 제공합니다."
                </h2>
                <div className="space-y-6 text-text-sub leading-relaxed font-pretendard text-base">
                  <p>안녕하세요. 더다올디앤씨를 찾아주신 여러분 환영합니다.</p>
                  <p>
                    저희는 정보시스템 기획·설계부터 맞춤형 프로그램 개발, 시스템
                    유지보수까지 전문적으로 수행하고 있습니다.
                  </p>
                  <p>
                    솔루션 중심의 시스템 통합 전략을 바탕으로
                    공공·금융·제조·물류 등 다양한 산업 분야에서 사업을 전개하고
                    있으며, 축적된 SI·컨설팅·AI 기술력으로 고객의 디지털 혁신을
                    지원합니다.
                  </p>
                  <p>감사합니다.</p>
                </div>
                <div className="mt-10">
                  <span className="font-signature text-xl md:text-2xl text-text-main block">
                    (주)더다올디앤씨 대표이사 박규원
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-main font-display mb-4">
                Company Overview
              </h2>
            </div>

            <div className="border-t-2 border-primary">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-gray-100">
                <div className="bg-surface-light px-6 py-4 font-bold text-text-main flex items-center">
                  회사명
                </div>
                <div className="px-6 py-4 text-text-sub">
                  주식회사 더다올디앤씨
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-gray-100">
                <div className="bg-surface-light px-6 py-4 font-bold text-text-main flex items-center">
                  설립일
                </div>
                <div className="px-6 py-4 text-text-sub">
                  2022 년 06 월 28 일
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-gray-100">
                <div className="bg-surface-light px-6 py-4 font-bold text-text-main flex items-center">
                  대표이사
                </div>
                <div className="px-6 py-4 text-text-sub">박규원</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-gray-100">
                <div className="bg-surface-light px-6 py-4 font-bold text-text-main flex items-center">
                  주요사업
                </div>
                <div className="px-6 py-4 text-text-sub">
                  <ul className="list-disc list-inside space-y-1">
                    <li>SI (System Integration) / SM (System Management)</li>
                    <li>AI 솔루션 개발 및 공급</li>
                    <li>IT 컨설팅 및 인프라 구축</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-gray-100">
                <div className="bg-surface-light px-6 py-4 font-bold text-text-main flex items-center">
                  소재지
                </div>
                <div className="px-6 py-4 text-text-sub">
                  서울특별시 금천구 가산디지털1로 204, 아이비밸리 8층 802호
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-gray-100">
                <div className="bg-surface-light px-6 py-4 font-bold text-text-main flex items-center">
                  인증현황
                </div>
                <div className="px-6 py-4 text-text-sub">
                  벤처기업인증, 기술혁신형 중소기업(Inno-Biz), 기업부설연구소
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
