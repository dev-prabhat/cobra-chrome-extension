import { useEffect } from "react";
import { useGlobal } from "./context/global-context";
import { MainApp, Welcome } from "./pages";

const randomImage = () => {
  //FOR FUTURE USE: More images will be added later
  // const randomNum = Math.floor(Math.random() * 10);
  return process.env.PUBLIC_URL + `/images/${1}.jpg`;
};

function App() {
  const { name, setName, setMainFocus } = useGlobal();

  useEffect(() => {
    setName(localStorage.getItem("username"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMainFocus(localStorage.getItem("focus"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="wh-100"
      style={{
        backgroundImage: `url(${randomImage()})`,
        backgroundSize: "cover",
      }}
    >
      {name === null ? <Welcome /> : <MainApp />}
    </div>
  );
}

export default App;
