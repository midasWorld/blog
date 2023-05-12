import AuthError from "@/components/AuthError";

type Props = {
  searchParams: {
    error: string;
  };
};

export default function AuthErrorPage({ searchParams: { error } }: Props) {
  return (
    <section className="flex flex-col items-center gap-3 mt-24">
      <AuthError error={error} />
    </section>
  );
}
