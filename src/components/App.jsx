import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const feedbacks = ['good', 'neutral', 'bad'];

  const decreseStatistic = event => {
    const feedbackName = event.target.name;

    switch (feedbackName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    const isFeadback = countTotalFeedback();
    return isFeadback ? ((good * 100) / isFeadback).toFixed() : 0;
  };

  const positiveFeedback = countPositiveFeedbackPercentage();

  const totalFeedback = countTotalFeedback();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={feedbacks}
          onLeaveFeedback={decreseStatistic}
        />
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
export default App;
