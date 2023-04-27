import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ total, positivePercentage, ...restStat }) => {
  const statisticsOptions = Object.keys(restStat);

  return (
    <div>
      <h2 className={css.statistics}>Statistics</h2>
      <ul className={css.statisticsList}>
        {statisticsOptions.map(feedback => (
          <li key={feedback} className={css.statisticsListItem}>
            {feedback}: {restStat[feedback]}
          </li>
        ))}
      </ul>

      <div className={css.totalFeedback}>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  restStat: PropTypes.arrayOf(PropTypes.shape),
};
export default Statistics;
