import type { Metadata } from "next";
import { Gaegu } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/providers/ui-provider";

const gaegu = Gaegu({
  weight: "400", subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Busola Okeowo - Software Engineer",
  description: "Senior Software Engineer specializing in Web, and Backend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gaegu.className}>
        <UIProvider>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
