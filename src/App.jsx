import React from "react";
import { Header } from "./components/Header/Header.jsx";
import { Filter } from "./components/Filters/Filters.jsx";
import { OlympiadsList } from "./components/OlympiadsList/OlympiadsList.jsx";

export const App = () => {
   return (
      <>
         <Header />
         <Filter />
         <OlympiadsList />
      </>
   );
};
