import { css } from "../../../styled-system/css";

export const reviewCard = css({
    display: "flex",
    flexDirection: "column",
    border: "1px solid #b9bdcb",
    padding: "8px",
    boxSizing: "border-box",
    borderRadius: "8px",
    height: "160px",
    width: "340px",
    "& p": {
        overflow: "hidden",
        textOverflow: "ellipsis"
    }
})

export const reviewHeader = css({
    display: "flex",
    flexDirection: "row",
    columnGap: "10px",
    "& img": {
        height: "22px",
        width: "22px",
        sm: {
            height: "40px",
            width: "40px",
        }
    }
})

export const reviewRateDate = css({
    display: "flex",
    flexDirection: "row",
    columnGap: "10px",
    alignItems: "center",
})