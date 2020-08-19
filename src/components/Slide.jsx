import React from 'react'
import { css, jsx } from '@emotion/core'
import styles from './app.module.css'

const Slide = ({ content }) => (
  <div
    className={styles.slide}
    style={{backgroundImage: `url(${content})`}}
  />
)

export default Slide