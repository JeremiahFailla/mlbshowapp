import React from "react";
import classes from "./Player.module.css";

const Player = ({ player, toggle, side }) => {
  let content;
  if (toggle) {
    if (side === "left") {
      content = (
        <React.Fragment>
          <div>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.conR}
            </span>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.conR}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.conL}
            </span>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.conL}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.pwrR}
            </span>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.pwrR}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.pwrL}
            </span>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.pwrL}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.vis}
            </span>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.vis}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.disc}
            </span>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.disc}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.clu}
            </span>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.clu}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.btn}
            </span>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.btn}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.drgBtn}
            </span>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.drgBtn}px` }}
            ></span>
          </div>
        </React.Fragment>
      );
    } else {
      content = (
        <React.Fragment>
          <div>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.conR}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.conR}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.conL}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.conL}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.pwrR}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.pwrR}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.pwrL}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.pwrL}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.vis}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.vis}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.disc}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.disc}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.clu}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.clu}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.btn}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.btn}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.battingBar}`}
              style={{ width: `${player.drgBtn}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.batting}`}>
              {player.drgBtn}
            </span>
          </div>
        </React.Fragment>
      );
    }
  } else {
    if (side === "left") {
      content = (
        <React.Fragment>
          <div>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.sta}
            </span>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.sta}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.hPerNine}
            </span>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.hPerNine}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.kPerNine}
            </span>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.kPerNine}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.bbPerNine}
            </span>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.bbPerNine}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.hrPerNine}
            </span>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.hrPerNine}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.pClu}
            </span>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.pClu}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.ctrl}
            </span>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.ctrl}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.vel}
            </span>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.vel}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.brk}
            </span>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.brk}px` }}
            ></span>
          </div>
        </React.Fragment>
      );
    } else {
      content = (
        <React.Fragment>
          <div>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.sta}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.sta}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.hPerNine}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.hPerNine}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.kPerNine}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.kPerNine}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.bbPerNine}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.bbPerNine}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.hrPerNine}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.hrPerNine}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.pClu}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.pClu}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.ctrl}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.ctrl}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.vel}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.vel}
            </span>
          </div>
          <div>
            <span
              className={`${classes.statBar} ${classes.pitchingBar}`}
              style={{ width: `${player.brk}px` }}
            ></span>
            <span className={`${classes.stat} ${classes.pitching}`}>
              {player.brk}
            </span>
          </div>
        </React.Fragment>
      );
    }
  }

  let fullContent;

  if (side === "left") {
    fullContent = (
      <div className={classes.left}>
        <div>
          <span className={`${classes.stat} ${classes.white}`}>
            {player.name}
          </span>
        </div>
        <div>
          <span className={`${classes.stat} ${classes.white}`}>
            {player.overall}
          </span>
          <span
            className={`${classes.statBar} ${classes.whiteBar}`}
            style={{ width: `${player.overall}px` }}
          ></span>
        </div>
        {content}
        <div>
          <span className={`${classes.stat} ${classes.fielding}`}>
            {player.dur}
          </span>
          <span
            className={`${classes.statBar} ${classes.fieldingBar}`}
            style={{ width: `${player.dur}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat} ${classes.fielding}`}>
            {player.fld}
          </span>
          <span
            className={`${classes.statBar} ${classes.fieldingBar}`}
            style={{ width: `${player.fld}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat} ${classes.fielding}`}>
            {player.armStr}
          </span>
          <span
            className={`${classes.statBar} ${classes.fieldingBar}`}
            style={{ width: `${player.armStr}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat} ${classes.fielding}`}>
            {player.armAcc}
          </span>
          <span
            className={`${classes.statBar} ${classes.fieldingBar}`}
            style={{ width: `${player.armAcc}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat} ${classes.fielding}`}>
            {player.reac}
          </span>
          <span
            className={`${classes.statBar} ${classes.fieldingBar}`}
            style={{ width: `${player.reac}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat} ${classes.running}`}>
            {player.spd}
          </span>
          <span
            className={`${classes.statBar} ${classes.runningBar}`}
            style={{ width: `${player.spd}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat} ${classes.running}`}>
            {player.stl}
          </span>
          <span
            className={`${classes.statBar} ${classes.runningBar}`}
            style={{ width: `${player.stl}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat} ${classes.running}`}>
            {player.brAgg}
          </span>
          <span
            className={`${classes.statBar} ${classes.runningBar}`}
            style={{ width: `${player.brAgg}px` }}
          ></span>
        </div>
      </div>
    );
  } else {
    fullContent = (
      <div>
        <div>
          <span className={`${classes.stat} ${classes.white}`}>
            {player.name}
          </span>
        </div>
        <div>
          <span
            className={`${classes.statBar} ${classes.whiteBar}`}
            style={{ width: `${player.overall}px` }}
          ></span>
          <span className={`${classes.stat} ${classes.white}`}>
            {player.overall}
          </span>
        </div>
        {content}
        <div>
          <span
            className={`${classes.statBar} ${classes.fieldingBar}`}
            style={{ width: `${player.dur}px` }}
          ></span>
          <span className={`${classes.stat} ${classes.fielding}`}>
            {player.dur}
          </span>
        </div>
        <div>
          <span
            className={`${classes.statBar} ${classes.fieldingBar}`}
            style={{ width: `${player.fld}px` }}
          ></span>
          <span className={`${classes.stat} ${classes.fielding}`}>
            {player.fld}
          </span>
        </div>
        <div>
          <span
            className={`${classes.statBar} ${classes.fieldingBar}`}
            style={{ width: `${player.armStr}px` }}
          ></span>
          <span className={`${classes.stat} ${classes.fielding}`}>
            {player.armStr}
          </span>
        </div>
        <div>
          <span
            className={`${classes.statBar} ${classes.fieldingBar}`}
            style={{ width: `${player.armAcc}px` }}
          ></span>
          <span className={`${classes.stat} ${classes.fielding}`}>
            {player.armAcc}
          </span>
        </div>
        <div>
          <span
            className={`${classes.statBar} ${classes.fieldingBar}`}
            style={{ width: `${player.reac}px` }}
          ></span>
          <span className={`${classes.stat} ${classes.fielding}`}>
            {player.reac}
          </span>
        </div>
        <div>
          <span
            className={`${classes.statBar} ${classes.runningBar}`}
            style={{ width: `${player.spd}px` }}
          ></span>
          <span className={`${classes.stat} ${classes.running}`}>
            {player.spd}
          </span>
        </div>
        <div>
          <span
            className={`${classes.statBar} ${classes.runningBar}`}
            style={{ width: `${player.stl}px` }}
          ></span>
          <span className={`${classes.stat} ${classes.running}`}>
            {player.stl}
          </span>
        </div>
        <div>
          <span
            className={`${classes.statBar} ${classes.runningBar}`}
            style={{ width: `${player.brAgg}px` }}
          ></span>
          <span className={`${classes.stat} ${classes.running}`}>
            {player.brAgg}
          </span>
        </div>
      </div>
    );
  }

  return <div className={classes.statsContainer}>{fullContent}</div>;
};

export default Player;
