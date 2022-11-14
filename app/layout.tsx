import "./globals.css";
import { Inter } from "@next/font/google";
import Header from "./Header";
import TodosList from "./todo/TodosList";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <Header />
        <main className="flex max-w-xl mx-auto justify-center py-10">
          {/* <div> */}
          {/* @ts-ignore */}
          {/* <TodosList />
          </div> */}

          <div className="w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
