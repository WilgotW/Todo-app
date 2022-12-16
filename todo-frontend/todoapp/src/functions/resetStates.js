import React, { useState } from 'react'
export default function resetStates(...all) {
    all.forEach(element => {
        element("");
    });
}
