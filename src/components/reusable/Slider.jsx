import React from 'react'


const Slider = ({images}) => {
// let [currentSlide, setCurrentSlide] = useState(0)
console.log(images)
  return (
    <div>
        <img src={images[0]} alt="" />
    </div>
  )
}

export default Slider
