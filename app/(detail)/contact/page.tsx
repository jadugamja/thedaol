"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/layout/sidebar";
import { MdCall, MdEmail, MdLocationOn, MdPrint } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";
import emailjs from "@emailjs/browser";
import NaverMap from "@/components/utils/NaverMap";

// 회사 좌표
const COMPANY_LOCATION = {
  lat: 37.4835033620443,
  lng: 126.881038151818,
};

const CONTACT_INFO = [
  {
    icon: <MdEmail className="text-lg" />,
    label: "이메일",
    value: "business@thedaol.com",
  },
  {
    icon: <MdCall className="text-lg" />,
    label: "전화번호",
    value: "02-2088-6058",
  },
  {
    icon: <MdPrint className="text-lg" />,
    label: "팩스",
    value: "0503-8379-3581",
  },
  {
    icon: <MdLocationOn className="text-lg " />,
    label: "주소",
    value: "서울특별시 금천구 가산디지털1로 204, 아이비밸리 8층 802호",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      alert("문의가 접수되었습니다!");
      setFormData({ name: "", email: "", title: "", message: "" });
    } catch (error) {
      console.error("메일 전송 실패:", error);
      alert("메일 전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden max-h-[352px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-[#2a4167] to-black"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-pretendard">
            프로젝트 문의나 기술 상담이 필요하시다면 언제든 연락주세요.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 min-h-124">
        <Sidebar title="Contact" />

        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-24">
          {/* Location */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm font-display">
                Location
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <h2 className="text-3xl font-bold text-text-main mb-10">
              Office Map
            </h2>

            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative bg-gray-100">
              {/* <Image
                src={`/api/map?w=800&h=400&center=${COMPANY_LOCATION.lng},${COMPANY_LOCATION.lat}`}
                alt="회사 위치 지도"
                fill
                className="object-cover"
              /> */}
              <NaverMap />
            </div>
          </section>

          {/* Contact Info */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary font-bold tracking-widest uppercase text-sm font-display">
                Information
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <h2 className="text-3xl font-bold text-text-main mb-10">
              Contact Info
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CONTACT_INFO.map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="bg-white p-6 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="size-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-sub uppercase tracking-wide mb-1">
                      {label}
                    </p>
                    <p className="text-base font-bold text-text-main font-sans break-keep leading-snug">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inquiry Form */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary font-bold tracking-widest uppercase text-sm font-display">
                Inquiry
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <h2 className="text-3xl font-bold text-text-main mb-10">
              Send a Message
            </h2>

            <form
              id="contact-form"
              className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-end mb-6">
                <p className="text-xs font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                  * 필수 입력 항목
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-text-main">
                    성함 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-slate-200 rounded-lg focus:border-[#5887c2] focus:bg-white focus:outline-none transition-colors"
                    placeholder="홍길동"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-text-main">
                    이메일 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-slate-200 rounded-lg focus:border-[#5887c2] focus:bg-white focus:outline-none transition-colors"
                    placeholder="example@company.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mb-6 space-y-2">
                <label className="block text-sm font-semibold text-text-main">
                  제목 <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-slate-200 rounded-lg focus:border-[#5887c2] focus:bg-white focus:outline-none transition-colors"
                  placeholder="프로젝트 문의입니다."
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>
              <div className="mb-6 space-y-2">
                <label className="block text-sm font-semibold text-text-main">
                  문의 내용 <span className="text-primary">*</span>
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-slate-200 rounded-lg focus:border-[#5887c2] focus:bg-white focus:outline-none resize-none transition-colors"
                  placeholder="문의 내용을 입력해주세요."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full py-4 bg-text-main hover:bg-[#090d14] disabled:bg-gray-400 text-white font-bold rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                {isSubmitting ? (
                  <CgSpinner className="animate-spin text-2xl" />
                ) : (
                  "문의하기"
                )}
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
