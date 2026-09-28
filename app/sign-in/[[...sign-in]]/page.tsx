import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#f6f1ec] py-16">
      <SignIn />
    </div>
  );
}
