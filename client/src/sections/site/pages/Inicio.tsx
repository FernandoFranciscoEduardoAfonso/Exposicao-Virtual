import HeroSection from "@/components/hero-section"
import CardFeaturedArt from "../components/CardFeaturedArt"
import Parceiros from "../components/Parceiros"

const Inicio = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeroSection />

      <CardFeaturedArt />

      <Parceiros />

      {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium dicta autem iste vitae neque voluptatem nemo minus sunt molestiae id repudiandae ut, beatae voluptatum non blanditiis molestias eum corporis. Quam?</p> */}
    </div>
  )
}

export default Inicio
