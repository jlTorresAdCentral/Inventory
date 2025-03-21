import { useTranslation } from "react-i18next";
import { screenContainer } from "../assets/styles/core.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";

const HomeComponent = () => {
    const { t, i18n } = useTranslation()

    useEffect(() => {
        const savedLang = localStorage.getItem("language") || "en";
        i18n.changeLanguage(savedLang);
    }, [i18n]);

    return (
        <div className={screenContainer}>
            <Navbar />
            <h1>{t("hello")}</h1>
            <div>
                <button onClick={() => i18n.changeLanguage("es")}>🇪🇸 Español</button>
                <button onClick={() => i18n.changeLanguage("en")}>🇺🇸 English</button>
                <button onClick={() => i18n.changeLanguage("it")}>🇮🇹 Italiano</button>
            </div>
            <Footer />
        </div>
    )
}

export default HomeComponent;