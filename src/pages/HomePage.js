import LandingSection from "../components/LandingSection";
import SpecialsSection from "../components/SpecialsSection";

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
                    <SpecialsSection />
                </section>
            </main>
        </div>
    );
}

export default HomePage;