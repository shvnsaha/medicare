import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "MediCare - Doctors Appointment System",
  description: "Contact with doctors anywhere, anytime. Book appointments, access medical records, and receive personalized health insights with our user-friendly platform.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider 
      appearance={{
        baseTheme: dark,
      }}
    >
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >


        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* header */}
          <Header/>
          <main className="min-h-screen">{children}</main>

          {/* footer */}

        </ThemeProvider>


      </body>
    </html>
    </ClerkProvider>
  );
}
