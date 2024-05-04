import React from 'react';
import * as sub from "../../../public/asset/Sample_Data/Courses/Subject.js";
import { useNavigate, useParams } from 'react-router-dom';

const Subject = () => {
  // Extracting route parameters using useParams hook
  const { courseId, subjectId } = useParams();
  const navigate = useNavigate(); // Using useNavigate hook to get the navigation function

  // Selecting the appropriate function based on the course
  const selectedCourse = sub.courseSubjects[courseId];

  // Finding the subject within the selected course
  const selectedSubject = selectedCourse.find(item => item.title === subjectId);

  // If subject is not found, render an error message
  if (!selectedSubject) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Subject not found</h1>
        <p>The subject you are looking for does not exist.</p>
      </div>
    );
  }

  const navigateToCategory = (sub,cat) => {
    navigate(`/${sub}/${cat}`);
  };

  // Render subject content in tables
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{selectedSubject.title}</h1>
      <p className="mb-4">{selectedSubject.heading}</p>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Year</th>
              <th className="px-4 py-2">Subjects</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(selectedSubject.content).map(([year, subjects]) => (
              <tr key={year} className="border-b border-gray-300">
                <td className="px-4 py-2">{`Year ${year}`}</td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside">
                    {subjects.map((sub, index) => (
                      <li key={index} onClick={() => navigateToCategory(sub,"Home")} className='hover:cursor-pointer'>
                        {sub}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subject;
