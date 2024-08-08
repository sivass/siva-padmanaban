import { useTheme } from "../context/themeContext";
import {
    BsMoon,
    BsSun,
    BsLinkedin,
    BsFillEnvelopeAtFill,
    BsGithub,
  } from "react-icons/bs";


const ThemeSwitcher:React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (<>
        <button className={`bordered border-slate-200`} onClick={toggleTheme} aria-label="Switch Dark and Light">{
            theme === 'light' ? <BsSun /> : <BsMoon />}</button>
    </>);
}

export default ThemeSwitcher;