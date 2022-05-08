import Timer from "./components/Timer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full m-5">
      <header className="text-3xl">
      </header>
      <Timer initialTimeSeconds={60} />
    </div>
  );
}

export default App;
