import { useState } from "react"
import { filterContainer, filterItemsContainer, filterPlaceholder } from "../assets/styles/filter.component.css"
import SearchbarComponent from "./searchbar.component"
import CheckboxFilterComponent from "./filter/checkbox.component"

interface FilterComponentProps {
    items: string[]
    itemsSelected: string[]
    placeholder: string
    onSelectItems: (items: string[]) => void
}

const FilterComponent = (props: FilterComponentProps) => {
    const [itemsFiltered, setItemsFiltered] = useState(props.items)
    const [itemsDropdown, setItemsDropdown] = useState(false)

    const handleDropdown = () => {
        setItemsDropdown((prev) => !prev)
    }

    const onSearchFilter = (search: string) => {
        setItemsFiltered(props.items.filter((item) =>
            item.includes(search)
        ))
    }

    return (
        <div
            className={filterContainer}
            onClick={() => handleDropdown()}
        >
            <p><span className={filterPlaceholder}>{props.placeholder}:</span> {props.itemsSelected.length > 1 ? props.itemsSelected.length + " items selected" : props.itemsSelected[0] ?? "Any status"}</p>

            {itemsDropdown ? (
                <svg fill="none" height="5" viewBox="0 0 10 5" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10 5-5-5.00000139-5 5.00000139z" fill="#434343" />
                </svg>
            ) : (
                <svg fill="none" height="5" viewBox="0 0 10 5" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 0 5 5 5-5z" fill="#434343" />
                </svg>
            )}

            {itemsDropdown && (
                <div className={filterItemsContainer}>
                    <SearchbarComponent
                        placeholder={null}
                        onSearchChange={onSearchFilter}
                    />
                    {itemsFiltered.map((item) => (
                        <CheckboxFilterComponent
                            text={item}
                            check={() => { }}
                            onlyCheck={() => { }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default FilterComponent