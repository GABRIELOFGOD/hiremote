import PreNav from "@/components/PreNav";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hiremote Africa",
  description: "Hire remote africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PreNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
