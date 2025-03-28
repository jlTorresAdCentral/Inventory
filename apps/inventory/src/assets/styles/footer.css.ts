import { css } from "../../../styled-system/css"

export const footerSection = css({
    marginTop: "auto",
})

export const footerContainer = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 5px",
    boxSizing: "border-box",
    rowGap: "10px"
})

export const footerSocialMedia = css({
    display: "flex",
    flexDirection: "row",
    columnGap: "5px",
    alignItems: "center",
    "& img": {
        height: "32px",
        width: "32px",
    }
})

export const footerDescription = css({
    textAlign: "center",
    width: "100%",
    "& h3": {
        fontSize: "20px",
        color: "#fff"
    },
    "& p": {
        fontSize: "14px",
        color: "#fff"
    }
})

export const footerLinksContainer = css({
    display: "flex",
    flex: "wrap",
    width: "100%",
    justifyContent: "space-between",
    columnGap: "15px"
})

export const footerLinks = css({
    width: "100%",
    "& h4": {
        color: "#fff",
        fontWeight: "bold",
        marginBottom: "5px",
    },
    "& p": {
        color: "#fff",
        fontWeight: "400",
    },
    "&:nth-child(1)": {
        textAlign: "right",
    },
    "&:nth-child(2)": {
        textAlign: "left",
    }
})

export const copyRightContainer = css({
    borderTop: "1px solid #fff",
    width: "100%",
    paddingTop: "10px",
    boxSizing: "border-box",
    "& p": {
        textAlign: "center",
        color: "#FFFF"
    }
})