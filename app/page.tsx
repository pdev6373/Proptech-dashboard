import {
  Overview,
  Greetings,
  OverviewProps,
  SalesOverview,
} from "@/components";
import Listings from "@/components/listings";
import { Header, Nav } from "@/components/layout";
import { ListingProps } from "@/components/listing";

export type Profile = {
  lastName: string;
  firstName: string;
};

const PROFILE: Profile = {
  lastName: "Ahmed",
  firstName: "Daudu",
};

const ListingsOverview: OverviewProps = {
  link: "/",
  title: "Listings Overview",
  icon: "/svgs/house.svg",
  details: [
    { label: "Total", value: "1.8k" },
    { label: "Active", value: "80" },
    { label: "Archived", value: "1k" },
  ],
};

const UsersOverview: OverviewProps = {
  link: "/",
  title: "Users Overview",
  icon: "/svgs/profile.svg",
  details: [
    { label: "Total", value: "20.7k" },
    { label: "Riders", value: "8.5k" },
    { label: "Subscribers", value: "7.5k" },
  ],
};

const LISTINGS: ListingProps[] = [
  {
    id: "1",
    category: "Most CLICKED",
    title: "Urban Prime Plaza Premiere",
    images: [
      "/images/listing-image-one.jpg",
      "/images/listing-image-two.png",
      "/images/listing-image-three.jpg",
    ],
  },
  {
    id: "2",
    category: "Most CLICKED",
    title: "Urban Prime Plaza Premiere",
    images: [
      "/images/listing-image-two.png",
      "/images/listing-image-three.jpg",
      "/images/listing-image-one.jpg",
    ],
  },
  {
    id: "3",
    category: "Most CLICKED",
    title: "Urban Prime Plaza Premiere",
    images: [
      "/images/listing-image-three.jpg",
      "/images/listing-image-one.jpg",
      "/images/listing-image-two.png",
    ],
  },
  {
    id: "4",
    category: "Most CLICKED",
    title: "Urban Prime Plaza Premiere",
    images: [
      "/images/listing-image-two.png",
      "/images/listing-image-three.jpg",
      "/images/listing-image-one.jpg",
    ],
  },
  {
    id: "5",
    category: "Most CLICKED",
    title: "Urban Prime Plaza Premiere",
    images: [
      "/images/listing-image-three.jpg",
      "/images/listing-image-one.jpg",
      "/images/listing-image-two.png",
    ],
  },
  {
    id: "6",
    category: "Most CLICKED",
    title: "Urban Prime Plaza Premiere",
    images: [
      "/images/listing-image-one.jpg",
      "/images/listing-image-two.png",
      "/images/listing-image-three.jpg",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col h-screen md:h-auto min-h-screen overflow-y-hidden md:overflow-y-visible bg-[#fbfcfc]">
      <Header profile={PROFILE} />
      <div className="hidden md:block sticky top-0 right-0 left-0 z-50 border-b border-[#F4F4F5] py-3 px-7 lg:px-8 bg-white">
        <Nav />
      </div>

      <main className="flex flex-col gap-4 md:gap-5 pt-4 pb-5 sm:pb-7 overflow-y-auto">
        <div className="px-4 sm:px-6 md:px-7 lg:px-8 flex flex-col gap-4 md:gap-5">
          <Greetings profile={PROFILE} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 justify-start">
            <div className="lg:col-span-2">
              <SalesOverview />
            </div>

            <aside className="grid sm:grid-cols-2 lg:grid-cols-1 lg:col-span-1 gap-4 md:gap-5">
              <Overview {...ListingsOverview} />
              <Overview {...UsersOverview} />
            </aside>
          </div>
        </div>

        <Listings listings={LISTINGS} />
      </main>

      <div className="md:hidden border-t shadow-[0_-2px_10px_rgba(0,0,0,0.08)] bg-white">
        <Nav />
      </div>
    </div>
  );
}
