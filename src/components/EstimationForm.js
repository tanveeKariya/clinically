import React, { useState } from 'react';

function EstimationForm() {
    const [distance, setDistance] = useState(0);
    const [estimate, setEstimate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple estimation logic (e.g., $1 per mile)
        const costEstimate = distance * 1;
        setEstimate(costEstimate);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Distance (miles):
                    <input
                        type="number"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    />
                </label>
                <button type="submit">Estimate Delivery Cost</button>
            </form>
            {estimate !== null && (
                <h3>Estimated Cost: ${estimate}</h3>
            )}
        </div>
    );
}

export default EstimationForm;
