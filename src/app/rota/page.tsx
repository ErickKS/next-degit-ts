import Link from "next/link";

export default function Rota() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <p>Hello world</p>

      <Link href={"/"} className="flex justify-center px-4 py-2 bg-white rounded-md text-black">
        Página 1
      </Link>
    </main>
  );
}
