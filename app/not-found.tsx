"use client";

import Link from "next/link";
import { MdHome, MdArrowBack } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-20 bg-linear-to-r from-primary to-secondary -z-10"></div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-lg text-text-sub leading-relaxed max-w-md mx-auto">
            요청하신 페이지가 존재하지 않습니다.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            <MdHome className="text-xl" />
            홈으로 가기
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-text-main font-bold rounded-lg transition-all border-2 border-gray-200 hover:border-primary"
          >
            <MdArrowBack className="text-xl" />
            이전 페이지
          </button>
        </div>
      </div>
    </div>
  );
}
