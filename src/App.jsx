import { Header } from "./components/composure";

function App() {
  return (
    <>
      <div className="bg-orange-500 w-screen h-screen sm:hidden">
        <Header />
      </div>
      <div className="hidden sm:block">
        <p>kindly switch to mobile version</p>
      </div>
    </>
  );
}

export default App;
