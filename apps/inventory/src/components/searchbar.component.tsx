import { searchBarContainer, searchBarIcon, searchbarInput } from "../assets/styles/searchbar.component.css";

interface SearchbarComponentProps {
    placeholder: string | null
    onSearchChange: (search: string) => void
}

const SearchbarComponent = (props: SearchbarComponentProps) => {
    return (
        <div className={searchBarContainer}>
            <svg className={searchBarIcon} fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="m10.5084 3.97093c-1.98912.00547-3.89459.80089-5.29724 2.21128s-2.18757 3.32021-2.1821 5.30929c.00547 1.9891.80089 3.8946 2.21128 5.2973 1.41039 1.4026 3.32021 2.1875 5.30936 2.1821 1.9891-.0055 3.8946-.8009 5.2972-2.2113s2.1876-3.3202 2.1821-5.3093c-.0055-1.98915-.8009-3.89462-2.2113-5.29727s-3.3202-2.18758-5.3093-2.1821zm-6.71534.80096c1.77669-1.78649 4.19029-2.79402 6.70984-2.80096 2.5195-.00693 4.9386.98731 6.7251 2.764s2.7941 4.19029 2.801 6.70987c.006 2.1823-.7391 4.2893-2.0932 5.9751l3.8279 3.8137-1.4116 1.4168-3.8259-3.8117c-1.6796 1.3672-3.7854 2.1261-5.971 2.1322-2.51958.0069-4.93869-.9873-6.72518-2.764s-2.79402-4.1903-2.80095-6.7099c-.00694-2.51951.9873-4.93862 2.76399-6.72511z" fill="#000000" fill-rule="evenodd" />
            </svg>
            <input
                className={searchbarInput}
                placeholder={props.placeholder ?? ""}
                onChange={(e) => props.onSearchChange(e.target.value)}
            ></input>
        </div>
    )
}

export default SearchbarComponent;