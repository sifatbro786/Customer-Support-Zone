import TicketCard from "./TicketCard";

const TicketList = ({ tickets, onAdd }) => {
    return (
        <div className="lg:w-2/3">
            <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {tickets.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} onAdd={onAdd} />
                ))}
            </div>
        </div>
    );
};

export default TicketList;
