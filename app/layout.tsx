export const metadata = {
  title: "Next.js - Demo Form",
  description: "Next.js example with React Hook Form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
