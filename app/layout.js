import PreNav from "@/components/PreNav";
import NavBar from "@/components/NavBar";
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
        <NavBar />
        <PreNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
