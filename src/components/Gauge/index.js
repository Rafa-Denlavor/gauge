import "./Gauge.scss";
import cx from "classnames";
import propTypes from 'prop-types';

function Gauge(props) {
  return (
    <div className="gaugeWrapper">
      <div className={cx('halfCircle', props.meaning)}>
        <p className="score">560</p>
        <p className="label">{'/1000'}</p>
        </div>
    </div>
  );
}

Gauge.propTypes = {
  meaning: propTypes.oneOf(['good', 'warn', 'bad', 'neutral']).isRequired,
};

export default Gauge;
