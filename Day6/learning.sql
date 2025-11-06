-- Select the database
USE EmployeeDB;

-- Create Employees table
CREATE TABLE IF NOT EXISTS Employees (
  EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50) NOT NULL,
  Email VARCHAR(100) UNIQUE NOT NULL,
  HireDate DATE NOT NULL,
  Salary DECIMAL(10,2) NOT NULL
);

-- Insert sample employee records
INSERT INTO Employees (FirstName, LastName, Email, HireDate, Salary)
VALUES
('John', 'Doe', 'john.doe@example.com', '2023-01-15', 60000.00),
('Jane', 'Smith', 'jane.smith@example.com', '2023-02-20', 65000.00),
('Alice', 'Johnson', 'alice.johnson@example.com', '2023-03-10', 70000.00);
