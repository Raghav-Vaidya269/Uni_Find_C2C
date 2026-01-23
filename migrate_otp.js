const db = require('./db');

async function migrate() {
    try {
        console.log('Starting migration...');

        await db.execute(`
            ALTER TABLE users 
            ADD COLUMN IF NOT EXISTS is_verified tinyint(1) DEFAULT '0',
            ADD COLUMN IF NOT EXISTS verification_otp varchar(6) DEFAULT NULL,
            ADD COLUMN IF NOT EXISTS verification_otp_expires datetime DEFAULT NULL
        `);

        console.log('Migration completed successfully.');
        process.exit(0);
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    }
}

migrate();
