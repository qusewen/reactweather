import React from "react"
import ContentLoader from "react-content-loader"



const UnloadContent = ({width, height, props,rx,ry }) => (
    <ContentLoader 
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx={rx} ry={ry} width={width} height={height} />
  </ContentLoader>
)

export default UnloadContent