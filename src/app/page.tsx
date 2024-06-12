import Image from "next/image";
import Tank from "./components/Tank";
import Featured from "./components/Feature";
import Services from "./components/Advice";
import Recipe from "./components/Recipe";
import Survey from "./components/Survey";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Tank />
      <Featured/>
      <Services/>
      <Recipe/>
      <Survey/>
      <Footer/>
    </main>
  );
}
