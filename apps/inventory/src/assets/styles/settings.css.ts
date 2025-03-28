import { css } from "../../../styled-system/css"

export const settingsContainer = css({
    position: "absolute",
    zIndex: "20",
    top: "50px",
    right: "0px",
    borderRadius: "20px",
    border: "1px solid #E0E0E0",
    margin: "0px 10px",
    background: "var(--background_color)",
    minWidth: "320px",
})

export const settingsUser = css({
    display: "flex",
    flexDirection: "column",
    padding: "10px 5px",
    boxSizing: "border-box",
    "& p": {
        color: "var(--adcentral-black-color)",
        "&:nth-child(1)": {
            fontSize: "28px",
            fontWeight: "bold",
            lineHeight: "25px"
        },
        "&:nth-child(2)": {
            fontSize: "18px",
            lineHeight: "25px",
            color: "var(--adcentral-gray-color)",
        }
    },
    justifyContent: "center",
    alignItems: "center"
})

export const settingsLinksContainer = css({
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid var(--divider-color)",
})

export const settingsLink = css({
    display: "flex",
    flexDirection: "row",
    columnGap: "5px",
    alignItems: "center",
    height: "40px",
    padding: "0px 10px",
    boxSizing: "border-box",
    color: "var(--adcentral-black-color)",
    md: {
        cursor: "pointer",
        _hover: {
            background: "#F7F8FC",
            color: "var(--adcentral-purple)",
            "& path": {
                fill: "var(--adcentral-purple)"
            }
        }
    }
})

export const settingsLogOut = css({
    borderRadius: "0px 0px 20px 20px",
    background: "#F6F6F6",
    color: "var(--adcentral-black-color)",
    height: "40px",
    width: "100%",
    alignContent: "center",
    textAlign: "center",
    md: {
        cursor: "pointer",
        _hover: {
            background: "var(--adcentral-purple)",
            color: "var(--adcentral-white-color)",
        }
    }
})