import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-start py-3 min-h-9">
      <Link className="flex items-center py-3 gap-2" href="/">
        <Image
          src="/images/logo/icon.webp"
          width={33}
          height={20}
          alt="Company Logo Icon"
          priority
        />
        <div className="flex flex-col leading-none">
          <Image
            src="/images/logo/text-black.webp"
            width={148}
            height={16}
            alt="Company Logo Text"
          />
        </div>
      </Link>
    </div>
  );
}
