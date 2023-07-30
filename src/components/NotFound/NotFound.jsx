import React, { memo } from 'react'

const NotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png'
        alt='Face with Monocle'
        width='150'
        height='150'
      />
      <h2>Not found</h2>
    </div>
  )
}

NotFound.displayName = 'NotFound'

export default memo(NotFound)
