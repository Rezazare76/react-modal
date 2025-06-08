import type { Metadata } from "next";
import "./globals.css";

import Image from "next/image";
import Link from "next/link";

import { schema } from "./data";

export const metadata: Metadata = {
  title:
    "Build a Reusable React & Next.js Modal Component | Tailwind + TypeScript",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  description:
    "Learn to build a reusable modal in React and Next.js with Tailwind CSS and TypeScript. Beginner-friendly guide.",

  keywords: [
    "React Modal Tutorial",
    "Next.js Modal Tutorial",
    "Custom Modal React",
    "React Tailwind Modal",
    "Reusable Modal in TypeScript",
    "React UI Component",
  ],
  authors: [
    { name: "Reza Zare", url: "https://www.linkedin.com/in/rezazare76" },
  ],
  creator: "Reza Zare",
  publisher: "Reza Zare",
  openGraph: {
    title:
      "Build a Reusable React & Next.js Modal Component | Tailwind + TypeScript",
    description:
      "Step-by-step guide to building a flexible and scalable modal component in React + Next.js with Tailwind CSS.",
    url: "https://react-modal-woad-five.vercel.app/",
    siteName: "React Modal Guide",
    images: [
      {
        url: "/og-cover.png", // 👈 حتماً اینو بساز و توی public بذار
        width: 1200,
        height: 630,
        alt: "React & Next.js Modal Component Cover",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://react-modal-woad-five.vercel.app"),
  category: "Web Development",
  generator: "Next.js",
  applicationName: "React Modal Tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="canonical"
          href="https://react-modal-woad-five.vercel.app/"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      </head>
      <body className="min-h-[200vh] bg-white">
        <header className="bg-white/85 h-[70px] text-center content-center shadow backdrop-opacity-85 w-full">
          <nav className="flex items-center gap-3 fixed  p-5 top-0 left-0">
            <Link
              href={"https://github.com/Rezazare76/react-modal"}
              target="_blank"
              title="Rezazare76 github"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-mark.svg"
                alt="github icon"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/rezazare76"}
              target="_blank"
              title="Rezazare76 linkedin"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="linkedin icon"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href={
                "https://medium.com/@rezazare2088/react-nextjs-modal-tutorial-ccc2a8ab9af8"
              }
              target="_blank"
              title="Rezazare76 medium"
              rel="noopener noreferrer"
            >
              <Image
                src="/medium.svg"
                alt="medium icon"
                width={30}
                height={30}
              />
            </Link>
          </nav>
          <h1 className="font-bold text-xl">React Modal</h1>
        </header>

        {children}
      </body>
    </html>
  );
}
