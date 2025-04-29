import { useState } from "react"
import SearchbarComponent from "./searchbar.component"
import { dropdownContainer, dropdownInputContainer, dropdownItem, dropdownItemsContainer, dropdownPlaceholder } from "../assets/styles/dropdown.css"

interface DropdownProps {
    items: string[]
    default: string
    showSearchbar: boolean
    label?: string
    onSelectItem: (item: string) => void
}

const DropdownComponent = (props: DropdownProps) => {
    const [itemsFiltered, setItemsFiltered] = useState(props.items)
    const [itemsDropdown, setItemsDropdown] = useState(false)

    const selectItem = (item: string) => {
        handleDropdown(false)
        props.onSelectItem(item)
    }

    const handleDropdown = (show?: boolean) => {
        if (show != undefined) {
            setItemsDropdown(show)
        } else {
            setItemsDropdown((prev) => !prev)
        }
    }

    const onSearchFilter = (search: string) => {
        setItemsFiltered(props.items.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        ))
    }

    return (
        <div className={dropdownContainer}>
            {props.label && (
                <label>{props.label}</label>
            )}
            <div
                className={dropdownInputContainer}
                onClick={() => handleDropdown()}
            >
                <p>{props.default}</p>

                {itemsDropdown ? (
                    <svg fill="none" height="5" viewBox="0 0 10 5" width="10" xmlns="http://www.w3.org/2000/svg">
                        <path d="m10 5-5-5.00000139-5 5.00000139z" fill="#434343" />
                    </svg>
                ) : (
                    <svg fill="none" height="5" viewBox="0 0 10 5" width="10" xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 0 5 5 5-5z" fill="#434343" />
                    </svg>
                )}


            </div>
            {itemsDropdown && (
                <div className={dropdownItemsContainer}>
                    {props.showSearchbar && (
                        <SearchbarComponent
                            placeholder={null}
                            onSearchChange={onSearchFilter}
                        />
                    )}

                    {itemsFiltered.map((item) => (
                        <div
                            key={item}
                            className={dropdownItem}
                            onClick={() => selectItem(item)}
                        >
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownComponent;