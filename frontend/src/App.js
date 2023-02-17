import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
      <Link to="/">amazona</Link>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<productScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
