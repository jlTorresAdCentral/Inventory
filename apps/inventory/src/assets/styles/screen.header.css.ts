import { css } from "../../../styled-system/css";

export const screenHeaderContainer = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "30px",
    textAlign: "center",
    md: {
        flexDirection: "row",
        columnGap: "20px",
        justifyContent: "space-between",
    }
})

export const screenHeaderTexts = css({
    display: "flex",
    flexDirection: "column",
    "& h1": {
        fontSize: "32px",
        fontWeight: "700",
        color: "var(--adcentral-black-color)"
    },
    "& h2": {
        fontSize: "20px",
        lineHeight: "25px",
        fontWeight: "400",
        color: "var(--adcentral-gray-color)"
    }
})