-- Code 2: queries.sql
USE EduProDB;

-- 1️⃣ Retrieve all students who scored the highest grade (‘A’) in any course
SELECT DISTINCT 
    s.StudentID,
    s.StudentName,
    c.CourseName,
    e.Grade
FROM Student s
JOIN Enrollment e ON s.StudentID = e.StudentID
JOIN Course c ON e.CourseID = c.CourseID
WHERE e.Grade = 'A';


-- 2️⃣ Find the course(s) where the average grade is highest using a subquery
SELECT 
    c.CourseName,
    AVG(
        CASE 
            WHEN e.Grade = 'A' THEN 4
            WHEN e.Grade = 'B' THEN 3
            WHEN e.Grade = 'C' THEN 2
            WHEN e.Grade = 'D' THEN 1
            ELSE 0
        END
    ) AS AvgGradeValue
FROM Course c
JOIN Enrollment e ON c.CourseID = e.CourseID
GROUP BY c.CourseName
HAVING AvgGradeValue = (
    SELECT MAX(AvgGrade)
    FROM (
        SELECT AVG(
            CASE 
                WHEN e.Grade = 'A' THEN 4
                WHEN e.Grade = 'B' THEN 3
                WHEN e.Grade = 'C' THEN 2
                WHEN e.Grade = 'D' THEN 1
                ELSE 0
            END
        ) AS AvgGrade
        FROM Enrollment e
        JOIN Course c2 ON e.CourseID = c2.CourseID
        GROUP BY c2.CourseName
    ) AS GradeAverages
);


-- 3️⃣ Display instructors who teach more than one course using a correlated subquery
SELECT 
    i.InstructorID,
    i.InstructorName
FROM Instructor i
WHERE (
    SELECT COUNT(DISTINCT e.CourseID)
    FROM Enrollment e
    WHERE e.InstructorID = i.InstructorID
) > 1;


-- 4️⃣ List students who have not enrolled in any course using a subquery with NOT IN
SELECT 
    s.StudentID,
    s.StudentName
FROM Student s
WHERE s.StudentID NOT IN (
    SELECT e.StudentID 
    FROM Enrollment e
);
