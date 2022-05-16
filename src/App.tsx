import {AppContainer} from './styles';
import {Column} from './components/Column';
import {AddNewItem} from './components/AddNewItem';
import {useAppState} from './state/AppStateContext';

/*const buttonStyles: CSSProperties = {
    backgroundColor: "#5aac44",
    borderRadius: "3px",
    border: "none",
    boxShadow: "none"
}*/

export const App = () => {
    const {lists} = useAppState()
    return (
        <AppContainer>
            {lists.map(list => (
                <Column id={list.id} text={list.text} key={list.id}/>
            ))}
            <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log}/>
        </AppContainer>
    );
}

