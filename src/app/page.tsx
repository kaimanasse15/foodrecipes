import Image from "next/image";
import Tank from "./components/Tank";
import Featured from "./components/Feature";
import Services from "./components/Advice";
import Recipe from "./components/Recipe";

export default function Home() {
  return (
    <main>
      <Tank />
      <Featured/>
      <Services/>
      <Recipe/>
    </main>
  );
}
