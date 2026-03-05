import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TicketCard = ({ ticket, onAdd }) => {
    const priorityColor =
        ticket.priority === "High"
            ? "text-red-500 font-semibold"
            : ticket.priority === "Medium"
            ? "text-yellow-500 font-semibold"
            : "text-green-500 font-semibold";

    return (
        <div
            onClick={() => onAdd(ticket)}
            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer"
        >
            <div className="flex justify-between">
                <h3 className="text-sm sm:text-base font-semibold text-black pt-2">
                    {ticket.title}
                </h3>
                <div
                    className={`px-1.5 h-fit sm:h-auto py-0.5 sm:px-4 sm:py-1.5 text-black rounded-lg sm:rounded-2xl text-xs sm:text-sm font-semibold flex items-center sm:gap-1 truncate ${
                        ticket.status === "Open"
                            ? "bg-green-200 text-green-500"
                            : "bg-yellow-200 text-yellow-500"
                    }`}
                >
                    <div
                        className={`hidden p-1.5 bg-black rounded-full ${
                            ticket.status === "Open" ? "bg-green-500" : "bg-yellow-500"
                        }`}
                    ></div>
                    {ticket.status}
                </div>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm pt-2">{ticket.description}</p>

            <div className="flex flex-col gap-2 sm:gap-0 justify-between items-center pt-4 text-sm">
                <div>
                    <span className="text-gray-500 pr-4">#{ticket.id}</span>
                    <span className={`${priorityColor} text-xs sm:text-sm`}>
                        {ticket.priority.toUpperCase()} PRIORITY
                    </span>
                </div>
                <div className="flex">
                    <span className="text-gray-500 pr-4">{ticket.customer}</span>
                    <div className="text-gray-500 flex items-center gap-1">
                        <FontAwesomeIcon icon={faCalendar} className="text-xl" /> {ticket.createdAt}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
