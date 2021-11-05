import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        exact
        to="/register"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
        Вход
      </NavLink>
    </nav>
  );
}
