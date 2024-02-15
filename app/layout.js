import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "900", "500", "400", "700", '600', '800'], });

export const metadata = {
  title: "Alerts Expanded",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen overflow-auto bg-first-gray`}>{children}</body>
    </html>
  );
}
