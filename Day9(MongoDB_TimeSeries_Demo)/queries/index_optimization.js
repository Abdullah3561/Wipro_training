use("GreenPulseDB");

// 1️⃣ Create index on timestamp
db.energy_readings.createIndex({ timestamp: 1 });

// 2️⃣ Create compound index (meterId + timestamp)
db.energy_readings.createIndex({ meterId: 1, timestamp: 1 });

// 3️⃣ View all indexes
print("All indexes:");
db.energy_readings.getIndexes().forEach(printjson);
