// context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    search: any,
}

type Action = {
    type: FormActions,
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    search: ''
};

// context

const FormContext = createContext<ContextType | undefined>(undefined);

//reducer - aqui fazer a transformacao do abnt
export enum FormActions {
    setSearch
};

const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setSearch:
            return { ...state, search: action.payload };

        default:
            return state;
    }
}

//provider
export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

//hook
export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm precisa do FormProvider');
    }
    return context;
}
