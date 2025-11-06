// Switch to the database
use("GreenPulseDB");

// 1️⃣ Retrieve all readings
print("All readings:");
db.energy_readings.find().pretty();

// 2️⃣ Retrieve readings for a specific meter
print("Readings for MTR001:");
db.energy_readings.find({ meterId: "MTR001" }).pretty();

// 3️⃣ Find readings between two timestamps
print("Readings between 10:00 and 12:00 for MTR001:");
db.energy_readings.find({
  meterId: "MTR001",
  timestamp: {
    $gte: ISODate("2025-10-29T10:00:00Z"),
    $lte: ISODate("2025-10-29T12:00:00Z")
  }
}).pretty();

// 4️⃣ Find readings where temperature > 30°C
print("High temperature readings:");
db.energy_readings.find({ temperature_C: { $gt: 30 } }).pretty();
