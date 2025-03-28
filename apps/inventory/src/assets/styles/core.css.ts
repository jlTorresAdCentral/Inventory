import { css } from "../../../styled-system/css";

export const mobileOnly = css({
    display: "flex",
    sm: {
        display: "none"
    }
})

export const hideMobile = css({
    display: "none",
    sm: {
        display: "flex"
    }
})

export const verticalSeparator = css({
    borderLeft: "1px solid #FFF"
})

export const screenContainer = css({
    display: "flex",
    height: "100vh",
    width: "100%",
    flexDirection: "column"
})

export const sectionContainer = css({
    margin: "0px auto",
    padding: "0px 10px",
    boxSizing: "border-box",
    width: "100%",
    md: {

    },
    lg: {

    },
    xl: {
        maxWidth: "1280px"
    }
})

export const sectionAllHeight = css({
    height: "100vh",
    position: "relative",
})

export const iconSelect = css({
    cursor: "pointer",
    "& svg": {
        height: "30px",
        width: "30px"
    }
})

export const screenFooter = css({
    height: "60px",
    width: "100%",
    padding: "10px 20px",
    boxSizing: "border-box",
    background: "#f2f2f2",
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    md: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
})

export const purpleBadge = css({
    background: "var(--adcentral-purple)",
    borderRadius: "8px",
    padding: "5px 15px",
    boxSizing: "border-box",
    width: "fit-content",
    textAlign: "center",
    alignContent: "center",
    "& p": {
        fontSize: "16px",
        lineHeight: "20px",
        fontWeight: "500",
        color: "var(--adcentral-white-color)",
    }
})