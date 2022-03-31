import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home'
import { BookPage } from './pages/bookPage'
import { Search } from './pages/search';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />,
                <Route path="/book" element={<BookPage price/>} />,
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
}