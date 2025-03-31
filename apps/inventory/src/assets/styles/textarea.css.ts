import { css } from "../../../styled-system/css";

export const textAreaContainer = css({
    display: "flex",
    flexDirection: "column",
    rowGap: "0px",
    width: "100%",
    "& label": {

    },
    "& textarea": {
        background: "var(--adcentral-white-color)",
        borderRadius: "4px",
        height: "80px",
        border: "1.5px solid var(--adcentral-gray-color)",
        padding: "5px",
        boxSizing: "border-box",
        _focus: {
            outline: "var(--adcentral-purple)",
            border: "1.5px solid var(--adcentral-purple)",
        },
    }
})