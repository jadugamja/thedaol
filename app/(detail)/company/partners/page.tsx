import DetailHero from "@/components/layout/detail/hero";
import Sidebar from "@/components/layout/sidebar";
import { COMPANY_MENU } from "@/constants/menu";
import { PARTNERS } from "@/constants/partners";
import Image from "next/image";

export default function CompanyPartnersPage() {
  return (
    <>
      <DetailHero
        imgSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
        title="Partnership"
        description="더다올디앤씨와 함께 성장하는 파트너를 소개합니다."
      />

      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 min-h-124">
        <Sidebar
          title="Company"
          menu={COMPANY_MENU}
          current="/company/partners"
        />

        {/* Main Content - Partner Logos Grid */}
        <section className="flex-1 space-y-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.map(({ name, image }) => (
              <div
                key={name}
                className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-center h-32 hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={name}
                  width={176}
                  height={128}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
