import { checkboxContainer, checkboxIcon } from "../assets/styles/checkbox.css"

interface CheckboxComponentProps {
    checked: boolean
    text?: string
    onCheck: () => void
}

const CheckboxComponent = (props: CheckboxComponentProps) => {
    return (
        <div className={checkboxContainer}>
            <div
                className={checkboxIcon}
                onClick={() => props.onCheck()}
            >
                {props.checked ? (
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4167 3.25H4.58333C3.56583 3.25 2.75 4.075 2.75 5.08333V17.9167C2.75 18.925 3.56583 19.75 4.58333 19.75H17.4167C18.4342 19.75 19.25 18.925 19.25 17.9167V5.08333C19.25 4.075 18.4342 3.25 17.4167 3.25ZM9.16667 16.0833L4.58333 11.5L5.87583 10.2075L9.16667 13.4892L16.1242 6.53167L17.4167 7.83333L9.16667 16.0833Z" fill="#626FF5" />
                    </svg>
                ) : (
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6667 5.33333V18.1667H4.83333V5.33333H17.6667ZM17.6667 3.5H4.83333C3.825 3.5 3 4.325 3 5.33333V18.1667C3 19.175 3.825 20 4.83333 20H17.6667C18.675 20 19.5 19.175 19.5 18.1667V5.33333C19.5 4.325 18.675 3.5 17.6667 3.5Z" fill="#767676" />
                    </svg>
                )}
            </div>

            {props.text && (
                <p>{props.text}</p>
            )}
        </div>
    )
}

export default CheckboxComponent;