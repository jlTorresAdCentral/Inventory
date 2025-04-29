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
    position: "fixed",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    background: "#f2f2f2",
    padding: "10px 20px",
    minHeight: "60px",
    maxWidth: "1280px",
    marginTop: "200px",
    height: "60px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderTop: "1px solid var(--divider-color)",
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

export const footerFijo = css({
    position: "fixed",
    //    position: fixed;
    bottom: "0",
    left: "0",
    width: "100%",
    background: "#6200ea",
    color: "white",
    textAlign: "center",
    padding: "10px"
})