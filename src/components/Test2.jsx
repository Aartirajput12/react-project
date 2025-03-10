import React from "react";

const Test2 = () => {
  const students = [
    {
      id: 1,
      name: "Alice",
      age: 20,
      subjects: [
        { subjectName: "Math", score: 95 },
        { subjectName: "Science", score: 88 },
      ],
    },
    {
      id: 2,
      name: "Bob",
      age: 22,
      subjects: [
        { subjectName: "Math", score: 76 },
        { subjectName: "History", score: 82 },
      ],
    },
    {
      id: 3,
      name: "Charlie",
      age: 21,
      subjects: [
        { subjectName: "English", score: 89 },
        { subjectName: "Art", score: 91 },
      ],
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Nested Loop</h1>
      {students.map((student) => (
        <div className="mb-4" key={student.id}>
          <ul>
            <li>Id: {student.id}</li>
            <li>Name: {student.name}</li>
            <li>Age: {student.age}</li>

            <li className="ml-5 pt-2">
              <h3 className="text-xl font-semibold mb-2">Subjects</h3>
              {student.subjects.map((subject) => (
                <ul key={subject.subjectName}>
                  <li>Subject Name: {subject.subjectName}</li>
                  <li>Score: {subject.score}</li>
                </ul>
              ))}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Test2;
