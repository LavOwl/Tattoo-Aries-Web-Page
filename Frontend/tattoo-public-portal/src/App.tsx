import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TattooView from './pages/TattooView';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter >
            <Routes >
              <Route element={<><NavigationBar/><div className="w-4/5 m-auto"><Outlet /></div></>}>
                <Route path="/" element={<Home />} />
                <Route path="/gallery/:type" element={<Gallery />} />
                <Route path="/tattoo/:id" element={<TattooView />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
    </>
  );
}

export default App;
