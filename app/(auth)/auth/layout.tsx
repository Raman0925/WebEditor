import react from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen bg-zinc-800 flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
