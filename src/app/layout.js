import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import "./globals.css";

export const metadata = {
  title: "Quadruple Solutions",
  description: "Quadruple Solutions offers innovative technology solutions tailored to streamline operations, enhance efficiency, and drive growth for businesses across industries. Discover how our cutting-edge solutions can elevate your business performance today.",
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header id="header-section" />
        {children}
        <section id="contact-section"><Footer /></section>
      </body>
    </html>
  );
}
