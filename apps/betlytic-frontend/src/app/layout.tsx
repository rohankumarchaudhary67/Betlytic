import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import NavbarCompUI from "@/components/application-ui/navigation-bar";

export const metadata: Metadata = {
  title: "Betlytic | Trade on your opinion...",
  icons: {
    icon: "/logo/candlestick.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarCompUI />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
