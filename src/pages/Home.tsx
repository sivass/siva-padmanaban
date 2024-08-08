import ThemeSwitcher from "../components/ThemeSwitcher";
import { useTheme } from "../context/themeContext";
import Layout from "../layout/layout";

const Home: React.FC = () => {
    const {theme} = useTheme();
    return (
        <>
        <Layout>
            <ThemeSwitcher />
        </Layout>
        </>
    );
}

export default Home;