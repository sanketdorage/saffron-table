
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/original-index.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load the restaurant design.");
        }
        return response.text();
      })
      .then((documentText) => {
        const parsed = new DOMParser().parseFromString(
          documentText,
          "text/html",
        );

        setHtml(parsed.body.innerHTML);
      })
      .catch((error: Error) => {
        console.error(error);
        setHtml(
          "<main style='padding:40px'><h1>Saffron Table</h1><p>Could not load the design. Check the browser console.</p></main>",
        );
      });
  }, []);

  return (
    <div
      className="restaurant-app"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
