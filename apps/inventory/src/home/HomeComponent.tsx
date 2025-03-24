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

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
        console.log("Changing language to: " + language)
    }

    return (
        <div className={screenContainer}>
            <Navbar />
            <h1>{t("home")} {t("component")}</h1>
            <div>
                <button onClick={() => changeLanguage("es")}>🇪🇸 Español</button>
                <button onClick={() => changeLanguage("en")}>🇺🇸 English</button>
            </div>
            <Footer />
        </div>
    )
}

export default HomeComponent;