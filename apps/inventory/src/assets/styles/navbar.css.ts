import { css } from "../../../styled-system/css"

export const navbarSection = css({
    position: "relative",
    boxSizing: "border-box",
    height: "60px",
    alignItems: "center",
    md: {
        height: "80px",
    },
    display: "flex",
})

export const navbarContainer = css({
    background: "#f2f2f2",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: "20px",
    justifyContent: "space-between",
    position: "relative",
    padding: "10px 5px",
    borderBottom: "1px solid var(--divider-color)",
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

export const asideNavScreen = css({
    background: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: "0",
    left: "0",
    height: "100vh",
    width: "100vw",
    zIndex: "1000",
    display: "flex",
    transition: "opacity 0.3s ease-in-out"
})

export const asideNavContainer = css({
    position: 'absolute',
    top: 0,
    left: "0", // Se mueve hacia afuera cuando está cerrado
    width: '300px',
    height: '100vh',
    bg: 'white',
    p: 6,
    boxShadow: 'lg',
    transition: 'left 0.3s ease-in-out', // Animación con solo CSS
    background: "var(--adcentral-purple)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
})

export const asideNavbarLogo = css({
    marginTop: "20px",
    width: "150px"
})

export const storeNavbarContainer = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: "20px",
    color: "var(--adcentral-black-color)"
})

export const storeNavbar = css({
    display: "flex",
    flexDirection: "column",
    "& p": {
        "&:nth-child(1)": {
            fontSize: "16px",
            lineHeight: "12px",
        },
        "&:nth-child(2)": {
            fontSize: "14px",
        }
    }
})

export const navbarOption = css({
    color: "var(--adcentral-black-color)",
    fontSize: "20px",
    md: {
        cursor: "pointer",
        _hover: {
            color: "var(--adcentral-purple)",
        }
    }
})

export const asideNavbarOptions = css({
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
    marginTop: "50px",
    width: "100%",
})

export const asideNavbarOption = css({
    display: "flex",
    flexDirection: "row",
    columnGap: "10px",
    cursor: "pointer",
    height: "30px",
    width: "100%",
    "& p": {
        color: "var(--adcentral-white-color)"
    },
    "& svg": {
        height: "24px",
        width: "24px"
    },
    md: {
        cursor: "pointer",
    }
})

export const asideNavbarSubOption = css({
    cursor: "pointer",
    color: "var(--adcentral-white-color)",
    paddingLeft: "40px",
    height: "20px",
    width: "100%",
    md: {
        cursor: "pointer",
    }
})