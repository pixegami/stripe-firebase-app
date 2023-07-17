import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthRouter from "./authRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stripe App Demo",
  description: "Stripe and Firebase App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthRouter>
          <div
            className="w-full h-screen bg-slate-900 text-white 
                      flex flex-col justify-center items-center gap-4"
          >
            <div className="-mt-24" />
            {children}
          </div>
        </AuthRouter>
      </body>
    </html>
  );
}
