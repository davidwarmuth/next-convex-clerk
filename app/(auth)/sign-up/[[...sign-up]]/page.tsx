import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="py-8 md:py-24">
      <div className="container flex items-center justify-center">
        <SignUp />
      </div>
    </section>
  );
}
