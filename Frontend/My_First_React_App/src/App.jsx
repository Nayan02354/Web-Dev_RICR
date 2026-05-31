import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div id="abcd">My First React App</div>
      <p className="bg-primary text-info p-3">This is a simple paragraph.</p>

      <Footer />
    </>
  );
}

export default App;
