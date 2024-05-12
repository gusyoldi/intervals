import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  return (
    <ul>
      <li>
        <Button variant={"default"}>
          <Link href="/adivinar-intervalo">Adivinar intervalo</Link>
        </Button>
      </li>
    </ul>
  );
}
