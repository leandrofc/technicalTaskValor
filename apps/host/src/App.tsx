import Home from 'home/RemoteEntry';
import { BrowserRouter, Route, Routes } from 'react-router';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div className="h-full">
              <AppLayout />
            </div>
          }
        >
          <Route
            path="/"
            element={<Home />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
