import Hero from "@/components/layout/sections/hero";
import SelectedWork from "@/components/layout/sections/projects-section";
import About from "@/components/layout/sections/about-us";
import Footer from "@/components/layout/sections/footer";

export default function Home()
{
    return (
        <main>
            <Hero/>
            <SelectedWork/>
            <About/>
            <Footer/>
        </main>
    );
}
