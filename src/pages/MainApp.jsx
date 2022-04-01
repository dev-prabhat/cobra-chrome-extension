import "./css/mainApp.css";
import { Clock, Greeting, Quotes, Weather } from "../components";
import { useGlobal } from "../context/global-context";

export const MainApp = () => {
  const { name, setName, mainFocus, setMainFocus } = useGlobal();

  const focusHandler = (e) => {
    localStorage.setItem(
      "focus",
      `${e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)}`
    );
    setMainFocus(
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    );
  };

  const handleEditName = () => {
    setName(null);
    localStorage.setItem("username", null);
  };

  const handleEditFocus = () => {
    setMainFocus(null);
    localStorage.setItem("focus", null);
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
      {name !== null && (
        <button className="btn btn-name" onClick={handleEditName}>
          Edit Name
        </button>
      )}
      {mainFocus !== null && (
        <button className="btn btn-focus" onClick={handleEditFocus}>
          Edit Focus |
        </button>
      )}
    </div>
  );
};
