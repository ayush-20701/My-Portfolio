import React, { forwardRef } from 'react'

const Leetcode = forwardRef((props, ref) => {
  return (
    <div className='leetcode section section2' ref={ref}>
      <div className="heading">MY LEETCODE PROFILE</div>
    </div>
  )
})

export default Leetcode
