import { css } from "../../../styled-system/css";

export const sectionLoginContainer = css({
    margin: "0px auto",
    padding: "0px",
    boxSizing: "border-box",
    height: "100vh",
    width: "100%",
    md: {

    },
    lg: {

    },
    xl: {
        maxWidth: "1280px"
    }
})

export const loginContainer = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    background: "red",
    height: "100%"
})

export const loginLeftSide = css({
    background: "green",
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    "& img": {
        width: "200px"
    },
    md: {
        width: "50%"
    }
})

export const loginFormContainer = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    rowGap: "40px",
    "& h3": {
        fontWeight: "700",
        color: "var(--adcentral-black-color)"
    }
})

export const loginForm = css({
    display: "flex",
    flexDirection: "column",
    width: "250px"
})

export const loginRightSide = css({
    display: "none",
    background: "yellow",
    md: {
        display: "block",
        width: "50%",
    }
})