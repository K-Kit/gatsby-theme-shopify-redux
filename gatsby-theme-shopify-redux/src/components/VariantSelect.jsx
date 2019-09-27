import React from 'react'
import {Select, } from "@rebass/forms";

export const VariantSelect = ({option, handleChange, ...props}) => {

    return (
        <Select
            id="variant"
            name={option.name}
            key={option.name}
            onChange={handleChange}
        >
            {option.values.map(value => (
                <option
                    value={value}
                    key={`${option.name}-${value}`}
                >{`${value}`}</option>
            ))}
        </Select>
    )
}