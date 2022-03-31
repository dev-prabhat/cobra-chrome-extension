import "./css/mainApp.css";
import { Clock, Greeting, Quotes, Weather } from "../components";
import { useGlobal } from "../context/global-context";

export const MainApp = () => {
  const { name, mainFocus, setMainFocus } = useGlobal();

  const focusHandler = (e) => {
    localStorage.setItem(
      "focus",
      `${e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)}`
    );
    setMainFocus(
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    );
  };

  return (
    <div className="wh-100 main-app">
      <Clock />
      <div className="greeting-wrapper">
        <Greeting />, {name}.
      </div>
      <div className="main-focus-wrapper">
        {mainFocus ? (
          <div className="main-focus">My main focus is : {mainFocus} </div>
        ) : (
          <input
            className="form-input"
            type="text"
            placeholder="Enter your main focus"
            onKeyDown={(e) =>
              e.code === "Enter" && e.target.value !== "" && focusHandler(e)
            }
          />
        )}
      </div>
      <Weather />
      <Quotes />
    </div>
  );
};
