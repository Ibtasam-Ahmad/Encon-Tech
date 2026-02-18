import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Encon-Tech — Architecting the Intelligent Future",
  description: "We engineer intelligent systems that think, learn, and evolve. Since 2020, Encon-Tech has been at the forefront of the AI revolution, transforming how businesses operate through autonomous agents, generative intelligence, and predictive systems.",
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
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
