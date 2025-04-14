import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "AspireX : Ai carrer Navigator",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider 
      appearance={{
        baseTheme: dark,
        elements: {
          card: "bg-background",
          footerAction: "text-primary",
          formButtonPrimary: "bg-primary hover:bg-primary/90",
          // Add sign up text and button styling
          footerActionLink: "text-blue-500 hover:text-blue-600",
          socialButtonsBlockButton: "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300",
        },
        signIn: {
          appearance: {
            elements: {
              // Add sign up text at the bottom of sign in form
              footer: "flex flex-col items-center gap-4",
              footerAction: "text-sm text-gray-400",
              footerActionLink: "text-primary hover:text-primary/90 font-semibold",
            },
          },
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased `}>
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange              
              >
              
              <Header />
              <main className="min-h-screen pt-16 pt-16">{children}</main>
              <Toaster richColors />
              <footer className="bg-muted/50 py-12">
                <div className="container mx-auto px-4 text-center text-gray-200"> 
                  <p> Made with 💗by Furry</p>
                </div>
              </footer>
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
