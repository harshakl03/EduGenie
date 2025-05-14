import { useState } from "react";
import { Button } from "@/components/ui/button"; // Corrected to named export

export default function AttendanceDashboard() {
  const [showAllStudents, setShowAllStudents] = useState(false);
  const [subjects, setSubjects] = useState([
    "Maths",
    "Physics",
    "DSA",
    "ADA",
    "PE",
  ]);
  const [students, setStudents] = useState([
    "Pavan.D",
    "bomber",
    "kabhi kabhi",
    "Double Gamer",
    "Pussy",
    "Student 6",
    "Student 7",
  ]);

  const addSubject = () => {
    setSubjects([...subjects, `Subject ${subjects.length + 1}`]);
  };

  const addStudent = () => {
    setStudents([...students, `Student ${students.length + 1}`]);
  };

  const getDates = () => {
    const today = new Date();
    const days = [];
    for (let i = -2; i <= 4; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.getDate(),
        month: date.getMonth() + 1,
        isToday: date.toDateString() === today.toDateString(),
      });
    }
    return days;
  };

  const dates = getDates();

  return (
    <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column: Dates and Subjects */}
      <div className="space-y-6">
        {/* Date Row */}
        <section>
          <h2 className="text-xl font-semibold text-blue-900 mb-3">
            Attendance
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {dates.map((d, idx) => (
              <div
                key={idx}
                className={`min-w-[50px] rounded-lg px-3 py-2 text-center font-medium text-sm transition-colors duration-300 ${
                  d.isToday
                    ? "bg-blue-900 text-white"
                    : "bg-[#f3f8ff] text-blue-900 border border-blue-200"
                }`}
              >
                <div>{d.date}</div>
                <div>{d.day}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Subject Cards with Add Button */}
        <section className="overflow-y-auto max-h-[400px] pr-2 space-y-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-[#f3f8ff] rounded-xl border border-blue-200 p-4 flex justify-between items-center shadow-sm"
            >
              <div>
                <p className="font-semibold text-blue-900 text-base">
                  {subject}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Class time
                  <br />
                  08:07 AM
                </p>
              </div>
              <Button className="bg-green-200 text-green-900 px-4 py-1 rounded-lg text-sm font-semibold">
                Mark Attendence
              </Button>
            </div>
          ))}
          <button
            onClick={addSubject}
            className="w-full py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold rounded-lg"
          >
            + Add Subject
          </button>
        </section>
      </div>

      {/* Right Column: Students and Chat Bot */}
      <div className="space-y-6">
        {/* Students List */}
        <section className="border rounded-xl p-4 shadow-sm bg-white border-blue-200">
          <h3 className="text-lg font-bold text-blue-900 mb-3">Students</h3>
          <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
            {(showAllStudents ? students : students.slice(0, 6)).map(
              (student, index) => (
                <button
                  key={index}
                  className="w-full flex justify-between items-center border border-blue-100 bg-[#f3f8ff] p-2 rounded-lg hover:bg-blue-50"
                  onClick={() =>
                    window.open(`/attendance/${student}`, "_blank")
                  }
                >
                  <span className="text-blue-900 font-medium">{student}</span>
                  <span className="px-2 py-1 text-sm rounded-md font-medium bg-yellow-200 text-yellow-800">
                    Check
                  </span>
                </button>
              )
            )}
          </div>
          <div className="flex justify-between mt-2">
            <button
              onClick={() => setShowAllStudents(!showAllStudents)}
              className="text-sm text-blue-600 hover:underline"
            >
              {showAllStudents ? "Show Less" : "Show All"}
            </button>
            <button
              onClick={addStudent}
              className="text-sm text-blue-600 hover:underline"
            >
              + Add
            </button>
          </div>
        </section>

        {/* Edu Genie Chat Bot */}
        <section className="border border-blue-200 p-2 rounded-xl shadow-sm bg-white">
          <div className="bg-[#f3f8ff] p-4 rounded-xl min-h-[220px] flex flex-col justify-between">
            <h2 className="text-2xl font-extrabold text-center text-blue-900 mb-4">
              Edu Genie Chat Bot
            </h2>
            <p className="text-center text-lg text-gray-800 mb-2">
              Hi! <br /> <strong>Pavan.D</strong>
            </p>
            <div className="flex justify-center">
              <Button className="bg-gray-100 px-6 py-2 rounded-lg font-semibold text-black">
                click here to start a chat
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
