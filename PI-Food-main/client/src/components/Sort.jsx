import React from "react"

export default function Sort() {
    return(
        <div>
            <div>
                <label>Order by</label>
                <select>
                    <option value="A_Z">A-Z</option>
                    <option value="Z_A">Z-A</option>
                </select>
            </div>
            <div>
                <label>Order by Score</label>
                <select>
                    <option value="0-100">0-100</option>
                    <option value="100-0">100-0</option>
                </select>
            </div>
        </div>
    )
}