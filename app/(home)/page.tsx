import HomeHero from "./_sections/hero";
import HomeAbout from "./_sections/about";
import HomeBusiness from "./_sections/business";
import HomePortfolio from "./_sections/portfolio";
import HomePartners from "./_sections/partners";
import HomeContact from "./_sections/contact";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeBusiness />
      <HomePortfolio />
      <HomePartners />
      <HomeContact />
    </>
  );
}
