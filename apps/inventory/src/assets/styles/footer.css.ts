import { css } from "../../../styled-system/css"

export const footerSection = css({
    marginTop: "auto",
    background: "red",
})

export const footerContainer = css({

})

export const footerSocialMedia = css({
    display: "flex",
    flexDirection: "row",
    columnGap: "5px",
    alignItems: "center",
    "& svg": {
        height: "32px",
        width: "32px"
    }
})