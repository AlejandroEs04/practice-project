import React from 'react'

function layout({children}) {
  return (
    <main className={`container main`}>
        <h3>This is a layout group</h3>
        {children}
    </main>
  )
}

export default layout
