import React from "react";
import { Link } from "react-router-dom";
import GameBoard from "../../components/GameBoard/GameBoard";
// import styles from "../../components/GameBoard/GameBoard.module.css";

const SettingsPage = props => {
  return (
    <div>
      <Link to="/">HOME</Link>
      <h1>Settings Page</h1>
      {/* <GameBoard
        colors={props.colors}
        guesses={props.guesses}
        handlePegClick={props.handlePegClick}
        handleScoreClick={props.handleScoreClick}
      /> */}
    </div>
  );
};

export default SettingsPage;
