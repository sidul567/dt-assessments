import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { Button } from "@/components/ui/button";

const SOCIAL_PROVIDERS = [
  { label: "Sign in with Facebook", icon: FacebookIcon },
  { label: "Sign in with Google", icon: GoogleIcon },
];

export function SocialLogin() {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="flex w-full items-center gap-3 text-lg text-neutral-400">
        <span aria-hidden="true" className="h-px flex-1 bg-neutral-200" />
        or
        <span aria-hidden="true" className="h-px flex-1 bg-neutral-200" />
      </div>

      <div className="flex gap-4">
        {SOCIAL_PROVIDERS.map(({ label, icon: Icon }) => (
          <Button
            key={label}
            variant="outline"
            aria-label={label}
            className="size-18 p-0 outline-neutral-300 hover:bg-neutral-50"
          >
            <Icon className="size-10 text-black" />
          </Button>
        ))}
      </div>
    </div>
  );
}
