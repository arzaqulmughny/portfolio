export default function Title({ children }: { children: string }) {
  return (
    <h1 className="font-semibold text-2xl tracking-tighter">{children}</h1>
  );
}
