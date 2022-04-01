import { useEffect, useState } from "react";
import { useGlobal } from "./context/global-context";
import { MainApp, Welcome } from "./pages";

function App() {
  const { name, setName, setMainFocus } = useGlobal();

  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&&orientation=landscape&&query=mountains%20dark`
    )
      .then((res) => res.json())
      .then((x) => setImageUrl(x.urls.regular));
  }, []);

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
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
      }}
    >
      {name ? <MainApp /> : <Welcome />}
    </div>
  );
}

export default App;
