import DetailHero from "@/components/layout/detail/hero";
import Sidebar from "@/components/layout/sidebar";
import { COMPANY_MENU } from "@/lib/menu";

export default function CompanyOrganizationPage() {
  return (
    <>
      <DetailHero
        imgSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
        title="Organization" 
        description="효율적인 의사결정과 전문성을 갖춘 조직 구성" />  

      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 min-h-124">
        <Sidebar title="Company" menu={COMPANY_MENU} current="/company/organization" />

        <section className="flex-1 mt-4">
          <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
            <div className="relative z-10">
              <div className="w-44 py-4 bg-secondary text-white rounded-lg text-center shadow-lg mx-auto">
                <h3 className="font-bold text-base mb-0.5">CEO</h3>
                <p className="text-xs opacity-90">대표이사</p>
              </div>
              <div className="mx-auto w-0.5 h-8 bg-gray-300"></div>
            </div>

            <div className="flex justify-center w-full">
              <div className="flex-1 flex flex-col items-center relative">
                <div className="w-full h-8 relative">
                  <div className="absolute top-0 right-0 w-1/2 h-0.5 bg-gray-300"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
                </div>

                <div className="w-full md:w-44 py-4 bg-white border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-text-main text-base">
                    경영지원
                  </h4>
                </div>

                <div className="w-full h-8 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
                </div>
                <div className="w-full md:w-44 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <ul className="text-xs text-text-sub space-y-1 list-disc pl-4">
                    <li>인사 · 총무</li>
                    <li>재무 · 회계</li>
                  </ul>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center relative">
                <div className="w-full h-8 relative">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-300"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
                </div>

                <div className="w-full md:w-44 py-4 bg-white border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-text-main text-base">
                    기업부설연구소
                  </h4>
                </div>
                <div className="w-full h-8 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
                </div>
                <div className="w-full md:w-44 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <ul className="text-xs text-text-sub space-y-1 list-disc pl-4">
                    <li>제품 기획 · 개발</li>
                    <li>기술 교육</li>
                  </ul>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center relative">
                <div className="w-full h-8 relative">
                  <div className="absolute top-0 left-0 w-1/2 h-0.5 bg-gray-300"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
                </div>

                <div className="w-full md:w-44 p-4 bg-white border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-text-main text-base">
                    영업부
                  </h4>
                </div>
                <div className="w-full h-8 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
                </div>
                <div className="w-full md:w-44 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <ul className="text-xs text-text-sub space-y-1 list-disc pl-4">
                    <li>SI/SM 사업</li>
                    <li>IT 컨설팅</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
