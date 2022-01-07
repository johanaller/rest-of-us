import React, { useEffect } from "react";
import Container from "./Container";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | ComplexApp`
  }, [])

  return <Container wide={props.wide}>{props.children}</Container>;
}

export default Page;

// Målet är att skapa en komponent för title
// 1. Skapar Page component
// 2. Importerar container
// 3. Varför? Vilken blir parent till vem?
// Allt som är i Container vill jag passa till Page
