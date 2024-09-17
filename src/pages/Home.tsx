import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";
import { useTheme } from "../context/themeContext";
import Layout from "../layout/layout";

const Home: React.FC = () => {
    const {theme} = useTheme();
    return (
        <>
        <Layout>
            <Header />
            <Body />
            <Footer />
        </Layout>
        </>
    );
}

export default Home;