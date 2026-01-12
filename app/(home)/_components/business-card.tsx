import { JSX } from "react";

export default function BusinessCard({
  title,
  description,
  item1,
  item2,
  icon,
}: {
  title: string;
  description: string;
  item1: string;
  item2: string;
  icon: JSX.Element;
}) {
  return (
    <div className="group relative bg-white p-6 lg:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="size-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-text-main mb-3 font-display">
        {title}
      </h3>
      <p className="text-text-sub leading-relaxed text-sm mb-5 break-keep">
        {description}
      </p>
      <ul className="space-y-2 text-sm text-text-main border-t border-gray-100 pt-5">
        <li className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary" />
          {item1}
        </li>
        <li className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary" />
          {item2}
        </li>
      </ul>
    </div>
  );
}