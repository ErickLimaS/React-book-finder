import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home'
import { BookPage } from './pages/bookPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />,
                <Route path="/book" element={<BookPage />} />
            </Routes>
        </BrowserRouter>
    );
}