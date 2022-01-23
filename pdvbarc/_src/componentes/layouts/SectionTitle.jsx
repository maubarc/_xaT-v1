
import React from 'react'

const SectionTitle = props => (
    <div className={`SectionTitle ${props.error ? "error" : ""}`}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)

export default SectionTitle