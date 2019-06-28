import React, { PureComponent } from 'react'
import groupBy from 'lodash/groupBy'
import dateformat from 'dateformat'

import './style.css'
import timetableSlots from './fixtures'
import { ActivityLink, getActivityById } from '../activities'
import { ArtistLink, getArtistById } from '../artists'

export const dateHeading = date => {
  // if earlier than 7am consider it as part of the previous date
  if (date.getHours() < 7) {
    date = new Date(date)
    date.setDate(date.getDate() - 1)
  }

  return dateformat(date, 'dd mmmm yyyy / dddd')
}

export const dateTime = date => dateformat(date, 'HH:MM')

const slotsByDate = slots => groupBy(slots, s => dateHeading(s.date))

const slotsByStage = slots => groupBy(slots, s => s.stage.name)

class Timetable extends PureComponent {
  renderDays() {
    const days = slotsByDate(timetableSlots)

    return Object.keys(days)
      .sort()
      .map((day, i) =>
        this.renderDay({
          day,
          slots: days[day],
          key: i,
        })
      )
  }

  renderDay({ day, slots, key }) {
    const stages = slotsByStage(slots)

    return (
      <div key={key} className="box-container">
        <h2 className="timetable-day-heading">
          {day}
          {!!day.match(/sunday/i) && <sup> **Free Entry**</sup>}
        </h2>
        {Object.keys(stages)
          .sort(
            (a, b) =>
              stages[a][0].stage.displayOrder < stages[b][0].stage.displayOrder
                ? -1
                : 1
          )
          .map((stage, i) =>
            this.renderStage({
              stage: stages[stage][0].stage,
              slots: stages[stage],
              key: i,
            })
          )}
      </div>
    )
  }

  renderStage({ stage, slots, key }) {
    const type = stage.type || 'artist'
    const isActivity = type === 'activity'

    return (
      <div key={key} className={`box ${type}`}>
        <h3>{stage.name}</h3>
        {slots
          .sort((a, b) => (a.date < b.date ? -1 : 1))
          .map(({ id, date, label }, i) => {
            const entry = isActivity ? getActivityById(id) : getArtistById(id)
            const link = entry ? (
              isActivity ? (
                ActivityLink(entry)
              ) : (
                ArtistLink(entry)
              )
            ) : (
              <span className="disabled">{id}</span>
            )
            return (
              <p key={i} className="entry">
                <em className="time">{label || dateTime(date)}</em>
                <br />
                {link}
              </p>
            )
          })}
      </div>
    )
  }

  render() {
    return (
      <section className="timetable">
        <h1>Timetable</h1>
        <p>
          <strong>Gates open:</strong> Wednesday 17<sup>th</sup> at 15:00 &nbsp;
          <strong>Gates close:</strong> Sunday 21<sup>st</sup> at 17:00
        </p>
        {this.renderDays()}
      </section>
    )
  }
}

export default Timetable
