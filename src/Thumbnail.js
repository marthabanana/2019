import React, { PureComponent } from 'react'

const THUMBNAIL_STYLE = {
  height: '300px',
  lineHeight: 1,
  overflow: 'hidden',
  position: 'relative',
}
const THUMBNAIL_IMAGE_STYLE = {
  left: '50%',
  position: 'relative',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
}

const getThumbnailImageStyle = ({ offset = [0, 0] }) => {
  const [left, top] = offset
  return {
    ...THUMBNAIL_IMAGE_STYLE,
    left: left,
    top: top,
    transform: `translate(-${left}, -${top})`,
  }
}

export default class Thumbnail extends PureComponent {
  render() {
    const { children, offset } = this.props
    return (
      <div style={THUMBNAIL_STYLE}>
        <div style={getThumbnailImageStyle({ offset })}>{children}</div>
      </div>
    )
  }
}
