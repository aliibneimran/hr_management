import React from 'react'

export default function demo() {
    useEffect(() => {
        // Check if the reload flag is set in localStorage
        if (!localStorage.getItem("reloaded")) {
            // Set the flag in localStorage
            localStorage.setItem("reloaded", "true");

            // Reload the page
            window.location.reload();
        } else {
            // Remove the flag so that the reload can happen again in the future if needed
            localStorage.removeItem("reloaded");
        }
    }, []);
  return (
    <div>demo</div>
  )
}
