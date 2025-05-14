import { useState } from "react";
import Button from "../ui/Button";

export default function TeacherDashboard() {
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
        isToday: date.toDateString() === today.toDateString(),
      });
    }
    return days;
  };

  const dates = getDates();

  return (
    <div className="p-6 bg-white max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Side: Dates + Subjects */}
      <div className="lg:col-span-2 flex flex-col gap-8">
        {/* Dates */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Attendance</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {dates.map((d, idx) => (
              <div
                key={idx}
                className={`min-w-[60px] rounded-lg px-3 py-2 text-center font-medium text-sm ${
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

        {/* Subject Cards */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-[#f3f8ff] rounded-xl border border-blue-200 p-4 flex flex-col justify-between shadow"
              >
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-1">
                    {subject}
                  </h4>
                  <p className="text-sm text-gray-600">Class Time: 08:07 AM</p>
                </div>
                <Button className="mt-4 bg-green-100 hover:bg-green-200 text-green-900 px-4 py-2 rounded-lg text-sm font-semibold">
                  Mark Attendance
                </Button>
              </div>
            ))}
          </div>
          <button
            onClick={addSubject}
            className="mt-4 w-full py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold rounded-lg"
          >
            + Add Subject
          </button>
        </section>
      </div>

      {/* Right Side: Students + Chat Bot */}
      <div className="flex flex-col gap-8">
        {/* Students */}
        <section className="border rounded-xl p-5 shadow-sm bg-white border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Students</h3>
          <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
            {(showAllStudents ? students : students.slice(0, 6)).map(
              (student, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#f3f8ff] p-3 rounded-lg border border-blue-100 shadow-sm"
                >
                  <span className="text-blue-900 font-medium">{student}</span>
                  <button
                    onClick={() =>
                      window.open(`/attendance/${student}`, "_blank")
                    }
                    className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 text-sm font-semibold rounded-md transition"
                  >
                    Check
                  </button>
                </div>
              )
            )}
          </div>
          <div className="flex justify-between items-center mt-4">
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

        {/* Chat Bot */}
        <section className="border border-blue-200 p-5 rounded-xl shadow-sm bg-white">
          <div className="bg-[#f3f8ff] p-6 rounded-xl flex flex-col items-center justify-between min-h-[220px]">
            <h2 className="text-2xl font-extrabold text-blue-900 text-center mb-2">
              Edu Genie Chat Bot
            </h2>
            <p className="text-center text-gray-800 text-lg mb-4">
              Hi! <br /> <strong>Pavan.D</strong>
            </p>
            <Button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-lg font-semibold text-black">
              Click here to start a chat
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
