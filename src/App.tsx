import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-gray-800 font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
          Welcome Back! Let's do something exciting together!
          <span role="img" aria-label="smiling face">
            😊
          </span>
        </h1>
        <Button className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors duration-300">
          Start From
        </Button>
      </div>
    </div>
  );
}

export default App;
