import React from "react";
import "./olympiads-list.scss";
import { Olympiad } from "../Olympiad/Olympiad.jsx";

const state = {
   olympiads: [
      {
         classes: "9–11 классы",
         subjects: ["Физика", "Математика"],
         title: "Всероссийская олимпиада школьников «13 элемент. ALхимия будущего»",
         stages: [
            {
               date: "26 ноя - 11 фев",
               level: "Отборочный этап",
               isActive: false,
            },
            {
               date: "26 ноя - 11 фев",
               level: "Региональный этап",
               isActive: true,
            },
            {
               date: "26 ноя - 11 фев",
               level: "Подведение итогов",
               isActive: false,
            },
         ],
      },
      {
         classes: "9–11 классы",
         subjects: ["Физика", "Математика"],
         title: "Всероссийская олимпиада школьников «13 элемент. ALхимия будущего»",
         stages: [
            {
               date: "26 ноя - 11 фев",
               level: "Отборочный этап",
               isActive: false,
            },
            {
               date: "26 ноя - 11 фев",
               level: "Региональный этап",
               isActive: false,
            },
            {
               date: "26 ноя - 11 фев",
               level: "Подведение итогов",
               isActive: true,
            },
         ],
      },
      {
         classes: "9–11 классы",
         subjects: ["Физика", "Математика"],
         title: "Всероссийская олимпиада школьников «13 элемент. ALхимия будущего»",
         stages: [
            {
               date: "26 ноя - 11 фев",
               level: "Отборочный этап",
               isActive: false,
            },
            {
               date: "26 ноя - 11 фев",
               level: "Региональный этап",
               isActive: true,
            },
            {
               date: "26 ноя - 11 фев",
               level: "Подведение итогов",
               isActive: false,
            },
         ],
      },
      {
         classes: "9–11 классы",
         subjects: ["Физика", "Математика"],
         title: "Всероссийская олимпиада школьников «13 элемент. ALхимия будущего»",
         stages: [
            {
               date: "26 ноя - 11 фев",
               level: "Отборочный этап",
               isActive: false,
            },
            {
               date: "26 ноя - 11 фев",
               level: "Региональный этап",
               isActive: false,
            },
            {
               date: "26 ноя - 11 фев",
               level: "Подведение итогов",
               isActive: true,
            },
         ],
      },
   ],
};

export const OlympiadsList = () => {
   const olympiadsElements = state.olympiads.map((content) => (
      <Olympiad content={content} key={content.title} />
   ));

   return (
      <section className="olympiads">
         <div className="olympiads__container">{olympiadsElements}</div>
      </section>
   );
};
