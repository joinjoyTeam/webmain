import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';


function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

// //test seo cancle
// import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar.jsx'
// import Home from './pages/Home.jsx'
// import Place from './pages/Place.jsx'

// function App() {
//   return (
//     <div className="min-h-screen text-slate-900">
//       <Navbar />

//       {/* Home แสดงตลอด (เหมือนเดิม) */}
//       <Home />

//       {/* Router ใช้เฉพาะหน้า Place */}
//       <Routes>
//         <Route path="/krabi/places/:slug" element={<Place />} />
//       </Routes>
//     </div>
//   )
// }

// export default App

