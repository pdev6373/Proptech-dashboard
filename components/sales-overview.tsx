"use client";
import Image from "next/image";
import { useState } from "react";

type Overview = {
  label: string;
  value: string;
  color: string;
  change: string;
  isIncrement: boolean;
};

type ChartData = {
  month: string;
  values: number[];
};

const maxValue = 50;

const DURATIONS = [
  {
    value: "1W",
    label: "1 Week",
  },
  {
    value: "1M",
    label: "1 Month",
  },
  {
    value: "1Y",
    label: "1 Year",
  },
];

const OVERVIEW: Overview[] = [
  {
    change: "2.5%",
    color: "#4545FE",
    isIncrement: true,
    label: "Total Inflow",
    value: "₦120,000,000.00",
  },
  {
    label: "MRR",
    change: "2.5%",
    color: "#12B76A",
    isIncrement: true,
    value: "₦50,000,000.00",
  },
  {
    change: "0.5%",
    color: "#14B8A6",
    isIncrement: false,
    value: "₦200,000,000.00",
    label: "Commission Revenue",
  },
  {
    label: "GMV",
    change: "0.5%",
    color: "#F04438",
    isIncrement: false,
    value: "₦100,000,000.00",
  },
];

const CHART_DATA: ChartData[] = [
  { month: "Jan", values: [30, 25, 15] },
  { month: "Feb", values: [25, 20, 10] },
  { month: "Mar", values: [20, 15, 25] },
  { month: "Apr", values: [25, 20, 15] },
  { month: "May", values: [45, 35, 25] },
  { month: "Jun", values: [35, 30, 20] },
  { month: "Jul", values: [40, 35, 25] },
  { month: "Aug", values: [30, 25, 20] },
  { month: "Sep", values: [35, 30, 25] },
];

const Y_AXIS_LABELS = ["50M", "40M", "30M", "20M", "10M", "0"];

export default function SalesOverview() {
  const [selectedDuration, setSelectedDuration] = useState(DURATIONS[0].value);

  return (
    <div className="border border-[#E4E4E4] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 pt-4 pb-1 p-4 sm:px-6 text-[#191919]">
        <div className="w-full sm:w-auto flex flex-col gap-1 sm:gap-1.5">
          <h3 className="font-semibold text-xl">Sales Overview</h3>
          <p className="text-[#606060] text-sm">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>

        <button className="w-full sm:w-auto border border-[#D6D6D6] rounded-full overflow-hidden py-2 px-3 md:px-7 cursor-pointer hover:bg-[#F9FAFB] transition-all">
          View Transactions
        </button>
      </div>

      <div>
        <div className="border-b border-[#E4E4E4] pt-4 pb-3 sm:pt-3 px-3 sm:px-4 md:px-5 flex justify-end gap-1.5 sm:gap-3">
          {DURATIONS.map((duration) => (
            <button
              key={duration.value}
              onClick={() => setSelectedDuration(duration.value)}
              className={`cursor-pointer text-sm text-[#3D3D3D] py-1.5 md:py-2 px-3.5 rounded-lg ${selectedDuration == duration?.value ? "font-semibold bg-[#F5F5F5]" : "font-normal"} transition-all duration-300`}
            >
              {duration.label}
            </button>
          ))}
        </div>

        <div className="p-4 flex flex-col min-[1350px]:flex-row gap-7 min-[1350px]:gap-6">
          <div className="relative overflow-x-auto sm:overflow-x-visible flex items-end justify-between gap-4 shrink-0 px-3 sm:px-7 lg:px-6 h-40 min-[1350px]:h-auto">
            <button className="absolute hidden sm:block left-0 lg:-left-1.5 top-1/2 z-10">
              <Image
                width={18}
                height={18}
                alt="change"
                src="/svgs/round-arrow-left.svg"
              />
            </button>

            <button className="absolute hidden sm:block right-1 lg:-right-1.5 top-1/2 z-10">
              <Image
                width={18}
                height={18}
                alt="change"
                src="/svgs/round-arrow-right.svg"
              />
            </button>

            <div className="border-r border-[#E4E4E4] h-[calc(100%-18px)] mb-auto flex flex-col justify-between items-end pr-1">
              {Y_AXIS_LABELS.map((label, idx) => (
                <p key={idx} className="text-[#919191] text-xs">
                  {label}
                </p>
              ))}
            </div>

            <div className="grow shrink-0 flex justify-between text-xs text-[#919191] h-full gap-4">
              {CHART_DATA.map((data, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center flex-1 gap-0.5 h-full"
                >
                  <div className="relative w-full flex items-end justify-center gap-1 grow">
                    {data.values.map((value, barIdx) => {
                      const colors = [
                        "bg-[#4545FE]",
                        "bg-[#12B76A]",
                        "bg-[#F04438]",
                      ];
                      const height = (value / maxValue) * 100;

                      return (
                        <div
                          key={barIdx}
                          className={`${colors[barIdx]} w-1 shrink-0 transition-all duration-300 hover:opacity-80`}
                          style={{
                            minHeight: "4px",
                            height: `${height}%`,
                          }}
                          title={`${value}`}
                        />
                      );
                    })}
                  </div>

                  <p className="text-xs text-[#919191] font-medium">
                    {data.month}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 flex-1 gap-3">
            {OVERVIEW.map((overview) => (
              <div
                key={overview.label}
                className="border border-[#E4E4E4] rounded-lg md:rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 flex flex-col justify-between gap-1.5"
              >
                <p
                  className="font-semibold text-lg"
                  style={{ color: overview.color }}
                >
                  {overview.value}
                </p>

                <div className="flex items-center gap-2">
                  <p className="text-[#3D3D3D] text-xs font-medium">
                    {overview.label}
                  </p>

                  <div className="flex items-center gap-1 shrink-0">
                    <Image
                      width={14}
                      height={14}
                      alt="change"
                      src={
                        overview.isIncrement
                          ? "/svgs/increment.svg"
                          : "/svgs/decrement.svg"
                      }
                    />
                    <p
                      className={`text-xs ${overview?.isIncrement ? "text-[#12B76A]" : "text-[#F04438]"}`}
                    >
                      {overview.change}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
