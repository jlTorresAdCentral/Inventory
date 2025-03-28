import { css } from "../../../styled-system/css";

export const toolbarContainer = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 5px",
    boxSizing: "border-box",
    md: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
})

export const toolbarIcons = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: "4px",
})

export const toolbarFiltersButton = css({
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center"
})