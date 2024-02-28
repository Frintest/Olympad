import React from "react";
import "./olympiad.scss";

export const Olympiad = (props) => {
   const { classes, subjects, title, stages } = props.content;

   const subjectsElements = subjects.map((subject) => {
      let bgColor = "";
      switch (subject) {
         case "Физика":
            bgColor = "#F7FEE7";
            break;
         case "Математика":
            bgColor = "#FFF7ED";
      }
      return (
         <p className="olympiad__subject" style={{ background: bgColor }}>
            {subject}
         </p>
      );
   });

   const stagesElements = stages.map(({ date, level, isActive }) => (
      <li
         className="olympiad__stage"
         style={{ color: isActive ? "#231F20" : "#777", fontWeight: isActive ? 500 : 400 }}
      >
         <span className="olympiad__stage-datetime">{date}</span>
         <span className="olympiad__stage-title">{level}</span>
      </li>
   ));

   return (
      <article className="olympiad">
         <span className="olympiad__classes">{classes}</span>
         <ul className="olympiad__subjects">{subjectsElements}</ul>
         <h2 className="olympiad__title">{title}</h2>
         <ul className="olympiad__stages">{stagesElements}</ul>
      </article>
   );
};
