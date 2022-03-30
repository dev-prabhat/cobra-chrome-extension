import { useEffect, useState } from "react";

export const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const greetTime = new Date().getHours();
    if (greetTime < 4) setGreeting("Good Night");
    else if (greetTime < 11) setGreeting("Good Morning");
    else if (greetTime < 16) setGreeting("Good Afternoon");
    else if (greetTime < 19) setGreeting("Good Evening");
    else setGreeting("Good Night");
  }, []);

  return <div className="greeting">{greeting}</div>;
};
