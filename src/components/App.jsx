import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbacks = Object.keys(this.state);

  decreseStatistic = event => {
    const feedbackName = event.target.name;
    this.setState(prevState => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };
  countTotalFeedback = () => {
    const allFeedbackQuantity = Object.values(this.state);
    return allFeedbackQuantity.reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const isFeadback = this.countTotalFeedback();
    return isFeadback ? ((this.state.good * 100) / isFeadback).toFixed() : 0;
  };
  render() {
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback();
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
            options={this.feedbacks}
            onLeaveFeedback={this.decreseStatistic}
          />
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
