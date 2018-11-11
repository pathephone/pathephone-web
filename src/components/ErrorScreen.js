import React from 'react'

export const ErrorScreen = ({ message }) => (
  <div className={styles.ErrorScreen}>
    {message}
  </div>
)