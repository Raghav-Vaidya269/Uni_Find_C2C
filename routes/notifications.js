const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateToken } = require('../middleware/auth');

// Get all notifications for current user
router.get('/', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const [notifications] = await db.execute(
            `SELECT n.*, i.title as item_title 
             FROM notifications n 
             LEFT JOIN items i ON n.item_id = i.id 
             WHERE n.user_id = ? 
             ORDER BY n.created_at DESC`,
            [userId]
        );
        res.json(notifications);
    } catch (err) {
        console.error('Error fetching notifications:', err);
        res.status(500).json({ error: 'Failed to fetch notifications' });
    }
});

// Mark notification as read
router.put('/:id/read', authenticateToken, async (req, res) => {
    try {
        const notificationId = req.params.id;
        const userId = req.user.id;

        await db.execute(
            'UPDATE notifications SET is_read = 1 WHERE id = ? AND user_id = ?',
            [notificationId, userId]
        );

        res.json({ message: 'Notification marked as read' });
    } catch (err) {
        console.error('Error marking notification as read:', err);
        res.status(500).json({ error: 'Failed to update notification' });
    }
});

// Mark all as read
router.put('/read-all', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        await db.execute(
            'UPDATE notifications SET is_read = 1 WHERE user_id = ?',
            [userId]
        );
        res.json({ message: 'All notifications marked as read' });
    } catch (err) {
        console.error('Error marking all notifications as read:', err);
        res.status(500).json({ error: 'Failed to update notifications' });
    }
});

module.exports = router;
