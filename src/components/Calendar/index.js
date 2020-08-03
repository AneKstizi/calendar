import React from "react";
import classnames from "classnames";

import * as calendar from "./calendar";
import events from "../../events";
import FilterDay from "../FilterDay";
import CalendarDay from "./components/CalendarDay";
import EventList from "../EventList";

import "./index.scss";

export default class Calendar extends React.Component {
  static defaultProps = {
    date: new Date(),
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    onChange: Function.prototype,
  };

  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null,
    currentEvent: [],
  };

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  get day() {
    return this.state.date.getDate();
  }

  handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);

    this.setState({ date });
  };

  handleNextMonthButtonClick = () => {
    const date = new Date(this.year, this.month + 1);

    this.setState({ date });
  };

  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;

    const date = new Date(year, month);

    this.setState({ date });
  };

  handleDayClick = (date) => {
    this.setState({ selectedDate: date });
    const event = events(date.toLocaleDateString());
    this.setState({ currentEvent: event });
    this.props.onChange(date);
  };

  render() {
    const { years, monthNames, weekDayNames } = this.props;
    const { currentDate, selectedDate, currentEvent } = this.state;

    const monthData = calendar.getMonthData(this.year, this.month);

    return (
      <div className="calendar">
        <div className="calendar_inner">
          <header className="calendar_header">
            <FilterDay
              value={this.month}
              change={this.handleSelectChange}
              className="calendar_select"
              options={monthNames}
              link={(element) => (this.monthSelect = element)}
            />

            <FilterDay
              value={this.year}
              change={this.handleSelectChange}
              className="calendar_select"
              options={years}
              link={(element) => (this.yearSelect = element)}
              filter={true}
            />
          </header>

          <table className="calendar_table">
            <thead>
              <tr>
                {weekDayNames.map((name) => (
                  <th className="calendar_th" key={name}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {monthData.map((week, index) => (
                <tr key={index} className="calendar_week">
                  {week.map((date, index) => (
                    <CalendarDay
                      key={index}
                      date={date}
                      className={classnames("calendar-day", {
                        "calendar-day--today": calendar.areEqual(
                          date,
                          currentDate
                        ),
                        "calendar-day--selected": calendar.areEqual(
                          date,
                          selectedDate
                        ),
                      })}
                      onClick={() => this.handleDayClick(date)}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <EventList currentEvent={currentEvent} selectedDate={selectedDate} />
      </div>
    );
  }
}
