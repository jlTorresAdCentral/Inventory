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
        background: "green"
    },
    lg: {
        background: "orange"
    },
    xl: {
        background: "yellow",
        maxWidth: "1280px"
    }
})