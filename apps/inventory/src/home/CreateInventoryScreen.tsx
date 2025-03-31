import { useState } from "react";
import { useTranslation } from "react-i18next";
import { screenContainer, sectionAllHeight, sectionContainer } from "../assets/styles/core.css";
import Navbar from "../components/navbar/Navbar";
import ScreenHeaderComponent from "../components/screen.header.component";
import InputComponent from "../components/input.component";
import { adcentralSkuInput, createDetailsContainer, formDetailsContainer, inventoryCardTitle, inventoryDetailsContainer, inventoryStockContainer, inventoryVendorContainer, listServiceContainer, listServiceTextContainer, pricesContainer, skuServiceContainer } from "../assets/styles/inventory-creation.css";
import CheckboxComponent from "../components/checkbox.component";
import TextareaComponent from "../components/textarea.component";

const CreateInventoryScreen = () => {
    const [sellingPrice, setSellingPrice] = useState("")
    const [cost, setCost] = useState("")
    const [lastPurchasedPrice, setLastPurchasedPrice] = useState("")
    const [averageCost, setAverageCost] = useState("")
    const [taxable, setTaxable] = useState(false)
    const { t } = useTranslation()
    const [itemName, setItemName] = useState("")
    const [description, setDescription] = useState("")
    const [adCentralSku, setAdCentralSku] = useState("")
    const [itemAsService, setItemAsService] = useState(false)
    const [collection, setCollection] = useState("")
    const [trackQuantity, setTrackQuantity] = useState("")

    return (
        <div className={screenContainer}>
            <Navbar />
            <section className={[sectionContainer, sectionAllHeight].join(" ")}>
                <ScreenHeaderComponent
                    title={t("create_item")}
                    subtitle={t("add_inventory_item")}
                    onSearchChange={null}
                />

                <div className={createDetailsContainer}>
                    <div className={formDetailsContainer}>
                        <div className={inventoryDetailsContainer}>
                            <p className={inventoryCardTitle}>{t("details")}</p>

                            <InputComponent
                                label={t("item_name")}
                                placeholder={t("type_item_name")}
                                disabled={false}
                                value={itemName}
                                onTextChange={(value) => setItemName(value)}
                            />

                            <TextareaComponent
                                label={t("product_description")}
                                placeholder={t("product_description")}
                                value={description}
                                onTextChange={(value) => setDescription(value)}
                            />

                            <div className={skuServiceContainer}>
                                <div className={adcentralSkuInput}>
                                    <InputComponent
                                        label={t("adcentral_sku")}
                                        placeholder={t("type_sku")}
                                        disabled={false}
                                        value={adCentralSku}
                                        onTextChange={(value) => setAdCentralSku(value)}
                                    />
                                </div>

                                <div className={listServiceContainer}>
                                    <p>{t("list_as_service")}</p>

                                    <div className={listServiceTextContainer}>
                                        <CheckboxComponent
                                            checked={itemAsService}
                                            onCheck={() => setItemAsService(prev => !prev)}
                                        />

                                        <div>
                                            <p><b>{t("mark_item_as_service")}</b></p>
                                            <p>{t("item_as_service_description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={inventoryStockContainer}>
                            <p className={inventoryCardTitle}>{t("stock")}</p>


                        </div>

                        <div className={inventoryVendorContainer}>
                            <p className={inventoryCardTitle}>{t("vendors")}</p>


                        </div>
                    </div>
                    <div className={pricesContainer}>
                        <p className={inventoryCardTitle}>{t("pricing")}</p>

                        <InputComponent
                            label={t("selling_pricing")}
                            disabled={false}
                            trailingIcon={
                                <p>$</p>
                            }
                            value={sellingPrice}
                            onTextChange={(value) => setSellingPrice(value)}
                        />

                        <InputComponent
                            label={t("cost")}
                            disabled={false}
                            trailingIcon={
                                <p>$</p>
                            }
                            value={cost}
                            onTextChange={(value) => setCost(value)}
                        />

                        <InputComponent
                            label={t("average_cost")}
                            disabled={true}
                            trailingIcon={
                                <p>$</p>
                            }
                            value={averageCost}
                            onTextChange={() => { }}
                        />

                        <InputComponent
                            label={t("last_purchased_price")}
                            disabled={true}
                            trailingIcon={
                                <p>$</p>
                            }
                            value={averageCost}
                            onTextChange={() => { }}
                        />

                        <CheckboxComponent
                            checked={taxable}
                            text={t("charge_tax_on_item")}
                            onCheck={() => setTaxable(prev => !prev)}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CreateInventoryScreen;