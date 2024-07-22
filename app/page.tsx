import { Button } from "@/ui/button/button";
import Link from "next/link";

export default async function HomePage() {
  return (
    <ul className="flex-col justify-center items-center gap-4 p-4 rounded-md shadow-md max-w-60 m-auto mt-10">
      <li className="text-center">
        <Button variant="default">
          <Link href="/adivinar-intervalo">Adivinar intervalo</Link>
        </Button>
      </li>
    </ul>
  );
}
