import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h1 className="text-xl font-semibold">Hello World</h1>

      {/* Se precisar de imagem é pra colocar no public */}
      {/* Só precisa colocar o nome do arquivo no SRC, tipo "/macaco.png" */}
      {/* Se precisar mudar tamanho é só mudar o width e o height" */}
      <Image src={"/next.svg"} alt="descrição imagem" width={150} height={150} />

      {/* Se precisar de um pagina secundária, criar uma nova pasta na pasta app */}
      {/* criar um arquivo "page.js" dentro dela e fazer igual ta na que existe ai */}
      {/* Depois só mudar aqui no Link o HREF para /nome-da-pasta */}
      <Link href={"/rota"} className="flex justify-center px-4 py-2 bg-white rounded-md text-black">
        Página 2
      </Link>
    </main>
  );
}
