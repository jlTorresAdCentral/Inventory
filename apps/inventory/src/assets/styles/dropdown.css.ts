import { css } from "../../../styled-system/css"

export const dropdownItemsContainer = css({
    position: "absolute",
    background: "var(--adcentral-white-color)",
    borderRadius: "4px",
    border: "1.5px solid var(--adcentral-gray-color)",
    top: "0px",
    right: "0px",
})

export const dropdownContainer = css({
    position: "relative"
})

export const dropdownInputContainer = css({
    background: "var(--adcentral-white-color)",
    display: "flex",
    flexDirection: "row",
    columnGap: "5px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10px",
    boxSizing: "border-box",
    height: "40px",
    border: "1.5px solid var(--adcentral-gray-color)",
    borderRadius: "4px",
    position: "relative",
    maxHeight: "200px",
    "& p": {
        color: "var(--adcentral-black-color)"
    },
    md: {
        cursor: "pointer"
    }
})

export const dropdownPlaceholder = css({
    color: "#C1C1C1",
    fontSize: "16px",
})

export const dropdownItem = css({
    padding: "5px 10px",
    boxSizing: "border-box",
    md: {
        cursor: "pointer",
        _hover: {
            background: "var(--adcentral-gray-color)",
            "& p": {
                color: "var(--adcentral-white-color)"
            }
        }
    }
})