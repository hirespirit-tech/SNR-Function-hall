// This replaces the old database-backed "faqs" table.
// To add/remove/reorder a question, just edit this array — no admin panel or DB needed.
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "1",
    question: "What is the seating/dining capacity of the hall?",
    answer:
      "Our hall comfortably accommodates 700-800 guests for dining and large gatherings, making it ideal for weddings, receptions, and big family functions.",
  },
  {
    id: "2",
    question: "Do you provide guest rooms for outstation guests?",
    answer:
      "Yes, we have 16 AC guest rooms available on-site for outstation guests, so your family and visitors can stay comfortably close to the venue.",
  },
  {
    id: "3",
    question: "Is parking available at the venue?",
    answer:
      "Yes, we have a huge basement parking area that can accommodate a large number of vehicles for your event.",
  },
  {
    id: "4",
    question: "What types of events can be hosted here?",
    answer:
      "We host weddings, receptions, engagements, birthday parties, half-saree functions, naming ceremonies, baby showers, anniversaries, corporate meetings, and other family or community gatherings.",
  },
  {
    id: "5",
    question: "How do I book the venue for my event date?",
    answer:
      "You can fill out the booking enquiry form on this website, call us directly, or message us on WhatsApp with your event date and requirements. We'll get back to you with availability and pricing.",
  },
  {
    id: "6",
    question: "Is power backup available?",
    answer:
      "Yes, the venue has 24/7 power backup so your event runs smoothly without interruptions.",
  },
];
