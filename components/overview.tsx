import Image from "next/image";
import Link from "next/link";

type Details = {
  label: string;
  value: string;
};

export type OverviewProps = {
  icon: string;
  link: string;
  title: string;
  details: Details[];
};

export default function Overview({
  details,
  icon,
  link,
  title,
}: OverviewProps) {
  return (
    <div className="border border-[#E4E4E4] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden flex flex-col">
      <div className="flex justify-between bg-[#F9FAFB] border-b border-[#E4E4E4] py-3 md:py-3.5 px-3.5 md:px-4">
        <div className="flex items-center gap-2 md:gap-2.5">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="w-5 md:w-6 aspect-square"
          />
          <p className="text-[#292929] text-sm font-medium">{title}</p>
        </div>

        <Link href={link} className="flex items-center gap-0.5 text-[#4545FE]">
          <p className="text-xs md:text-sm font-medium">View all</p>
          <Image
            width={18}
            height={18}
            alt={title}
            src="/svgs/arrow-right.svg"
          />
        </Link>
      </div>

      <div className="flex p-3.5 md:p-4 pt-4 md:pt-5 bg-white grow">
        {details.map((details) => (
          <div className="flex-1 flex flex-col gap-1.5 md:gap-2">
            <p className="text-[#525252] text-sm font-medium">
              {details.label}
            </p>
            <p className="text-[#141414] text-xl md:text-2xl font-semibold">
              {details.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
