import { JSX } from "react"
import { inputComponentContainer, inputContainer, inputIcon, inputIconPadding, inputStyle } from "../assets/styles/input.css"

interface InputComponentProps {
    label?: string
    placeholder?: string
    disabled: boolean
    trailingIcon?: JSX.Element
    value: string
    onTextChange: (value: string) => void
}

const InputComponent = (props: InputComponentProps) => {
    return (
        <div className={inputComponentContainer}>
            {props.label && (
                <label>{props.label}</label>
            )}
            <div className={inputContainer}>
                <input
                    value={props.value}
                    placeholder={props.placeholder ?? ""}
                    disabled={props.disabled}
                    className={[
                        inputStyle,
                        props.trailingIcon != null ? inputIconPadding : ""
                    ].join(" ")}
                    onChange={(e) => {
                        if (!props.disabled) {
                            props.onTextChange(e.target.value);
                        }
                    }}
                />
                {props.trailingIcon && (
                    <div className={inputIcon}>
                        {props.trailingIcon}
                    </div>
                )}
            </div>
        </div>
    )
}

export default InputComponent;