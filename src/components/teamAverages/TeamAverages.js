import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./TeamAverages.module.css";

const TeamAverages = () => {
  const [toggleHitting, setToggleHitting] = useState(true);
  const [positionPlayerAverages, setPositionPlayerAverages] = useState({});
  const [pitchingPlayerAverages, setPitchingPlayerAverages] = useState({});
  const lineup = useSelector((state) => state.lineup);
  const rotation = useSelector((state) => state.rotation);
  const bench = useSelector((state) => state.bench);
  const bullpen = useSelector((state) => state.bullpen);

  useEffect(() => {
    console.log("Averages Component Rerender");
    if (toggleHitting) {
      calcHittingAverages();
    } else {
      calcPitchingAverages();
    }
  }, [lineup, rotation, bench, bullpen, toggleHitting]);

  const calcHittingAverages = () => {
    let contact = 0,
      power = 0,
      speed = 0,
      fielding = 0,
      positionPlayerCount = 0;
    lineup.forEach((player) => {
      if (player !== undefined) {
        positionPlayerCount++;

        const contactLeft = player.conL;
        const contactRight = player.conR;
        contact += (contactLeft + contactRight) / 2;

        const powerLeft = player.pwrL;
        const powerRight = player.pwrR;
        power += (powerLeft + powerRight) / 2;

        speed += player.spd;
        fielding += player.fld;
      }
    });
    bench.forEach((player) => {
      if (player !== undefined) {
        positionPlayerCount++;
        const contactLeft = player.conL;
        const contactRight = player.conR;
        contact += (contactLeft + contactRight) / 2;

        const powerLeft = player.pwrL;
        const powerRight = player.pwrR;
        power += (powerLeft + powerRight) / 2;

        speed += player.spd;
        fielding += player.fld;
      }
    });
    contact = contact / positionPlayerCount;
    power = power / positionPlayerCount;
    speed = speed / positionPlayerCount;
    fielding = fielding / positionPlayerCount;
    setPositionPlayerAverages({
      contact: contact,
      power: power,
      speed: speed,
      fielding: fielding,
    });
  };

  const calcPitchingAverages = () => {
    let hPerNine = 0,
      wPerNine = 0,
      kPerNine = 0,
      velocity = 0,
      pitcherPlayerCount = 0;
    rotation.forEach((player) => {
      if (player !== undefined) {
        pitcherPlayerCount++;
        hPerNine += player.hPerNine;
        wPerNine += player.wPerNine;
        kPerNine += player.kPerNine;
        velocity += player.vel;
      }
    });
    bullpen.forEach((player) => {
      if (player !== undefined) {
        pitcherPlayerCount++;
        hPerNine += player.hPerNine;
        wPerNine += player.wPerNine;
        kPerNine += player.kPerNine;
        velocity += player.vel;
      }
    });
    hPerNine = hPerNine / pitcherPlayerCount;
    wPerNine = wPerNine / pitcherPlayerCount;
    kPerNine = kPerNine / pitcherPlayerCount;
    velocity = velocity / pitcherPlayerCount;
    setPitchingPlayerAverages({
      hPerNine: hPerNine,
      wPerNine: wPerNine,
      kPerNine: kPerNine,
      velocity: velocity,
    });
  };

  const onToggleTeamAveragesHandler = () => {
    console.log("Toggle");
    setToggleHitting(!toggleHitting);
  };

  let content;
  if (toggleHitting) {
    content = (
      <React.Fragment>
        <div className={`flex-c ${classes.wrap}`}>
          <div className="flex-c">
            <div className={classes.flexCol}>
              <span className={classes.wording}>Contact</span>
              <span className={classes.stat}>
                {positionPlayerAverages.contact
                  ? positionPlayerAverages.contact.toFixed(0)
                  : 0}
              </span>
            </div>
            <div className={classes.flexCol}>
              <span className={classes.wording}>Power</span>
              <span className={classes.stat}>
                {positionPlayerAverages.power
                  ? positionPlayerAverages.power.toFixed(0)
                  : 0}
              </span>
            </div>
          </div>
          <div className={`flex-c`}>
            <div className={classes.flexCol}>
              <span className={classes.wording}>Speed</span>
              <span className={classes.stat}>
                {positionPlayerAverages.speed
                  ? positionPlayerAverages.speed.toFixed(0)
                  : 0}
              </span>
            </div>
            <div className={classes.flexCol}>
              <span className={classes.wording}>Fielding</span>
              <span className={classes.stat}>
                {positionPlayerAverages.fielding
                  ? positionPlayerAverages.fielding.toFixed(0)
                  : 0}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    content = (
      <React.Fragment>
        <div className={`flex-c ${classes.wrap}`}>
          <div className="flex-c">
            <div className={classes.flexCol}>
              <span className={classes.wording}>H/9</span>
              <span className={classes.stat}>
                {pitchingPlayerAverages.hPerNine
                  ? pitchingPlayerAverages.hPerNine.toFixed(0)
                  : 0}
              </span>
            </div>
            <div className={classes.flexCol}>
              <span className={classes.wording}>W/9</span>
              <span className={classes.stat}>
                {pitchingPlayerAverages.wPerNine
                  ? pitchingPlayerAverages.wPerNine.toFixed(0)
                  : 0}
              </span>
            </div>
          </div>
          <div className="flex-c">
            <div className={classes.flexCol}>
              <span className={classes.wording}>K/9</span>
              <span className={classes.stat}>
                {pitchingPlayerAverages.kPerNine
                  ? pitchingPlayerAverages.kPerNine.toFixed(0)
                  : 0}
              </span>
            </div>
            <div className={classes.flexCol}>
              <span className={classes.wording}>Velocity</span>
              <span className={classes.stat}>
                {pitchingPlayerAverages.velocity
                  ? pitchingPlayerAverages.velocity.toFixed(0)
                  : 0}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className={`flex-col ${classes.averagesContainer}`}>
      <span className={classes.title}>
        Team {toggleHitting ? "Hitting" : "Pitching"} Averages
      </span>
      <button className={classes.btn} onClick={onToggleTeamAveragesHandler}>
        {toggleHitting ? "Show Pitching Averages" : "Show Hitting Averages"}
      </button>
      <div className={`flex-c ${classes.contentContainer}`}>{content}</div>
    </div>
  );
};

export default TeamAverages;
