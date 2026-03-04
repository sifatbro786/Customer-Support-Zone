import TicketCard from "./TicketCard";

const TicketList = ({ tickets, onAdd }) => {
    return (
        <div className="lg:w-[80%]">
            <h2 className="text-2xl font-semibold mb-4">Customer Tickets</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {tickets.length > 0 ? (
                    tickets.map((ticket) => (
                        <TicketCard key={ticket.id} ticket={ticket} onAdd={onAdd} />
                    ))
                ) : (
                    <p className="text-red-500 text-base">No tickets found</p>
                )}
            </div>
        </div>
    );
};

export default TicketList;
