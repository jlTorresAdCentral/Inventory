import { css } from "../../../styled-system/css";

export const searchBarContainer = css({
    position: "relative"
})

export const searchBarIcon = css({
    position: "absolute",
    top: "9px",
    left: "9px",
})

export const searchbarInput = css({
    height: "40px",
    //width: "300px",
    border: "1px solid var(--divider-color)",
    borderRadius: "20px",
    paddingLeft: "40px",
    paddingRight: "20px",
    color: "var(--adcentral-black-color)",
    outline: "var(--divider-color)",
    _focus: {
        outline: "var(--adcentral-purple)",
        borderColor: "var(--adcentral-purple)",
    },
    md: {
        width: "420px",
    }
})