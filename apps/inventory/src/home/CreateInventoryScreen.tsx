import { useState } from "react";
import { useTranslation } from "react-i18next";
import { screenContainer, screenFooter, sectionAllHeight, sectionContainer } from "../assets/styles/core.css";
import Navbar from "../components/navbar/Navbar";
import ScreenHeaderComponent from "../components/screen.header.component";
import InputComponent from "../components/input.component";
import { adcentralSkuInput, createDetailsContainer, emptyVendorsContainer, formDetailsContainer, inventoryCardTitle, inventoryDetailsContainer, inventoryStockContainer, inventoryVendorContainer, itemAvailableInput, listServiceContainer, listServiceTextContainer, pricesContainer, skuServiceContainer, vendorFormButtons, vendorFormContainer, vendorSpacer } from "../assets/styles/inventory-creation.css";
import CheckboxComponent from "../components/checkbox.component";
import TextareaComponent from "../components/textarea.component";
import DropdownComponent from "../components/dropdown.component";
import { cancelFormButton, saveFormButton, whiteButton } from "../assets/styles/buttons.css";

const CreateInventoryScreen = () => {
    const [sellingPrice, setSellingPrice] = useState("")
    const [cost, setCost] = useState("")
    const [averageCost, setAverageCost] = useState("")
    const [taxable, setTaxable] = useState(false)
    const { t } = useTranslation()
    const [itemName, setItemName] = useState("")
    const [description, setDescription] = useState("")
    const [adCentralSku, setAdCentralSku] = useState("")
    const [itemAsService, setItemAsService] = useState(false)
    const [collection, setCollection] = useState("")
    const [availableItems, setAvailableItems] = useState("")
    const [trackQuantity, setTrackQuantity] = useState(false)
    const [sellingWithoutStock, setSellingWithoutStock] = useState(false)
    const [showVendorForm, setShowVendorForm] = useState(false)
    const [productLink, setProductLink] = useState("")
    const [vendorSku, setVendorSku] = useState("")
    const [vendorName, setVendorName] = useState("")

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

                            <DropdownComponent
                                items={[
                                    "Screens / iPhone screens",
                                    "Devices / Cords",
                                    "Devices / Headphones",
                                    "Accessories / Parts"
                                ]}
                                default={collection ? collection : t("collection")}
                                showSearchbar={true}
                                label={t("collection")}
                                onSelectItem={(value) => setCollection(value)}
                            />
                        </div>

                        {!itemAsService && (
                            <>
                                <div className={inventoryStockContainer}>
                                    <p className={inventoryCardTitle}>{t("stock")}</p>

                                    <CheckboxComponent
                                        checked={trackQuantity}
                                        text={t("track_quantity")}
                                        onCheck={() => setTrackQuantity(prev => !prev)}
                                    />

                                    {trackQuantity && (
                                        <>
                                            <div className={itemAvailableInput}>
                                                <InputComponent
                                                    label={t("available")}
                                                    placeholder="0"
                                                    value={availableItems}
                                                    disabled={false}
                                                    onTextChange={(value) => setAvailableItems(value)}
                                                />
                                            </div>

                                            <CheckboxComponent
                                                checked={sellingWithoutStock}
                                                text={t("continue_selling")}
                                                onCheck={() => setSellingWithoutStock(prev => !prev)}
                                            />
                                        </>
                                    )}
                                </div>

                                <div className={inventoryVendorContainer}>
                                    <div className={vendorSpacer}>
                                        <p className={inventoryCardTitle}>{t("vendors")}</p>

                                        <button
                                            className={whiteButton}
                                            onClick={() => setShowVendorForm(true)}
                                        >
                                            <p>+ {t("add_vendor")}</p>
                                        </button>
                                    </div>

                                    {showVendorForm ? (
                                        <div className={vendorFormContainer}>
                                            <div className={vendorSpacer}>
                                                <InputComponent
                                                    disabled={false}
                                                    label={t("vendor_name")}
                                                    placeholder={t("search_vendor")}
                                                    value={vendorName}
                                                    onTextChange={(value) => setVendorName(value)}
                                                />
                                                <InputComponent
                                                    disabled={false}
                                                    label={t("vendor_sku")}
                                                    placeholder={t("type_sku")}
                                                    value={vendorSku}
                                                    onTextChange={(value) => setVendorSku(value)}
                                                />
                                            </div>

                                            <InputComponent
                                                disabled={false}
                                                label={t("product_link")}
                                                placeholder={t("type_product_link")}
                                                value={productLink}
                                                onTextChange={(value) => setProductLink(value)}
                                            />

                                            <div className={vendorFormButtons}>
                                                <button
                                                    className={cancelFormButton}
                                                    onClick={() => { }}
                                                >
                                                    <label>{t("cancel")}</label>
                                                </button>
                                                <button
                                                    disabled={vendorName == "" && productLink == ""}
                                                    className={saveFormButton}
                                                    onClick={() => { }}
                                                >
                                                    <label>{t("save")}</label>
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            className={emptyVendorsContainer}
                                            onClick={() => setShowVendorForm(true)}
                                        >
                                            <p>{t("no_vendors_registered")}</p>
                                            <p>{t("register_first_vendor")}</p>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
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
                            onTextChange={(value) => setAverageCost(value)}
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

            <section className={sectionContainer}>
                <div className={screenFooter}>
                    <button
                        className={whiteButton}
                    >
                        {t("back")}
                    </button>
                    <button>
                        {t("save")}
                    </button>
                </div>
            </section>
        </div>
    )
}

export default CreateInventoryScreen;