import Link from "next/link";
import { AuthCard } from "@/components/common/AuthCard";
import { AuthForm } from "@/components/common/AuthForm";
import { AuthShowcase } from "@/components/common/AuthShowcase";
import { LOGIN_FIELDS } from "@/constants/auth";
import { SocialLogin } from "./_components/SocialLogin";

export default function LoginPage() {
  return (
    <>
      <AuthShowcase
        title="Sign in with ease"
        description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      />

      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        footer={
          <>
            <SocialLogin />
            <p className="text-base text-neutral-400">
              New user?{" "}
              <Link href="/register" className="text-primary-800">
                Create an account
              </Link>
            </p>
          </>
        }
      >
        <AuthForm fields={LOGIN_FIELDS} submitLabel="Sign In" />
      </AuthCard>
    </>
  );
}
