import { css } from "../../../styled-system/css";

export const createDetailsContainer = css({
    display: "flex",
    flexDirection: "column",
    columnGap: "30px",
    rowGap: "10px",
    md: {
        flexDirection: "row",
        marginTop: "30px"
    }
})

export const formDetailsContainer = css({
    display: "flex",
    flexDirection: "column",
    rowGap: "30px",
    md: {
        flexGrow: "6",
    }
})

export const inventoryCardTitle = css({
    fontSize: "20px",
    fontWeight: "500"
})

export const pricesContainer = css({
    display: "flex",
    background: "#f2f2f2",
    color: "var(--adcentral-black-color)",
    borderRadius: "12px",
    padding: "20px 25px",
    boxSizing: "border-box",
    flexDirection: "column",
    rowGap: "20px",
    md: {
        flexGrow: "1",
    }
})

export const inventoryDetailsContainer = css({
    display: "flex",
    background: "#f2f2f2",
    color: "var(--adcentral-black-color)",
    borderRadius: "12px",
    padding: "20px 25px",
    boxSizing: "border-box",
    flexDirection: "column",
    rowGap: "20px",
})

export const inventoryStockContainer = css({
    display: "flex",
    background: "#f2f2f2",
    color: "var(--adcentral-black-color)",
    borderRadius: "12px",
    padding: "20px 25px",
    boxSizing: "border-box",
    flexDirection: "column",
    rowGap: "20px",
})

export const inventoryVendorContainer = css({
    display: "flex",
    background: "#f2f2f2",
    color: "var(--adcentral-black-color)",
    borderRadius: "12px",
    padding: "20px 25px",
    boxSizing: "border-box",
    flexDirection: "column",
    rowGap: "20px",
})

export const skuServiceContainer = css({
    display: "flex",
    flexDirection: "column",
    columnGap: "20px",
    width: "100%",
    rowGap: "10px",
    md: {
        flexDirection: "row",
    }
})

export const adcentralSkuInput = css({
    width: "100%",
    md: {
        width: "50%",
    }
})

export const listServiceContainer = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    md: {
        width: "50%",
    }
})

export const listServiceTextContainer = css({
    display: "flex",
    flexDirection: "row",
    columnGap: "10px",
    "& p": {
        fontSize: "14px",
        md: {
            fontSize: "10px"
        }
    }
})