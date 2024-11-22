import React, { useState, useEffect } from 'react';


export const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [newNotification, setNewNotification] = useState({
        foundation_id: '',
        message: ''
    });

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/notifications`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        setNotifications(data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNotification({ ...newNotification, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/notifications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newNotification)
        });
        if (response.ok) {
            fetchNotifications();
        }
    };

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>{notification.message} for foundation {notification.foundation_id}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" name="foundation_id" value={newNotification.foundation_id} onChange={handleInputChange} placeholder="Foundation ID" required />
                <input type="text" name="message" value={newNotification.message} onChange={handleInputChange} placeholder="Message" required />
                <button type="submit">Add Notification</button>
            </form>
        </div>
    );
};

