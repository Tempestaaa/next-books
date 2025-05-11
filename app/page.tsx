import DisplayGrid from "@/components/home/display-grid";
import Hero from "@/components/home/hero";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <DisplayGrid header="Bestsellers" />
      <DisplayGrid header="New releases" />
      <DisplayGrid header="Fiction" />
      <DisplayGrid header="Fantasy" />
      <DisplayGrid header="Romance" />
      <DisplayGrid header="Horror" />
      <DisplayGrid header="Science Fiction" />
      <DisplayGrid header="Mystery" />
    </div>
  );
}
