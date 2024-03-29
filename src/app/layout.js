import { Inter,Antonio } from "next/font/google";
import "./reset.css";
import "./globals.css";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const antonio = Antonio({ subsets: ["latin"] });

export const metadata = {
  title: "Estructurama",
  description: "Arquitectura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={antonio.className}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
