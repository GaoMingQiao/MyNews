import React from "react";
import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import Article from "./Article";
import Footer from "./Footer";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("")

  const handleSearchSubmit = (value) => {
    setSearch(value)
  }

  return (
    <div className={styles.main}>
      <div>
        <Menu searchSubmit={handleSearchSubmit}></Menu>
      </div>
      <div className={styles.container}>
        <Article search={search} ></Article>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
