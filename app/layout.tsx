import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import StoreProvider from "./StoreProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "700", "800"]
});

export const metadata: Metadata = {
  title: "Ideanest Task",
  description: "Best Todo List Application"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          suppressHydrationWarning={true}
          className={`${inter.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
