import { css } from "../../../styled-system/css";

export const inputComponentContainer = css({
    display: "flex",
    flexDirection: "column",
    rowGap: "0px",
    background: "transparent",
    width: "100%",
})

export const inputStyle = css({
    background: "var(--adcentral-white-color)",
    borderRadius: "4px",
    border: "1.5px solid var(--adcentral-gray-color)",
    padding: "0px 5px",
    boxSizing: "border-box",
    height: "40px",
    width: "100%",
    _focus: {
        outline: "var(--adcentral-purple)",
        border: "1.5px solid var(--adcentral-purple)",
    },
    _disabled: {
        background: "#f2f2f2",
    }
})

export const inputContainer = css({
    position: "relative"
})

export const inputIconPadding = css({
    padding: "0px 5px 0px 20px"
})

export const inputIcon = css({
    position: "absolute",
    top: "8px",
    left: "5px",
})