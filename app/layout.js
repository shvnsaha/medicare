import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "MediCare - Doctors Appointment System",
  description: "Contact with doctors anywhere, anytime. Book appointments, access medical records, and receive personalized health insights with our user-friendly platform.",
};

export default function RootLayout({ children }) {
  return (
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
          <main className="min-h-screen">{children}</main>

          {/* footer */}

        </ThemeProvider>


      </body>
    </html>
  );
}
