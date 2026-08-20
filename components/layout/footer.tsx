import { COMPANY_ADDRESS } from "@/constants/company";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-background-dark text-[#94a3b8] py-20 px-[5%] border-t border-white/10 font-body h-full selection:bg-zinc-100 selection:text-[#131f1e]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0">
          <div className="text-sm leading-loose space-y-1">
            <p>
              (주)더다올디앤씨 | 대표: 박규원 | 사업자등록번호: 150-86-02724
            </p>
            <p>
              <strong className="font-bold">주소</strong>: {COMPANY_ADDRESS}
            </p>
            <p>
              <strong className="font-bold">Tel</strong>: 02-2088-6058 |&nbsp;
              <strong className="font-bold">Fax</strong>: 0503-8379-3581 |&nbsp;
              <strong className="font-bold">Email</strong>: business@thedaol.com
            </p>
          </div>
        </div>
        <div className="h-24 flex flex-col justify-between">
          <div className="mb-2 flex justify-start md:justify-end">
            <Image
              alt="Company Logo"
              src="/images/logo/text-white.webp"
              width={184}
              height={20}
            />
          </div>
          <div className="pt-2 border-t border-white/10 text-xs text-[#64748b]">
            <span>Copyright © 주식회사 더다올디앤씨 All Rights Reserved.</span>
            <span aria-hidden="true"> · </span>
            <a
              href="/images/projects/ATTRIBUTION.md"
              className="transition-colors hover:text-white"
            >
              프로젝트 이미지 출처
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
