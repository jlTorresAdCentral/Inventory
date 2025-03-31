import { css } from "../../../styled-system/css";

export const tableContainer = css({
    height: "420px",
    width: "100%",
    overflow: "auto",
    "& table": {
        height: "100%",
        width: "100%",
        textAlign: "center"
    },
    "& th": {
        background: "var(--adcentral-gray-color)",
        marginBottom: "5px",
        padding: "0px 5px",
        color: "var(--adcentral-white-color)"
    },
    "& tr": {
        height: "50px",
        padding: "0px 5px",
        color: "var(--adcentral-black-color)"
    },
    md: {
        height: "470px",
    },
    lg: {
        height: "400px",
    }
})

export const rowEven = css({
    background: "var(--divider-color)",
})

export const rowOdd = css({
    background: "var(--adcentral-white-color)",
})