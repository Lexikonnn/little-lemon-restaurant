import LandingSection from "../components/LandingSection";
import SpecialsSection from "../components/SpecialsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AboutSection from "../components/AboutSection";

const HomePage = () => {
    return (
        <div className="main-column">
            <main id="home">
                <section>
                    <LandingSection />
                </section>
            </main>
            <main>
                <section>
                    <SpecialsSection />
                </section>
            </main>
            <main>
                <section>
                    <TestimonialsSection />
                </section>
            </main>
            <main>
                <section>
                    <AboutSection />
                </section>
            </main>
        </div>
    );
}

export default HomePage;