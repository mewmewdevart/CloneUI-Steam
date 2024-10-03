import Carousel from "@components/molecules/carousel/carousel";
import Footer from "@components/organisms/footer/footer";
import Navbar from "@components/organisms/navbar/navbar";
import gamesData from "@utils/dataGames";

function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-brand-secondary-30">
      <Navbar />
      <Carousel
        imagesCarousel={gamesData.map(game => game.imageCarousel)} 
        logoCarousel={gamesData.map(game => game.logoCarousel)}
        labelCarousel={gamesData.map(game => game.labelCarousel)}
      />
       <div className="flex-grow" />
      <Footer/>
    </div>
  );
}

export default Home;
