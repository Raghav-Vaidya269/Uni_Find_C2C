const db = require('../db');

/**
 * Creates a notification for a user.
 * 
 * @param {string} userId - ID of the user to receive notice
 * @param {string} type - Type of notification (reservation_request, etc.)
 * @param {string} message - The notification message
 * @param {number|null} itemId - ID of the relevant item
 */
async function createNotification(userId, type, message, itemId = null) {
    try {
        await db.execute(
            'INSERT INTO notifications (user_id, type, message, item_id) VALUES (?, ?, ?, ?)',
            [userId, type, message, itemId]
        );
    } catch (err) {
        console.error('Failed to create notification:', err);
    }
}

module.exports = { createNotification };
