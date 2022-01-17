import classNames from "classnames";
import dayjs from "dayjs";
import styles from "./Home.module.css";

const Home = ({ data }) => {
  return (
    <div>
      {data.month}
      <div className={styles.widget}>
        {data.array.map((date, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.mainline}></div>
            <div
              className={classNames(
                styles.circleout,
                index % 2 === 0 ? styles.evencircleout : styles.oddcircleout
              )}
            ></div>
            <div
              className={classNames(
                styles.circlein,
                index % 2 === 0 ? styles.evencirclein : styles.oddcirclein
              )}
            ></div>
            <div
              className={classNames(
                styles.circlehalf,
                index % 2 === 0 ? styles.evencirclehalf : styles.oddcirclehalf
              )}
            ></div>
            <div
              className={classNames(
                styles.line,
                index % 2 === 0 ? styles.evenline : styles.oddline
              )}
            ></div>
            <div
              className={classNames(
                styles.smallcircle,
                index % 2 === 0 ? styles.evensmallcircle : styles.oddsmallcircle
              )}
            ></div>
            <div
              className={classNames(
                styles.bigcircle,
                index % 2 === 0 ? styles.evenbigcircle : styles.oddbigcircle
              )}
            >
              {dayjs(date?.date).format("DD")}
            </div>
            <div
              className={classNames(
                styles.textconainer,
                index % 2 === 0
                  ? styles.eventextconainer
                  : styles.oddtextconainer
              )}
            >
              <div>{date?.desc}</div>
              <small>{dayjs(date?.date).format("ddd")}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
