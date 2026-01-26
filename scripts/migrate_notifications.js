const db = require('../db');

async function setup() {
    try {
        console.log('Creating notifications table...');
        await db.execute(`
            CREATE TABLE IF NOT EXISTS notifications (
                id int NOT NULL AUTO_INCREMENT,
                user_id char(36) NOT NULL,
                type varchar(50) NOT NULL,
                message text NOT NULL,
                item_id int DEFAULT NULL,
                is_read tinyint(1) DEFAULT '0',
                created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (id),
                KEY user_id (user_id),
                CONSTRAINT notifications_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
                CONSTRAINT notifications_ibfk_2 FOREIGN KEY (item_id) REFERENCES items (id) ON DELETE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        `);
        console.log('Notifications table created successfully!');
        process.exit(0);
    } catch (err) {
        console.error('Error creating table:', err);
        process.exit(1);
    }
}

setup();
