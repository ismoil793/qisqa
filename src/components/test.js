'use client'

import React, { useState } from 'react'

export default function TestComponent() {
    const [val, setVal] = useState("")

    return (
        <div className="text-black border bg-cyan-400">
            <input value={val} onChange={e => setVal(e.target.value)} placeholder="place test" />
        </div>
    )
}
