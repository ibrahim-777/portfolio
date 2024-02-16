export default function Image({Img,rotate,height,margin}) {
  return (
    <div>
      <img src={Img} style={{
        borderRadius:'20px',
        transform:`rotate(${rotate}deg)`,
        height:`${height}px`,
        margin:`${margin}`
      }}/>
    </div>
  )
}
