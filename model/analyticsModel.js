const fetchShipments = async () => {
    const response = await fetch(`https://logistics-and-tracking-delivery-system.onrender.com/api/shipments`);
    if (!response.ok) throw new Error(`Legacy API error: ${response.status}`);
    return response.json();
};


const fetchFromPerformance = async () => {
    const response = await fetch(`http://localhost:8000/performance/shipments/status`);
    if (!response.ok) throw new Error(`Performance error: ${response.status}`);
    const data = await response.json();
    if (!data.success || !Array.isArray(data.message)) {
        throw new Error('Invalid Performance response');
    }
    return data.message;
};

const getRecordDate = (record) => record.delivery_time || record.dispatch_time || record.deliveryTime;

const isToday = (dateValue) => {
    if (!dateValue) return false;
    const date = new Date(dateValue);
    return !isNaN(date) && date.toDateString() === new Date().toDateString();
};

const isThisWeek = (dateValue) => {
    if (!dateValue) return false;
    const date = new Date(dateValue);
    if (isNaN(date)) return false;
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return date >= sevenDaysAgo && date <= new Date();
};

const AnalyticsModel = {
    fetchRawShipments: async () => {
        const shipments = await fetchShipments();
        return { rawData: shipments, normalizedData: shipments };
    },

    fetchTotalShipments: async () => {
        const shipments = await fetchShipments();
        return { totalShipments: shipments.length };
    },

    fetchDailyShipments: async () => {
        const records = await fetchFromPerformance();
        const dailyCount = records.filter(r => isToday(getRecordDate(r))).length;
        return { dailyShipments: dailyCount };
    },

    fetchWeeklyShipments: async () => {
        const records = await fetchFromPerformance();
        const weeklyCount = records.filter(r => isThisWeek(getRecordDate(r))).length;
        return { weeklyShipments: weeklyCount };
    },
    fetchSuccessfulDeliveries: async () => {
        const records = await fetchFromPerformance();
        const successful = records.filter(r => r.status === 'on-time').length;
        return { successfulDeliveries: successful };
    },
};

export default AnalyticsModel;