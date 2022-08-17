import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TopAlbums from "./pages/TopAlbumsPage";
import AlbumDetails from "./pages/AlbumDetails";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/:lang" element={<TopAlbums />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />
          <Route path="*" element={<TopAlbums />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
