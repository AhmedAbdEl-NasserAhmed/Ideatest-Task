const TaskDetails = ({ task }) => {



  
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6 mt-4">
      <div className="flex items-center space-x-4">
        <img
          src={task.photo.url}
          alt="Task Image"
          className="w-16 h-16 rounded-md object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
          <p className="text-gray-500">Task ID: {task._id}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-600">{task.description}</p>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Priority:</span>
          <span
            className={`px-2 py-1 rounded-md text-sm font-medium ${
              task.priority === "high"
                ? "bg-red-100 text-red-600"
                : task.priority === "medium"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {task.priority}
          </span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-medium text-gray-700">State:</span>
          <span
            className={`px-2 py-1 rounded-md text-sm font-medium ${
              task.state === "done"
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {task.state}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-700">Assigned To:</h3>
        <ul className="mt-2 space-y-1">
          {task.assignedTo.map((assignee, index) => (
            <li key={index} className="text-gray-600 text-sm">
              {assignee}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskDetails;
