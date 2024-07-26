import React, { useState } from 'react'
import { SketchPicker } from 'react-color';

function ColorPiker() {

    const [color, setColor] = useState('#fff')
    const [showColorPiker, setShopcolorPiker] = useState(false)

    return (
        <div>
            <button onClick={() => setShopcolorPiker(showColorPiker => !showColorPiker)}>
                {showColorPiker ? 'Close' : 'Open'}
            </button>
            {showColorPiker &&
                (
                    <SketchPicker
                        color={color}
                        onChange={updatedColor => { setColor(updatedColor.hex) }}
                    />
                )

            }

            <h2>Picked color {color}</h2>
        </div>
    )
}

export default ColorPiker
