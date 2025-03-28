import { css } from "../../../styled-system/css";

export const filterContainer = css({
    display: "flex",
    flexDirection: "row",
    columnGap: "5px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10px",
    boxSizing: "border-box",
    height: "40px",
    minWidth: "200px",
    border: "1px solid #E0E0E0",
    borderRadius: "20px",
    position: "relative",
    maxHeight: "200px",
    "& p": {
        color: "var(--adcentral-black-color)"
    },
    md: {
        cursor: "pointer"
    }
})

export const filterPlaceholder = css({
    color: "#C1C1C1",
    fontSize: "16px",
})

export const filterItemsContainer = css({
    position: "absolute",
    background: "var(--background_color)",
    border: "1px solid #E0E0E0",
    borderRadius: "20px",
    top: "45px",
    right: "0px",
})