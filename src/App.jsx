import { Header } from "./components/composure";

function App() {
  return (
    <>
      <div className="bg-orange-500 w-screen h-screen grid place-content-center md:hidden">
        <div className="bg-white w-[20rem] h-[35rem] rounded-xl">
          <Header />
        </div>
      </div>
      <div className="hidden md:block">
        <p>kindly switch to mobile version</p>
      </div>
    </>
  );
}

export default App;
