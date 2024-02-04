import React from "react";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {});
    return res.json();
  } catch (error) {
    console.log("Faild to get Tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();
  tickets ?? console.log(tickets[0].title);
  const uniqueCategoies = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      {tickets &&
        uniqueCategoies?.map((uniqueCategory, categoryIndex) => (
          <div className="mb-4" key={categoryIndex}>
            <h2>{uniqueCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    key={_index}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
