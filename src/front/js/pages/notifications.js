import React, {useEffect, useState} from "react";

export const Notification = (foundationId) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch(`/api/notifications/${foundationId}`);
                const data = await response.json();
                setNotifications(data.notifications);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, [foundationId]);

    return (
        <>
        
        </>
    );
};