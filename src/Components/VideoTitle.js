

const VideoTitle = ({title,des}) => {
  return (
    <div className="py-60 px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-2/4 py-4">{des}</p>

      <div className="text-lg space-x-4  pt-4">
        <button className="bg-white px-6 py-2 rounded-md text-black hover:bg-opacity-60">▶️ Play</button>
        <button className="bg-gray-500 px-4 py-2 rounded-md bg-opacity-50">ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
