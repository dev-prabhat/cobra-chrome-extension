import { useGlobal } from "../context/global-context";
import "./css/welcome.css";

export const Welcome = () => {
  const { setName } = useGlobal();

  const nameHandler = (e) => {
    setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
    localStorage.setItem(
      "username",
      `${e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)}`
    );
  };

  return (
    <div className="wh-100 welcome-screen">
      <div className="welcome-message">Hello, what's your name?</div>
      <input
        className="form-input"
        type="text"
        onKeyDown={(e) =>
          e.code === "Enter" && e.target.value !== "" && nameHandler(e)
        }
      />
    </div>
  );
};
