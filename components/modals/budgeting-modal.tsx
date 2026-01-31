"use client";
import Modal from ".";
import Image from "next/image";

type BudgetingModal = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const OPTIONS = [
  {
    icon: "/svgs/settings.svg",
    title: "Set up annual budgets by account category",
    description:
      "Allocate funds across income and expense lines with full visibility.",
  },
  {
    icon: "/svgs/trend-up.svg",
    title: "Track actuals vs budget in real time",
    description:
      "See how your community is performing against plan, month by month.",
  },
  {
    icon: "/svgs/align-bottom.svg",
    title: "Adjust figures and forecast with ease",
    description:
      "Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.",
  },
];

export default function BudgetingModal({ isOpen, setIsOpen }: BudgetingModal) {
  return (
    <Modal size="md" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="rounded-t-lg sm:rounded-b-md overflow-hidden">
        <div className="bg-[#0C2841] aspect-438/213 relative">
          <Image
            fill
            alt="bugdgeting background"
            src={"/svgs/budgeting-background.svg"}
          />
        </div>

        <div className="flex flex-col gap-6 p-4 sm:p-6">
          <div className="flex flex-col gap-5">
            {OPTIONS.map((option) => (
              <div className="w-full flex items-center gap-3">
                <Image
                  alt="icom"
                  width={24}
                  height={24}
                  src={option.icon}
                  className="w-5 md:w-6 aspect-square shrink-0"
                />

                <div className="flex flex-col gap-1.5 sm:gap-1">
                  <h3 className="text-[#191919] font-semibold leading-5">
                    {option.title}
                  </h3>
                  <p className="text-[#606060] text-xs sm:text-sm">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="bg-[#18181B] p-3 rounded-full w-full cursor-pointe font-mediumr"
          >
            Create Budget
          </button>
        </div>
      </div>
    </Modal>
  );
}
