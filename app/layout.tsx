import type { Metadata } from "next";
import { Saira_Condensed } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/app/provider"

const sairaCondensed = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'], // You can add other weights as needed
  variable: '--font-saira-condensed', // Custom CSS variable for the font
});

export const metadata: Metadata = {
  title: "Jonny's Portfolio",
  description: "A MacOS inspired portfolio built with Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={sairaCondensed.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
