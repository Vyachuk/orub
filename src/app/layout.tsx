import type { Metadata } from "next";
import "../styles/globals.css";
import "../../public/fonts/fonts.css";

export const metadata: Metadata = {
  title: "150 ОРУБ",
  description:
    "150 Окремий Розвідувально-Ударний Батальйон був сформований на базі 150 окремої розвідувальної роти. Команда складається з кваліфікованих фахівців різних військових підрозділів та структур, кожен з яких має значний бойовий досвід, як в межах України, так і на міжнародному рівні.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
