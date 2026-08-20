"use client";

import { COMPANY_ADDRESS } from "@/constants/company";
import { FormEvent, useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiPrinter,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { CgSpinner } from "react-icons/cg";

export default function HomeContact() {
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
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
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
    <section
      id="contact"
      className="relative z-20 py-24 lg:py-32 px-[5%] bg-white border-t border-slate-100"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          <div className="lg:col-span-2 space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              문의하기
            </h2>
            <p className="text-text-sub text-base leading-relaxed break-keep">
              프로젝트 문의나 기술 상담이 필요하시다면 언제든 연락주세요.
              <br />
              담당자가 확인 후 신속하게 답변 드리겠습니다.
            </p>

            <div className="space-y-9">
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <FiMail className="text-xl" aria-hidden="true" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-text-sub uppercase tracking-wide">
                    이메일
                  </p>
                  <p className="text-base font-bold text-text-main font-sans">
                    business@thedaol.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <FiPhone className="text-xl" aria-hidden="true" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-text-sub uppercase tracking-wide">
                    전화번호
                  </p>
                  <p className="text-base font-bold text-text-main font-sans">
                    02-2088-6058
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <FiPrinter className="text-xl" aria-hidden="true" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-text-sub uppercase tracking-wide">
                    팩스
                  </p>
                  <p className="text-base font-bold text-text-main font-sans">
                    0503-8379-3581
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <FiMapPin className="text-xl" aria-hidden="true" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-text-sub uppercase tracking-wide">
                    주소
                  </p>
                  <p className="text-base font-bold text-text-main font-sans break-keep">
                    {COMPANY_ADDRESS}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
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
              <div className="grid grid-cols-1 md:grid-cols-[3.5fr_6.5fr] gap-6 mb-6">
                <div className="space-y-2">
                  <label
                    htmlFor="home-contact-name"
                    className="block text-sm font-semibold text-text-main"
                  >
                    성함 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="home-contact-name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-50 border border-slate-200 rounded-lg text-text-main text-base transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white"
                    placeholder="홍길동"
                    required
                    value={formData.name}
                    onChange={e =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="home-contact-email"
                    className="block text-sm font-semibold text-text-main"
                  >
                    이메일 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="home-contact-email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-slate-200 rounded-lg text-text-main text-base transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white"
                    placeholder="example@company.com"
                    required
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <label
                  htmlFor="home-contact-title"
                  className="block text-sm font-semibold text-text-main"
                >
                  제목 <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="home-contact-title"
                  name="title"
                  className="w-full px-4 py-3 bg-gray-50 border border-slate-200 rounded-lg text-text-main text-base transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white"
                  placeholder="프로젝트 문의합니다."
                  required
                  value={formData.title}
                  onChange={e =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              <div className="mb-6 space-y-2">
                <label
                  htmlFor="home-contact-message"
                  className="block text-sm font-semibold text-text-main"
                >
                  문의 내용 <span className="text-primary">*</span>
                </label>
                <textarea
                  id="home-contact-message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-slate-200 rounded-lg text-text-main text-base transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white resize-none"
                  placeholder="프로젝트 내용이나 궁금하신 점을 적어주세요."
                  required
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                id="submit-btn"
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="h-12 w-full py-3.5 bg-text-main hover:bg-[#090d14] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold text-lg rounded-lg transition-colors duration-300 mt-2 font-display shadow-lg shadow-gray-200 flex justify-center items-center cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <CgSpinner className="animate-spin" aria-hidden="true" />
                    <span className="sr-only">전송 중</span>
                  </>
                ) : (
                  "문의하기"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
