import React from "react";
import classes from "./Player.module.css";

const Player = ({ player, toggle, side }) => {
  let content;
  if (toggle) {
    if (side === "left") {
      content = (
        <React.Fragment>
          <div>
            <span className={`${classes.stat}`}>{player.conR}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.conR}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.conL}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.conL}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.pwrR}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.pwrR}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.pwrL}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.pwrL}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.vis}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.vis}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.disc}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.disc}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.clu}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.clu}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.btn}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.btn}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.drgBtn}</span>
            <span
              className={`${classes.statBar}`}
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
              className={`${classes.statBar}`}
              style={{ width: `${player.conR}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.conR}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.conL}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.conL}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.pwrR}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.pwrR}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.pwrL}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.pwrL}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.vis}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.vis}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.disc}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.disc}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.clu}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.clu}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.btn}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.btn}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.drgBtn}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.drgBtn}</span>
          </div>
        </React.Fragment>
      );
    }
  } else {
    if (side === "left") {
      content = (
        <React.Fragment>
          <div>
            <span className={`${classes.stat}`}>{player.sta}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.sta}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.hPerNine}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.hPerNine}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.kPerNine}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.kPerNine}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.bbPerNine}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.bbPerNine}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.hrPerNine}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.hrPerNine}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.pClu}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.pClu}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.ctrl}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.ctrl}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.vel}</span>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.vel}px` }}
            ></span>
          </div>
          <div>
            <span className={`${classes.stat}`}>{player.brk}</span>
            <span
              className={`${classes.statBar}`}
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
              className={`${classes.statBar}`}
              style={{ width: `${player.sta}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.sta}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.hPerNine}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.hPerNine}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.kPerNine}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.kPerNine}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.bbPerNine}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.bbPerNine}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.hrPerNine}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.hrPerNine}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.pClu}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.pClu}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.ctrl}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.ctrl}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.vel}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.vel}</span>
          </div>
          <div>
            <span
              className={`${classes.statBar}`}
              style={{ width: `${player.brk}px` }}
            ></span>
            <span className={`${classes.stat}`}>{player.brk}</span>
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
          <span className={`${classes.stat}`}>{player.name}</span>
        </div>
        <div>
          <span className={`${classes.stat}`}>{player.overall}</span>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.overall}px` }}
          ></span>
        </div>
        {content}
        <div>
          <span className={`${classes.stat}`}>{player.dur}</span>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.dur}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat}`}>{player.fld}</span>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.fld}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat}`}>{player.armStr}</span>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.armStr}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat}`}>{player.armAcc}</span>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.armAcc}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat}`}>{player.reac}</span>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.reac}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat}`}>{player.spd}</span>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.spd}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat}`}>{player.stl}</span>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.stl}px` }}
          ></span>
        </div>
        <div>
          <span className={`${classes.stat}`}>{player.brAgg}</span>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.brAgg}px` }}
          ></span>
        </div>
      </div>
    );
  } else {
    fullContent = (
      <React.Fragment>
        <div>
          <span className={`${classes.stat}`}>{player.name}</span>
        </div>
        <div>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.overall}px` }}
          ></span>
          <span className={`${classes.stat}`}>{player.overall}</span>
        </div>
        {content}
        <div>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.dur}px` }}
          ></span>
          <span className={`${classes.stat}`}>{player.dur}</span>
        </div>
        <div>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.fld}px` }}
          ></span>
          <span className={`${classes.stat}`}>{player.fld}</span>
        </div>
        <div>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.armStr}px` }}
          ></span>
          <span className={`${classes.stat}`}>{player.armStr}</span>
        </div>
        <div>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.armAcc}px` }}
          ></span>
          <span className={`${classes.stat}`}>{player.armAcc}</span>
        </div>
        <div>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.reac}px` }}
          ></span>
          <span className={`${classes.stat}`}>{player.reac}</span>
        </div>
        <div>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.spd}px` }}
          ></span>
          <span className={`${classes.stat}`}>{player.spd}</span>
        </div>
        <div>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.stl}px` }}
          ></span>
          <span className={`${classes.stat}`}>{player.stl}</span>
        </div>
        <div className={classes.statContainer}>
          <span
            className={`${classes.statBar}`}
            style={{ width: `${player.brgAgg}px` }}
          ></span>
          <span className={`${classes.stat}`}>{player.brAgg}</span>
        </div>
      </React.Fragment>
    );
  }

  return <div className={classes.statsContainer}>{fullContent}</div>;
};

export default Player;
