import Header from "./components/Header";
import FloatingButton from "./components/FloatingButton";
import Banner from "./components/Banner"
import Services from "./components/Services"
import Footer from "./components/Footer"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between text-black">
      <div id={"home"}></div>
      <Header/>
      <FloatingButton />
      <Banner/>
      <Services />
      <Footer />
    </main>
  );
}
