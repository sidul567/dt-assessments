import Link from "next/link";
import { RegisterForm } from "./_components/RegisterForm";
import { RegisterShowcase } from "./_components/RegisterShowcase";

export default function RegisterPage() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 pb-16 lg:flex-row lg:justify-between lg:px-0">
      <RegisterShowcase />

      <section className="flex w-full flex-col justify-between gap-16 rounded-3xl bg-white px-6 py-10 sm:px-16 sm:pt-15 sm:pb-15 lg:min-h-[784px] lg:w-[579px]">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-lg text-primary-800">Create an Account</p>
            <h1 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.44px] text-neutral-950 md:text-[44px]">
              Welcome to ByteSpace
            </h1>
          </div>

          <RegisterForm />
        </div>

        <p className="text-center text-base text-neutral-700">
          Already have an account?{" "}
          <Link href="/login" className="text-primary-800">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
}
