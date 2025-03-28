import { css } from "../../../styled-system/css";

export const reviewsContainer = css({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    rowGap: "10px",
    sm: {
        flexDirection: "row",
        columnGap: "10px"
    }
})