const fs = require("fs");
const axios = require("axios");

const LANGUAGES = ["es", "it"];
const API_URL = "https://libretranslate.com/translate";

async function translateText(text, lang) {
    try {
        const res = await axios.post(API_URL, {
            q: text,
            source: "en",
            target: lang,
            format: "text"
        });
        return res.data.translatedText;
    } catch (error) {
        console.error(`Error traduciendo a ${lang}:`, error);
        return text;
    }
}

async function generateTranslations() {
    //const basePath = `./apps/${app}/locales/`;
    const basePath = "../locales/";
    const enFile = `${basePath}en.json`;

    if (!fs.existsSync(enFile)) {
        console.warn(`⚠️ No se encontró ${enFile}, saltando...`);
    }

    const enTexts = JSON.parse(fs.readFileSync(enFile, "utf-8"));

    for (const lang of LANGUAGES) {
        const langFile = `${basePath}${lang}.json`;
        let translations = {};

        if (fs.existsSync(langFile)) {
            translations = JSON.parse(fs.readFileSync(langFile, "utf-8"));
        }

        let hasChanges = false;

        for (const key in enTexts) {
            if (!translations[key]) {
                translations[key] = await translate(
                    enTexts[key],
                    "es",
                    lang
                )//translateText(enTexts[key], lang);
                hasChanges = true;
            }
        }

        if (hasChanges) {
            fs.writeFileSync(langFile, JSON.stringify(translations, null, 2));
            console.log(`✅ Actualizado: ${langFile}`);
        } else {
            console.log(`👌 Nada nuevo en ${langFile}, no se modificó.`);
        }
    }
}

async function translate(
    text,
    from = "es",
    to = "en"
) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    const data = await response.json();

    return data[0].map(item => item[0]).join("");
}

generateTranslations();
