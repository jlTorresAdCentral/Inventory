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

export const whiteButton = css({
    borderRadius: "12px",
    textAlign: "center",
    alignContent: "center",
    height: "40px",
    background: "var(--adcentral-white-color)",
    padding: "4px 10px",
    boxSizing: "border-box",
    color: "var(--adcentral-purple)",
    md: {
        cursor: "pointer",
        _hover: {
            background: "var(--adcentral-purple)",
            color: "var(--adcentral-white-color)",
        }
    },
})

export const cancelFormButton = css({
    borderRadius: "8px",
    maxWidth: "300px",
    padding: "5px 20px",
    boxSizing: "border-box",
    color: "var(--adcentral-black-color)",
    border: "1px solid var(--adcentral-light-gray)",
    md: {
        cursor: "pointer",
        _hover: {
            background: "var(--adcentral-light-gray)",
            border: "1px solid var(--adcentral-purple)",
            "& label": {
                cursor: "inherit",
            }
        }
    }
})

export const saveFormButton = css({
    borderRadius: "8px",
    maxWidth: "300px",
    padding: "5px 20px",
    boxSizing: "border-box",
    color: "var(--adcentral-black-color)",
    border: "1px solid var(--adcentral-light-gray)",
    _disabled: {
        cursor: "initial",
        color: "var(--adcentral-gray-color)",
        _hover: {
            background: "initial",
            border: "1px solid var(--adcentral-light-gray)",
            color: "var(--adcentral-gray-color)",
        }
    },
    md: {
        cursor: "pointer",
        _hover: {
            background: "var(--adcentral-purple)",
            border: "1px solid var(--adcentral-white-color)",
            color: "var(--adcentral-white-color)",
            "& label": {
                cursor: "inherit",
            }
        }
    }
})