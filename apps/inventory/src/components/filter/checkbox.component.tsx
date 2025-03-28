import { useState } from "react"
import { checboxFilterRow, checkboxOnly } from "../../assets/styles/checkbox-filter.component.css"

interface CheckboxFilterProps {
    text: string
    check: () => void
    onlyCheck: () => void
}

const CheckboxFilterComponent = (props: CheckboxFilterProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={checboxFilterRow}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => props.check()}
        >
            <p>{props.text}</p>

            {isHovered && (
                <div
                    className={checkboxOnly}
                    onClick={() => props.onlyCheck()}
                >
                    ONLY
                </div>
            )}
        </div>
    )
}

export default CheckboxFilterComponent