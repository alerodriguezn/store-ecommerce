export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen flex flex-col items-center">{children}</main>;
}
