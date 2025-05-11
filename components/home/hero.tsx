import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <article className="overflow-x-auto h-[calc(100dvh-4rem)] p-4 rounded relative grid-center">
      <Image
        src="/images/hero.jpg"
        alt="hero"
        fill
        draggable={false}
        priority
        className="object-cover"
      />

      <section className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex-center justify-center-safe flex-col gap-4 bg-background/30 backdrop-blur-xs p-8 rounded">
        <header className="text-6xl font-heading whitespace-nowrap">
          Find Peace Within Every Page.
        </header>

        <p>
          Relax and immerse yourself in wonderful stories at our online book
          haven.
        </p>

        <Link href="/shop">
          <Button className="!px-8 py-6">Explore more!</Button>
        </Link>
      </section>
    </article>
  );
}
