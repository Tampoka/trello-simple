import {AppContainer} from './styles';
import {Column} from './components/Column';
import {AddNewItem} from './components/AddNewItem';
import {useAppState} from './state/AppStateContext';
import {addList} from './state/actions';
import {CustomDragLayer} from './components/CustomDragLayer';

export const App = () => {
    const {lists, dispatch} = useAppState()
    return (
        <AppContainer>
            <CustomDragLayer/>
            {lists.map(list => (
                <Column id={list.id} text={list.text} key={list.id}/>
            ))}
            <AddNewItem toggleButtonText="+ Add another list"
                        onAdd={text => dispatch(addList(text))}/>
        </AppContainer>
    );
}

