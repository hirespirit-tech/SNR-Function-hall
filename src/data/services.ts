import eventWedding from "@/assets/images/event-wedding.png";
import eventReception from "@/assets/images/event-reception.png";
import eventEngagement from "@/assets/images/event-engagement.png";
import eventBirthday from "@/assets/images/event-birthday.png";
import eventHalfSaree from "@/assets/images/event-halfsaree.png";
import eventNaming from "@/assets/images/event-naming.png";
import eventBabyShower from "@/assets/images/event-babyshower.png";
import eventAnniversary from "@/assets/images/event-anniversary.png";
import eventCorporate from "@/assets/images/event-corporate.png";
import eventFamily from "@/assets/images/event-family.png";

// This replaces the old database-backed "services" table.
// To add/remove/reorder a service, just edit this array — no admin panel or DB needed.
export interface ServiceItem {
  id: string;
  title: string;
  image: string;
}

export const SERVICES: ServiceItem[] = [
  { id: "wedding", title: "Wedding Ceremony", image: eventWedding },
  { id: "reception", title: "Wedding Reception", image: eventReception },
  { id: "engagement", title: "Engagement", image: eventEngagement },
  { id: "birthday", title: "Birthday Parties", image: eventBirthday },
  { id: "halfsaree", title: "Half Saree Function", image: eventHalfSaree },
  { id: "naming", title: "Naming Ceremony", image: eventNaming },
  { id: "babyshower", title: "Baby Shower", image: eventBabyShower },
  { id: "anniversary", title: "Anniversary", image: eventAnniversary },
  { id: "corporate", title: "Corporate Meetings", image: eventCorporate },
  { id: "family", title: "Family Gatherings", image: eventFamily },
];
