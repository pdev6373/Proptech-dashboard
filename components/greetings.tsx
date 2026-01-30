import { Profile } from "@/app/page";

type GreetingsProps = {
  profile: Profile;
};

export default function Greetings({ profile }: GreetingsProps) {
  return (
    <h3 className="capitalize text-[#191919] text-xl font-semibold">
      Welcome, {profile.lastName}
    </h3>
  );
}
