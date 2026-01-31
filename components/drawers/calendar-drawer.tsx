"use client";
import Drawer from ".";
import Image from "next/image";
import { useState } from "react";

type CalendarDrawer = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

export default function CalendarDrawer({ isOpen, setIsOpen }: CalendarDrawer) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (number | null)[] = [];

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(prevMonthLastDay - i);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(i);
    }

    return days;
  };

  const previousMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );

  const nextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );

  const handleDateClick = (day: number | null, index: number) => {
    if (day === null) return;

    const daysInCurrentMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    ).getDate();

    const firstDayOfWeek = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    ).getDay();

    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    if (index < firstDayOfWeek) {
      month -= 1;
      if (month < 0) {
        month = 11;
        year -= 1;
      }
    } else if (index >= firstDayOfWeek + daysInCurrentMonth) {
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
    }

    setSelectedDate(new Date(year, month, day));
  };

  const isSelectedDate = (day: number | null, index: number) => {
    if (day === null) return false;

    const daysInCurrentMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    ).getDate();

    const firstDayOfWeek = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    ).getDay();

    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    if (index < firstDayOfWeek) {
      month -= 1;
      if (month < 0) {
        month = 11;
        year -= 1;
      }
    } else if (index >= firstDayOfWeek + daysInCurrentMonth) {
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
    }

    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const isCurrentMonth = (index: number) => {
    const firstDayOfWeek = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    ).getDay();

    const daysInCurrentMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    ).getDate();

    return (
      index >= firstDayOfWeek && index < firstDayOfWeek + daysInCurrentMonth
    );
  };

  const days = getDaysInMonth(currentDate);

  return (
    <Drawer size="md" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="bg-[#0D0D0D] text-white w-full h-full flex flex-col">
        <header className="sticky top-0 left-0 right-0 z-10 flex items-center justify-between gap-5 px-3 sm:px-4 py-2.5 bg-[#171717]">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-[#0D0D0D]/70 p-2 rounded-md transition-colors cursor-pointer"
            >
              <Image
                width={24}
                height={24}
                alt="arrow left"
                src="/svgs/arrow-left.svg"
                className="w-5 sm:w-6 aspect-square shrink-0"
              />
            </button>
            <h2 className="font-semibold">Calendar</h2>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#0D0D0D]/70 p-2 rounded-md transition-colors cursor-pointer"
          >
            <Image
              width={24}
              height={24}
              alt="close"
              src="/svgs/close.svg"
              className="w-5 sm:w-6 aspect-square shrink-0"
            />
          </button>
        </header>

        <div className="flex items-center justify-between gap-6 sm:gap-7 p-3.5 sm:p-4 w-fit mx-auto">
          <button
            onClick={previousMonth}
            className="hover:bg-gray-800 p-2 rounded transition-colors shrink-0"
          >
            <Image
              width={24}
              height={24}
              alt="arrow left"
              src="/svgs/calendar-arrow-left.svg"
              className="w-5 sm:w-6 aspect-square"
            />
          </button>

          <h3 className="font-semibold">
            {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>

          <button
            onClick={nextMonth}
            className="hover:bg-gray-800 p-2 rounded transition-colors shrink-0"
          >
            <Image
              width={24}
              height={24}
              alt="arrow right"
              src="/svgs/calendar-arrow-right.svg"
              className="w-5 sm:w-6 aspect-square"
            />
          </button>
        </div>

        <div className="mx-5 flex-1 rounded-sm border border-[#242424] flex flex-col">
          <div className="grid grid-cols-7 border-b border-[#242424]">
            {DAYS_OF_WEEK.map((day, index) => (
              <div
                key={day}
                className={`text-center text-xs text-[#969696]font-medium py-2 ${index !== DAYS_OF_WEEK?.length - 1 && "border-r border-[#242424]"}`}
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 grid-rows-6 flex-1">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDateClick(day, index)}
                className={`flex justify-start items-start p-1.5 hover:bg-[#171717] transition-colors cursor-pointer ${index % 7 !== 6 && "border-r border-r-[#242424]"} ${index < days?.length - 7 && "border-b border-b-[#242424]"}`}
              >
                <p
                  className={`text-xs transition-colors relative font-medium ${isCurrentMonth(index) ? "text-white" : "text-[#969696]"} ${
                    isSelectedDate(day, index) &&
                    "bg-[#2525E6] rounded-lg px-2.5"
                  }
              `}
                >
                  {day}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="h-4 shrink-0" />
      </div>
    </Drawer>
  );
}
