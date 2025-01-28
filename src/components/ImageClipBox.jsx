/* eslint-disable react/prop-types */
const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img alt={src} src={src} />
    </div>
  )
}

export default ImageClipBox
