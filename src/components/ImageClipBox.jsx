/* eslint-disable react/prop-types */
const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  )
}

export default ImageClipBox
