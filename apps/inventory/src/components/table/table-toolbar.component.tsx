import { JSX } from "react"
import { tableButton } from "../../assets/styles/buttons.css"
import { iconSelect } from "../../assets/styles/core.css"
import { toolbarContainer, toolbarFiltersButton, toolbarIcons } from "../../assets/styles/table-toolbar.css"

interface TableToolbarComponentProps {
    onRefresh: () => void | null
    onDownload: () => void | null
    onExport: () => void | null
    filters: JSX.Element[]
    onAdd: () => void
}

const TableToolbarComponent = (props: TableToolbarComponentProps) => {
    return (
        <div className={toolbarContainer}>
            <div className={toolbarIcons}>
                {props.onRefresh != null && (
                    <div
                        className={iconSelect}
                        onClick={() => props.onRefresh()}
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3546 9.64375C20.7223 8.0125 18.4822 7 15.9944 7C11.0188 7 7 11.0275 7 16C7 20.9725 11.0188 25 15.9944 25C20.1932 25 23.6942 22.1313 24.6961 18.25H22.3546C21.4315 20.8713 18.9325 22.75 15.9944 22.75C12.2683 22.75 9.24015 19.7238 9.24015 16C9.24015 12.2762 12.2683 9.25 15.9944 9.25C17.863 9.25 19.5291 10.0263 20.7448 11.2525L17.1201 14.875H25V7L22.3546 9.64375Z" fill="#767676" />
                        </svg>
                    </div>
                )}
                {props.onDownload != null && (
                    <div
                        className={iconSelect}
                        onClick={() => props.onDownload()}
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2151 14.4216C23.6844 10.2421 20.1048 7 15.7832 7C12.4367 7 9.52979 8.95617 8.20261 12.0392C5.59437 12.8187 3.64062 15.2813 3.64062 17.9284C3.64062 21.2761 6.36421 23.9997 9.71193 23.9997H10.9262V21.5711H9.71193C7.70354 21.5711 6.06915 19.9367 6.06915 17.9284C6.06915 16.2235 7.52505 14.5806 9.31487 14.2661L10.0204 14.1423L10.2535 13.4647C11.1071 10.9743 13.226 9.42852 15.7832 9.42852C19.131 9.42852 21.8545 12.1521 21.8545 15.4998V16.7141H23.0688C24.4081 16.7141 25.4973 17.8033 25.4973 19.1426C25.4973 20.4819 24.4081 21.5711 23.0688 21.5711H20.6403V23.9997H23.0688C25.7475 23.9997 27.9259 21.8213 27.9259 19.1426C27.9244 18.0541 27.5581 16.9974 26.8854 16.1416C26.2127 15.2857 25.2725 14.6801 24.2151 14.4216Z" fill="#767676" />
                            <path d="M17.001 17.9291V13.072H14.5725V17.9291H10.9297L15.7867 24.0004L20.6438 17.9291H17.001Z" fill="#777777" />
                        </svg>
                    </div>
                )}
                {props.onExport != null && (
                    <div
                        className={iconSelect}
                        onClick={() => props.onExport()}
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.8 9.125H16L13.8 7H7.2C5.99 7 5.011 7.95625 5.011 9.125L5 21.875C5 23.0438 5.99 24 7.2 24H24.8C26.01 24 27 23.0438 27 21.875V11.25C27 10.0812 26.01 9.125 24.8 9.125ZM24.8 21.875H7.2V11.25H24.8V21.875ZM11.6 16.5731L13.151 18.0713L14.9 16.3925V20.8125H17.1V16.3925L18.849 18.0819L20.4 16.5731L16.011 12.3125L11.6 16.5731Z" fill="#767676" />
                        </svg>
                    </div>
                )}
            </div>
            <div className={toolbarFiltersButton}>
                <>
                    {props.filters.map((filter) => (
                        filter
                    ))}
                </>
                <button
                    className={tableButton}
                    onClick={() => props.onAdd()}
                >
                    Create item
                </button>
            </div>
        </div>
    )
}

export default TableToolbarComponent;