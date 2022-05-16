import {AppContainer} from './styles';
import {Column} from './components/Column';
import {AddNewItem} from './components/AddNewItem';
import {useAppState} from './state/AppStateContext';
import {addList} from './state/actions';

export const App = () => {
    const {lists, dispatch} = useAppState()
    return (
        <AppContainer>
            {lists.map(list => (
                <Column id={list.id} text={list.text} key={list.id}/>
            ))}
            <AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch(addList(text))}/>
        </AppContainer>
    );
}

