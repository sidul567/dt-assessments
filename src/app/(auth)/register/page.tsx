import Link from "next/link";
import { AuthCard } from "@/components/common/AuthCard";
import { AuthForm } from "@/components/common/AuthForm";
import { AuthShowcase } from "@/components/common/AuthShowcase";
import { REGISTER_FIELDS } from "@/constants/auth";

export default function RegisterPage() {
  return (
    <>
      <AuthShowcase
        title="Sign up and come in"
        description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      />

      <AuthCard
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        footer={
          <p className="text-base text-neutral-700">
            Already have an account?{" "}
            <Link href="/login" className="text-primary-800">
              Login
            </Link>
          </p>
        }
      >
        <AuthForm fields={REGISTER_FIELDS} submitLabel="Continue" />
      </AuthCard>
    </>
  );
}
