import React from 'react'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function PreTooltip() {
    return (
        <div>
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello to you too!">
                ◕‿‿◕
            </a>

            <button data-tooltip-id="my-tooltip" data-tooltip-content="Click Me"> Click</button>
            <Tooltip id="my-tooltip" />
        </div>
    )
}

export default PreTooltip
