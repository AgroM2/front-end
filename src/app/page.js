import Header from "./components/Header";
import FloatingButton from "./components/FloatingButton";
import Banner from "./components/Banner"
import Services from "./components/Services"
import Footer from "./components/Footer"


export default function Home() {
  return (
    <main className="justify-between text-black w-full max-w-full">
      <div id={"home"}></div>
      <Header />
      <FloatingButton />
      <Banner />
      <Services />
      <Footer />
    </main>
  );
}
