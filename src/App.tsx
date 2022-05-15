import {AppContainer} from './styles';
import Column from './components/Column';

/*const buttonStyles: CSSProperties = {
    backgroundColor: "#5aac44",
    borderRadius: "3px",
    border: "none",
    boxShadow: "none"
}*/

export const App = () => {
    return (
        <AppContainer>
            <Column text="today"/>
            <Column text="tomorrow"/>
            <Column text="now"/>

        </AppContainer>
    );
}

