import {useState} from 'react';
import {NewItemButton, NewItemFormContainer, NewItemInput} from '../styles';
import {useFocus} from '../utils/useFocus';

type NewItemFormProps = {
    onAdd(text: string): void
    handleInputOnBlur(): void
}

export const NewItemForm = ({onAdd, handleInputOnBlur}: NewItemFormProps) => {
    const [text, setText] = useState("")
    const inputRef = useFocus()

    const onBlurHandler = () => {
        onAdd(text)
        handleInputOnBlur()
    }
    return (
        <NewItemFormContainer>
            <NewItemInput
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)}
                onBlur={onBlurHandler}
            />
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    );
};

