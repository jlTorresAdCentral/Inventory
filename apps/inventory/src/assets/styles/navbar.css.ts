import { css } from "../../../styled-system/css"

export const navbarSection = css({
    background: "#3543dc",
    position: "relative",
    boxSizing: "border-box",
    height: "60px",
    alignItems: "center",
    md: {
        height: "80px",
    },
    display: "flex"
})

export const navbarContainer = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: "20px",
    justifyContent: "space-between",
})

export const navbarLogo = css({
    height: "32px",
})

export const navbarMobileOptions = css({
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
    width: "100%",
    background: "#3543dc",
    position: "absolute",
    top: "60px",
    padding: "6px",
    boxSizing: "border-box",
    color: "#fff"
})

export const navbarOptions = css({
    alignItems: "center",
    '& a': {
        textDecoration: 'none',
        color: 'black',
    },
    '& a:not(:last-child)::after': {
        content: '"|"',
        padding: '0 8px',
        color: 'gray',
    },
})