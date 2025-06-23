import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
  display: 'swap',
});


export const metadata = {
  title: "Mastercard Microsite",
  description: "Safety and Security",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable}`}>
      <body
         className={raleway.className}
      >
        {children}
      </body>
    </html>
  );
}
