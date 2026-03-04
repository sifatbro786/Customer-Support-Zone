import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ticketsData from "./data/tickets.js";
import toast from "daisyui/components/toast/index.js";
import TicketList from "./components/TicketList.jsx";
import TaskStatus from "./components/TaskStatus.jsx";

function App() {
    const [tickets, setTickets] = useState(ticketsData);
    const [taskStatus, setTaskStatus] = useState([]);
    const [resolved, setResolved] = useState([]);

    const handleAddTask = (ticket) => {
        if (taskStatus.find((t) => t.id === ticket.id)) {
            toast.warning("Already added!");
            return;
        }

        setTaskStatus([...taskStatus, ticket]);
        toast.success("Added to Task Status!");
    };

    const handleComplete = (ticket) => {
        setTaskStatus(taskStatus.filter((t) => t.id !== ticket.id));
        setResolved([...resolved, ticket]);
        setTickets(tickets.filter((t) => t.id !== ticket.id));
        toast.success("Task Completed!");
    };

    return (
        <>
            <Navbar />
            <Banner inProgress={taskStatus.length} resolved={resolved.length} />

            <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-10 pt-10 pb-20">
                <TicketList tickets={tickets} onAdd={handleAddTask} />
                <TaskStatus tasks={taskStatus} resolved={resolved} onComplete={handleComplete} />
            </div>

            <Footer />
        </>
    );
}

export default App;
