const db = require('./db');

async function test() {
    try {
        console.log('--- Users ---');
        const [users] = await db.execute('SELECT id, name, email FROM users');
        users.forEach(u => console.log(`${u.id}: ${u.name} (${u.email})`));

        console.log('\n--- Items ---');
        const [items] = await db.execute('SELECT id, title, uploaded_by, status FROM items');
        items.forEach(i => console.log(`Item ${i.id}: "${i.title}" by ${i.uploaded_by} [${i.status}]`));

        if (users.length > 0) {
            const firstUser = users[0];
            console.log(`\n--- My Items for ${firstUser.name} ---`);
            const [myItems] = await db.execute('SELECT * FROM items WHERE uploaded_by = ?', [firstUser.id]);
            console.log(`Found ${myItems.length} items.`);
        }

        process.exit(0);
    } catch (err) {
        console.error('DB Diagnostic Error:', err);
        process.exit(1);
    }
}

test();
