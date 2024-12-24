import "@/app/ui/global.css";
import { inter } from "./ui/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"${inter.classname} antialiased"}>{children}</body>
    </html>
  );
}
