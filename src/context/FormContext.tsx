// context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    search: any,
    isbn: any,
    title: any,
    description: any,
    price: any,
    date: any,
    publisher: any,
    categories: any,
    pageCount: number,
    buyLink: any,
    id: any, //used to get cover art
    author: any,
    language: any
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
    search: '',
    isbn: '',
    title: '',
    description: '',
    price: '',
    date: '',
    publisher: '',
    categories: '',
    pageCount: 0,
    buyLink: '',
    id: '',
    author: '',
    language: ''
};

// context
const FormContext = createContext<ContextType | undefined>(undefined);

//reducer
export enum FormActions {
    setSearch,
    setIsbn,
    setTitle,
    setDescription,
    setPrice,
    setDate,
    setPublisher,
    setCategories,
    setPageCount,
    setBuyLink,
    setId,
    setAuthor,
    setLanguage
};

const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setSearch:
            return { ...state, search: action.payload };
        case FormActions.setIsbn:
            return { ...state, isbn: action.payload };
        case FormActions.setTitle:
            return { ...state, title: action.payload };
        case FormActions.setDescription:
            return { ...state, description: action.payload };
        case FormActions.setPrice:
            return { ...state, price: action.payload };
        case FormActions.setDate:
            return { ...state, date: action.payload };
        case FormActions.setPublisher:
            return { ...state, publisher: action.payload };
        case FormActions.setCategories:
            return { ...state, categories: action.payload };
        case FormActions.setPageCount:
            return { ...state, pageCount: action.payload };
        case FormActions.setBuyLink:
            return { ...state, buyLink: action.payload };
        case FormActions.setId:
            return { ...state, id: action.payload };
        case FormActions.setAuthor:
            return { ...state, author: action.payload };
        case FormActions.setLanguage:
            return { ...state, language: action.payload };

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
