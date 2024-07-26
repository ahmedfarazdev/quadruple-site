import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./globals.css";

export const metadata = {
  title: "Quadruple Solutions",
  description: "Quadruple Solutions offers innovative technology solutions to streamline operations, enhance efficiency, and drive business growth. Elevate your business today.",
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <GoogleTagManager gtmId="GTM-KRR2QP3C" />
        <Header id="header-section" />
        {children}
        <section id="contact-section"><Footer /></section>
      </body>
      <GoogleAnalytics gaId="G-G7P385BJ7M" />
    </html>
  );
}


// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-KRR2QP3C');</script>
// <!-- End Google Tag Manager -->