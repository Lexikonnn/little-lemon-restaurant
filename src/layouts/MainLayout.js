import Header from "../components/Header/index";
import Footer from "../components/Footer/index";


const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;