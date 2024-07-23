import styles from "../styles/loginpage.module.scss"

interface TextInputProps {
    id: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

function TextInput({id, placeholder, value, onChange, className} : TextInputProps) {
    return (
        <label aria-label={placeholder}>
            <input id={id} placeholder={placeholder} onChange={onChange} value={value} className={`${styles.input} ${className}`}/>
        </label>
    );
}

export default TextInput;