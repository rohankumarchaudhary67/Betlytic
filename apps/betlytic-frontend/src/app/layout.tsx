import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import NavbarCompUI from "@/components/application-ui/navigation-bar";
import RecoilProvider from "@/providers/recoil-provider";
import FooterUI from "@/components/application-ui/footer";

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
        <RecoilProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavbarCompUI />
            {children}
            <FooterUI />
          </ThemeProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
