import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-start py-3 min-h-9">
      <a className="flex items-center py-3 gap-2" href="/">
        <img
          alt="Company Logo Icon"
          className="h-5 w-auto"
          src="./images/logo-icon.png"
        />
        <Image
          src="/images/logo/icon.webp"
          width={}
          height={}
          alt="Company Logo Icon"
          priority
        />
        <div className="flex flex-col leading-none">
          <img
            alt="Company Logo"
            className="h-4 w-auto"
            src="./images/logo-black.png"
          />
          <Image
            src="/images/logo/icon.webp"
            width={}
            height={}
            alt="Company Logo Text"
          />
        </div>
      </a>
    </div>
  );
}
