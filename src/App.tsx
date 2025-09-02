import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Contacts from './components/Contacts';
import DirectionsPage from './pages/DirectionsPage';

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        const scrollToTarget = () => {
            if (location.hash) {
                const id = decodeURIComponent(location.hash.substring(1));
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return;
                }
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        // Небольшая задержка, чтобы DOM успел отрисоваться после смены маршрута
        const timeoutId = window.setTimeout(scrollToTarget, 0);
        return () => window.clearTimeout(timeoutId);
    }, [location.pathname, location.hash]);

    return null;
}

function App() {
    return (
        <Router>
            <ScrollToHash />
            <Header />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <About />
                                <Contacts />
                            </>
                        }
                    />
                    <Route path="/directions" element={<DirectionsPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
