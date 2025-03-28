import { css } from "../../../styled-system/css";

export const borderButton = css({
    border: "1px solid #FFF",
    borderRadius: "8px",
    padding: "12px 20px",
    boxSizing: "border-box",
    cursor: "pointer",
})

export const tableButton = css({
    borderRadius: "12px",
    textAlign: "center",
    alignContent: "center",
    height: "40px",
    color: "var(--adcentral-white-color)",
    background: "var(--adcentral-purple)",
    minWidth: "250px",
    md: {
        cursor: "pointer",
        _hover: {
            background: "#818CF7"
        }
    }
})