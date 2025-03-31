import { screenHeaderContainer, screenHeaderTexts } from "../assets/styles/screen.header.css"
import SearchbarComponent from "./searchbar.component"

interface ScreenHeaderComponentProps {
    title: string
    subtitle: string
    onSearchChange: ((search: string) => void) | null
}

const ScreenHeaderComponent = (props: ScreenHeaderComponentProps) => {
    return (
        <div className={screenHeaderContainer}>
            <div className={screenHeaderTexts}>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>

            {props.onSearchChange != null && (
                <SearchbarComponent
                    placeholder={"Search for any item on your inventory..."}
                    onSearchChange={props.onSearchChange}
                />
            )}
        </div>
    )
}

export default ScreenHeaderComponent;