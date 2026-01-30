export type ListingProps = {
  id: string;
  title: string;
  images: string[];
  category: string;
};

export default function Listing({ images, title, category }: ListingProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg sm:rounded-xl aspect-400/220 md:aspect-418/286 cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${images[0]})` }}
      />

      <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-white">
        <div className="text-xs sm:text-sm font-medium uppercase">
          {category}
        </div>
        <h3 className="sm:text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}
