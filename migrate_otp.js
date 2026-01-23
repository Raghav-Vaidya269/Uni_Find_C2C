const db = require('./db');

async function migrate() {
    try {
        console.log('Starting migration...');

        const [columns] = await db.execute('SHOW COLUMNS FROM users');
        const columnNames = columns.map(c => c.Field);

        if (!columnNames.includes('is_verified')) {
            await db.execute("ALTER TABLE users ADD COLUMN is_verified tinyint(1) DEFAULT '0'");
            console.log('Added is_verified');
        }
        if (!columnNames.includes('verification_otp')) {
            await db.execute("ALTER TABLE users ADD COLUMN verification_otp varchar(6) DEFAULT NULL");
            console.log('Added verification_otp');
        }
        if (!columnNames.includes('verification_otp_expires')) {
            await db.execute("ALTER TABLE users ADD COLUMN verification_otp_expires datetime DEFAULT NULL");
            console.log('Added verification_otp_expires');
        }

        console.log('Migration completed successfully.');
        process.exit(0);
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    }
}

migrate();
