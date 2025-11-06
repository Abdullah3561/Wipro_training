use("GreenPulseDB");

// 1️⃣ Total energy consumption per meter
print("Total energy per meter:");
db.energy_readings.aggregate([
  { $group: { _id: "$meterId", total_energy: { $sum: "$energy_kWh" } } }
]).forEach(printjson);

// 2️⃣ Average temperature by location
print("Average temperature by location:");
db.energy_readings.aggregate([
  { $group: { _id: "$location", avg_temp: { $avg: "$temperature_C" } } }
]).forEach(printjson);

// 3️⃣ Hourly energy trend
print("Hourly energy consumption trend:");
db.energy_readings.aggregate([
  {
    $project: {
      hour: { $hour: "$timestamp" },
      energy_kWh: 1
    }
  },
  {
    $group: {
      _id: "$hour",
      avg_energy: { $avg: "$energy_kWh" }
    }
  },
  { $sort: { _id: 1 } }
]).forEach(printjson);

// 4️⃣ Compare average usage across meters
print("Average energy usage across meters:");
db.energy_readings.aggregate([
  { $group: { _id: "$meterId", avg_usage: { $avg: "$energy_kWh" } } }
]).forEach(printjson);

// 5️⃣ Detect high usage hours (>6 kWh)
print("High usage readings (>6kWh):");
db.energy_readings.aggregate([
  { $match: { energy_kWh: { $gt: 6 } } },
  { $project: { meterId: 1, timestamp: 1, energy_kWh: 1 } }
]).forEach(printjson);
