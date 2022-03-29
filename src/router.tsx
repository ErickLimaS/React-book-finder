import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home'
import { Book } from './pages/book'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />,
                <Route path="/book" element={<Book />} />
            </Routes>
        </BrowserRouter>
    );
}