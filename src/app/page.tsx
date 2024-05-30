import Image from "next/image";
import Tank from "./components/Tank";
import Featured from "./components/Feature";

export default function Home() {
  return (
    <main>
      <Tank />
      <Featured/>
    </main>
  );
}
