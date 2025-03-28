import { css } from "../../../styled-system/css"

export const checboxFilterRow = css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "var(--adcentral-black-color)",
    padding: "5px 10px",
    md: {
        _hover: {
            background: "#F7F8FC",
        }
    },
    _last: {
        borderRadius: "0px 0px 20px 20px",
    },
})

export const checkboxOnly = css({
    padding: "3px",
    boxSizing: "border-box",
    fontSize: "10px",
    background: "var(--adcentral-gray-color)",
    color: "var(--adcentral-white-color)",
    md: {
        _hover: {
            border: "1px solid var(--adcentral-purple)",
            color: "var(--adcentral-purple)"
        }
    }
})