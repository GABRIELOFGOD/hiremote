import Image from "next/image";

const FisrtImg = "/calendar.jpg";

const AcademicSessions = () => {
  const sessions = [
    {
      season: "Winter Session",
      months: ["January", "February"],
    },
    {
      season: "Spring Session",
      months: ["April", "May"],
    },
    {
      season: "Summer Session",
      months: ["July", "August"],
    },
    {
      season: "Fall Session",
      months: ["October", "November"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Academic Sessions
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        At Hiremote Africa's School of Remote Work, we run flexible academic
        sessions throughout the year to ensure that students can find the best
        time to enroll. Each program lasts 8 weeks, with live classes held on{" "}
        <span className="font-semibold">
          Saturdays and Sundays at 8:30 PM W.A.T.
        </span>{" "}
        This structure allows students to balance their education with their
        professional and personal lives.
      </p>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <Image src={FisrtImg} alt="Calendar" width={800} height={500} />
      </div>

      {/* Academic Sessions */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          List of Academic Sessions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sessions.map((session, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {session.season}
              </h3>
              <ul className="list-disc ml-5 text-gray-700">
                {session.months.map((month, idx) => (
                  <li key={idx}>{month}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Live Class Schedule */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Live Class Schedule
        </h2>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Saturdays and Sundays</li>
          <li>Time: 8:30 PM W.A.T</li>
        </ul>
      </div>
    </div>
  );
};

export default AcademicSessions;
