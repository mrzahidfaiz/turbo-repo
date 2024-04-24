import "./App.css";
import { Button } from "@repo/ui/button";
import { PORT } from "@repo/common/port";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex flex-col justify-center items-center gap-3">
        <div>
          <a href="http://localhost:8000/">http://localhost:8000/</a>
        </div>
        <div>
          <Button appName="web" className="">
            Click ME! {PORT}{" "}
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
