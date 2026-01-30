import Listing, { ListingProps } from "./listing";

type Listings = {
  listings: ListingProps[];
};

export default function Listings({ listings }: Listings) {
  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-[repeat(auto-fit,minmax(min(21.5em,100%),1fr))] px-5 sm:px-6 md:px-7 lg:px-8">
      {listings.map((listing) => (
        <Listing {...listing} key={listing.id} />
      ))}
    </div>
  );
}
