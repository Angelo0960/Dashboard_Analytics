const fetchShipments = async () => {
    const response = await fetch(`https://logistics-and-tracking-delivery-system.onrender.com/api/shipments`);
    if (!response.ok) throw new Error(`Legacy API error: ${response.status}`);
    return response.json();
};

const AnalyticsModel = {
    fetchTotalShipments: async () => {
        const shipments = await fetchShipments();
        return { totalShipments: shipments.length };
    }
};

export default AnalyticsModel;