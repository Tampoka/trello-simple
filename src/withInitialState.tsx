import {AppState} from './state/appStateReducer';
import {ComponentType, useState} from 'react';

type InjectedProps = {
    initialState: AppState
}

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps,
    keyof InjectedProps>

export function WithInitialState<TProps>(
    WrappedComponent: ComponentType<PropsWithoutInjected<TProps> & InjectedProps>
) {
    return (props: PropsWithoutInjected<TProps>) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [initialState, setInitialState] = useState<AppState>({
            lists: [],
            draggedItem: null
        })
        return <WrappedComponent {...props} initialState={initialState}/>

    }
}