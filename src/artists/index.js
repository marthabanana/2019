import React from 'react'
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

import EntityModal from '../EntityModal'
import timetableSlots from '../timetable/fixtures'
import { dateHeading, dateTime } from '../timetable'

import './style.css'
import artists from './fixtures'

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

export const getArtistById = id => artists[id]

export const getNextArtistId = ({ id } = {}) => {
  const ids = Object.keys(artists)
  return ids.reduce((next, current, i) => {
    if (current === id) {
      next = ids[i + 1] || ids[0]
    }
    return next
  }, null)
}

export const getPreviousArtistId = ({ id } = {}) => {
  const ids = Object.keys(artists)
  return ids.reduce((next, current, i) => {
    if (current === id) {
      next = ids[i - 1] || ids[ids.length - 1]
    }
    return next
  }, null)
}

export const ArtistName = ({ name } = {}) => parseText(name)

export const ArtistGenres = ({ genres } = {}) => (
  <p className="genres">{parseText(genres)}</p>
)

export const ArtistSlots = ({ id } = {}) => {
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

export const ArtistInfo = ({ text } = {}) => parseHTML(text)

export const ArtistImg = ({ photo, name } = {}) => (
  <p>
    <img src={photo} alt={name || ''} />
  </p>
)

export const ArtistExternalLink = ({ url } = {}) => {
  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-info"
    >
      Listen
    </a>
  ) : null
}

export const ArtistLink = ({ id, name } = {}) => {
  return getArtistById(id) ? (
    <Link to={`/artist/${id}`}>{ArtistName({ name })} </Link>
  ) : null
}

export const ArtistModal = ({ id, goBack } = {}) => {
  const artist = getArtistById(id)
  const { url, name, genres, text, photo } = artist
  const previous = getPreviousArtistId({ id })
  const next = getNextArtistId({ id })

  return (
    <EntityModal
      goBack={goBack}
      className="artist-details"
      title={ArtistName({ name })}
      body={
        <div>
          {ArtistImg({ photo, name })}
          {ArtistGenres({ genres })}
          {ArtistSlots({ id })}
          {ArtistInfo({ text })}
          <br />
          <p>{ArtistExternalLink({ url })}</p>
        </div>
      }
      previous={ArtistLink(getArtistById(previous))}
      next={ArtistLink(getArtistById(next))}
    />
  )
}
