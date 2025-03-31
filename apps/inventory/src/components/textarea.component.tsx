import { textAreaContainer } from "../assets/styles/textarea.css"

interface TextareaComponentProps {
    label?: string
    placeholder?: string
    value: string
    onTextChange: (text: string) => void
}

const TextareaComponent = (props: TextareaComponentProps) => {
    return (
        <div className={textAreaContainer}>
            {props.label && (
                <label>{props.label}</label>
            )}
            <textarea
                placeholder={props.placeholder}
                onChange={(e) => props.onTextChange(e.target.value)}
            >

            </textarea>
        </div>
    )
}

export default TextareaComponent;