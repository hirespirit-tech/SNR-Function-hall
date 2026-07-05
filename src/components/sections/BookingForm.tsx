import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { EVENT_TYPES, CONTACT_INFO } from "@/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.date({
    required_error: "Please select a date",
  }),
  expectedGuests: z.coerce.number().min(10, "Please enter expected number of guests"),
  needGuestRooms: z.boolean().default(false),
  numberOfRooms: z.coerce.number().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function buildWhatsAppMessage(values: FormValues): string {
  const lines = [
    `Hi, I'd like to enquire about booking SNR Function Hall & Guest Rooms.`,
    ``,
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    values.email ? `Email: ${values.email}` : null,
    `Event Type: ${values.eventType}`,
    `Event Date: ${format(values.eventDate, "PPP")}`,
    `Expected Guests: ${values.expectedGuests}`,
    values.needGuestRooms
      ? `Guest Rooms Needed: Yes (${values.numberOfRooms ?? "not specified"})`
      : `Guest Rooms Needed: No`,
    values.message ? `Additional Requirements: ${values.message}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}

export default function BookingForm() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      eventType: "",
      expectedGuests: 100,
      needGuestRooms: false,
      numberOfRooms: 0,
      message: "",
    },
  });

  const watchNeedRooms = form.watch("needGuestRooms");

  function onSubmit(values: FormValues) {
    const message = buildWhatsAppMessage(values);
    const waUrl = `${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    toast({
      title: "Opening WhatsApp...",
      description: "Send the prefilled message and our team will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="booking" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          <div className="lg:col-span-2">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Book Venue</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Let's Plan Your Perfect Day
            </h2>
            <p className="text-foreground/80 text-lg mb-8">
              Fill out the form with your event details — it opens WhatsApp with everything prefilled so you can send it to us in one tap.
            </p>
            <div className="p-8 rounded-2xl bg-secondary text-secondary-foreground shadow-lg">
              <h3 className="font-serif text-xl font-bold mb-4">Why Book With Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="text-primary">✓</span> 700-800 Dining Capacity</li>
                <li className="flex items-center gap-3"><span className="text-primary">✓</span> 16 AC Guest Rooms</li>
                <li className="flex items-center gap-3"><span className="text-primary">✓</span> Beautiful Mandap Decor</li>
                <li className="flex items-center gap-3"><span className="text-primary">✓</span> Huge Basement Parking</li>
                <li className="flex items-center gap-3"><span className="text-primary">✓</span> 24/7 Power Backup</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-card p-6 md:p-8 rounded-3xl shadow-xl border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 9876543210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Event" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {EVENT_TYPES.map(type => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Event Date *</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date(new Date().setHours(0, 0, 0, 0))
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="expectedGuests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected Guests *</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="p-4 border border-border/50 rounded-xl bg-muted/30 space-y-4">
                    <FormField
                      control={form.control}
                      name="needGuestRooms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Need Guest Rooms?</FormLabel>
                            <p className="text-sm text-muted-foreground">We have up to 16 AC rooms available.</p>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    {watchNeedRooms && (
                      <FormField
                        control={form.control}
                        name="numberOfRooms"
                        render={({ field }) => (
                          <FormItem className="pt-2">
                            <FormLabel>Number of Rooms Required</FormLabel>
                            <FormControl>
                              <Input type="number" max={16} min={1} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Requirements / Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your event needs..." 
                            className="resize-none" 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                  >
                    Send Enquiry on WhatsApp
                  </Button>
                </form>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
