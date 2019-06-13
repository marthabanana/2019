import React from 'react'
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

import EntityModal from '../EntityModal'
import timetableSlots from '../timetable/fixtures'
import { dateHeading, dateTime } from '../timetable'

import activities from './fixtures'

const parseText = str =>
  str ? (
    <Markdown
      source={str}
      containerTagName="span"
      unwrapDisallowed={true}
      disallowedTypes={['Paragraph']}
    />
  ) : null

const parseHTML = str => <Markdown source={str} />

export const getActivityById = id => activities[id]

export const getNextActivityId = ({ id } = {}) => {
  const ids = Object.keys(activities)
  return ids.reduce((next, current, i) => {
    if (current === id) {
      next = ids[i + 1] || ids[0]
    }
    return next
  }, null)
}

export const getPreviousActivityId = ({ id } = {}) => {
  const ids = Object.keys(activities)
  return ids.reduce((next, current, i) => {
    if (current === id) {
      next = ids[i - 1] || ids[ids.length - 1]
    }
    return next
  }, null)
}

export const ActivityName = ({ name } = {}) => parseText(name)

export const ActivityGenres = ({ genres } = {}) => (
  <p className="genres">{parseText(genres)}</p>
)

export const ActivitySlots = ({ id } = {}) => {
  const slots = timetableSlots.filter(s => s.id === id)
  return slots.map(({ date, stage }, i) => (
    <p key={i} className="slot">
      <strong>When: </strong>
      {dateHeading(date)}
      &nbsp;
      {dateTime(date)}
      &nbsp; @ {stage.name}
    </p>
  ))
}

export const ActivityInfo = ({ text } = {}) => parseHTML(text)

export const ActivityImg = ({ photo, name } = {}) => (
  <p>
    <img src={photo} alt={name || ''} />
  </p>
)

export const ActivityLink = ({ id, name } = {}) => {
  return getActivityById(id) ? (
    <Link to={`/activity/${id}`}>{ActivityName({ name })} </Link>
  ) : null
}

export const ActivityModal = ({ id, goBack } = {}) => {
  const activity = getActivityById(id)
  const { name, text, photo } = activity
  const previous = getPreviousActivityId({ id })
  const next = getNextActivityId({ id })

  return (
    <EntityModal
      goBack={goBack}
      className="activity-details"
      title={ActivityName({ name })}
      body={
        <div>
          {ActivityImg({ photo, name })}
          {ActivitySlots({ id })}
          {ActivityInfo({ text })}
        </div>
      }
      previous={ActivityLink(getActivityById(previous))}
      next={ActivityLink(getActivityById(next))}
    />
  )
}
