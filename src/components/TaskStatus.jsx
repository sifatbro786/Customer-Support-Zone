const TaskStatus = ({ tasks, resolved, onComplete }) => {
    return (
        <div className="lg:w-[20%]">
            <h2 className="text-xl sm:text-2xl font-semibold mt-2 mb-2">Task Status</h2>

            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <div key={task.id} className="bg-white p-4 rounded-lg shadow">
                        <h4 className="mb-3 font-semibold text-sm sm:text-base">{task.title}</h4>
                        <button
                            onClick={() => onComplete(task)}
                            className="btn bg-green-500 text-white rounded-md w-full"
                        >
                            Complete
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-sm sm:text-base">
                    Select a ticket to add to Task Status
                </p>
            )}

            <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-2">Resolved Task</h2>

            {resolved.length > 0 ? (
                resolved.map((task) => (
                    <div
                        key={task.id}
                        className="bg-indigo-100 p-3 font-semibold rounded-md mt-2 text-sm sm:text-base"
                    >
                        {task.title}
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-sm sm:text-base">No resolved tasks yet</p>
            )}
        </div>
    );
};

export default TaskStatus;
