import {AppContainer} from './styles';
import {Column} from './components/Column';
import {Card} from './components/Card';

/*const buttonStyles: CSSProperties = {
    backgroundColor: "#5aac44",
    borderRadius: "3px",
    border: "none",
    boxShadow: "none"
}*/

export const App = () => {
    return (
        <AppContainer>
            <Column text="today">
                <Card text="work on CRUD"/>
            </Column>
            <Column text="today">
                <Card text="finish styling"/>
            </Column>
            <Column text="next week">
                <Card text="finish client"/>
            </Column>
        </AppContainer>
    );
}

