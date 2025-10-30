-- Inserting Data into the Table
INSERT INTO Employees (FirstName, LastName, Email, HireDate, Salary) VALUES
('John', 'Doe', 'john.doe@example.com', '2023-01-15', 60000.00), -- Date format is 'YYYY-MM-DD'
('Jane', 'Smith', 'jane.smith@example.com', '2023-02-20', 65000.00), -- Date format is 'YYYY-MM-DD'
('Alice', 'Johnson', 'alice.johnson@example.com', '2023-03-10', 70000.00) -- Date format is 'YYYY-MM-DD';
-- Querying the Data from the Table
); 
SELECT * FROM Employees; -- Select all columns and all rows
SELECT FirstName, LastName, Email FROM Employees; -- Select specific columns