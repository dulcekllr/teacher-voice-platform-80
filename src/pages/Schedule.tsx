import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      date: new Date(2024, 2, 20),
      title: "Teachers' Forum",
      location: "Kwale Community Center",
    },
    {
      date: new Date(2024, 2, 25),
      title: "Education Summit",
      location: "Msambweni Hall",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-12">Campaign Schedule</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <Card key={index} className="p-4">
                  <h3 className="font-bold text-primary">{event.title}</h3>
                  <p className="text-gray-600">{event.location}</p>
                  <p className="text-sm text-gray-500">
                    {event.date.toLocaleDateString()}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;