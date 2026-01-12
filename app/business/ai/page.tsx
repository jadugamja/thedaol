"use client";

import Sidebar from "@/components/layout/sidebar";
import { BUSINESS_MENU } from "@/lib/menu";
import { useEffect } from "react";
import { MdChatBubbleOutline, MdOutlineVisibility } from "react-icons/md";
import { RiDatabase2Line } from "react-icons/ri";

export default function BusinessAiPage() {
  useEffect(() => {
    const steps = document.querySelectorAll(".process-step");
    if (!steps.length) return;

    let currentIndex = -1;

    function activateStep(index: number) {
      steps.forEach((step, i) => {
        const circle = step.querySelector(".step-circle");
        const number = step.querySelector(".number");
        const box = step.querySelector(".step-box");

        if (i === index) {
          // Active State
          circle?.classList.remove("bg-white", "border-gray-200");
          circle?.classList.add("bg-primary", "border-primary", "scale-110");

          number?.classList.remove("text-text-main");
          number?.classList.add("text-white");

          box?.classList.remove("bg-white", "border-gray-100");
          box?.classList.add("bg-surface-light", "border-primary", "shadow-sm");
        } else {
          // Inactive State
          circle?.classList.add("bg-white", "border-gray-200");
          circle?.classList.remove("bg-primary", "border-primary", "scale-110");

          number?.classList.add("text-text-main");
          number?.classList.remove("text-white");

          box?.classList.add("bg-white", "border-gray-100");
          box?.classList.remove(
            "bg-surface-light",
            "border-primary",
            "shadow-sm"
          );
        }
      });
    }

    currentIndex = 0;
    activateStep(currentIndex);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % steps.length;
      activateStep(currentIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden max-h-[352px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800/90 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
            alt="AI Solution"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            AI Solution
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-pretendard">
            데이터의 가치를 발견하고, 비즈니스의 미래를 예측하는 지능형 솔루션
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16">
        <Sidebar title="Business" menu={BUSINESS_MENU} current="/business/ai" />

        {/* Main Content */}
        <div className="grow space-y-20">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary font-bold tracking-widest uppercase text-sm font-display">
                Core Technology
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <h2 className="text-3xl font-bold text-text-main mb-6">
              Advanced AI Tech
            </h2>
            <p className="text-text-sub leading-relaxed mb-10">
              최신 딥러닝 알고리즘과 빅데이터 처리 기술을 결합하여 고객 맞춤형
              AI 모델을 개발합니다. 자연어 처리부터 컴퓨터 비전까지 폭넓은
              기술 스펙트럼을 보유하고 있습니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Big Data */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                <div className="size-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <RiDatabase2Line className="text-blue-600 text-3xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Big Data</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  대용량 데이터의 수집, 저장, 처리를 위한 분산 처리 시스템
                  구축 및 데이터 파이프라인 최적화
                </p>
              </div>

              {/* NLP */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                <div className="size-14 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdChatBubbleOutline className="text-purple-600 text-3xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">NLP</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  텍스트 분석, 감성 분석, 챗봇 등 인간의 언어를 이해하고
                  처리하는 자연어 처리 기술
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                <div className="size-14 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdOutlineVisibility className="text-teal-600 text-3xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">
                  Computer Vision
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  이미지 및 영상 데이터 분석을 통한 객체 인식, 이상 탐지, 안면
                  인식 솔루션 제공
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm font-display">
                Implementation
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <h2 className="text-3xl font-bold text-text-main mb-12">
              AI Development Process
            </h2>

            <div className="relative">
              <div className="hidden md:block absolute top-[28px] left-0 w-full h-0.5 bg-gray-100 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="group process-step" data-index="0">
                  <div className="step-circle size-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 transition-all duration-500">
                    <span className="number font-bold text-lg text-text-main transition-colors duration-500">
                      01
                    </span>
                  </div>
                  <div className="step-box text-center bg-white p-6 rounded-xl border border-gray-100 transition-all duration-500">
                    <h4 className="font-bold text-lg mb-2">Consulting</h4>
                    <p className="text-sm text-text-sub">
                      요구사항 분석 및<br />
                      데이터 타당성 검토
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group process-step" data-index="1">
                  <div className="step-circle size-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 transition-all duration-500">
                    <span className="number font-bold text-lg text-text-main transition-colors duration-500">
                      02
                    </span>
                  </div>
                  <div className="step-box text-center bg-white p-6 rounded-xl border border-gray-100 transition-all duration-500">
                    <h4 className="font-bold text-lg mb-2">Modeling</h4>
                    <p className="text-sm text-text-sub">
                      데이터 전처리 및<br />
                      최적 AI 모델 학습
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group process-step" data-index="2">
                  <div className="step-circle size-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 transition-all duration-500">
                    <span className="number font-bold text-lg text-text-main transition-colors duration-500">
                      03
                    </span>
                  </div>
                  <div className="step-box text-center bg-white p-6 rounded-xl border border-gray-100 transition-all duration-500">
                    <h4 className="font-bold text-lg mb-2">Development</h4>
                    <p className="text-sm text-text-sub">
                      시스템 개발 및<br />
                      AI 모델 연동
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="group process-step" data-index="3">
                  <div className="step-circle size-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 transition-all duration-500">
                    <span className="number font-bold text-lg text-text-main transition-colors duration-500">
                      04
                    </span>
                  </div>
                  <div className="step-box text-center bg-white p-6 rounded-xl border border-gray-100 transition-all duration-500">
                    <h4 className="font-bold text-lg mb-2">Deployment</h4>
                    <p className="text-sm text-text-sub">
                      서비스 배포 및<br />
                      지속적 성능 개선
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
