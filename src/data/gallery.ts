import venue1 from "@assets/ChatGPT_Image_Jun_27,_2026,_03_50_08_PM_1782555630400.png";
import venue2 from "@assets/ChatGPT_Image_Jun_27,_2026,_02_19_50_PM_1782627413056.png";
import venue4 from "@assets/ChatGPT_Image_Jun_27,_2026,_02_35_49_PM_1782553971114.png";
import venue6 from "@assets/ChatGPT_Image_Jun_27,_2026,_01_11_57_PM_1783143370672.jpg";
import venue7 from "@assets/ChatGPT_Image_Jun_27,_2026,_01_24_49_PM_1783143352477.jpg";

import wedding_gallery_1 from "@/assets/images/new-gallery/wedding-gallery-1.jpg";
import wedding_gallery_2 from "@/assets/images/new-gallery/wedding-gallery-2.jpg";
import wedding_gallery_3 from "@/assets/images/new-gallery/wedding-gallery-3.jpg";
import wedding_gallery_4 from "@/assets/images/new-gallery/wedding-gallery-4.jpg";
import wedding_gallery_5 from "@/assets/images/new-gallery/wedding-gallery-5.jpg";
import wedding_gallery_6 from "@/assets/images/new-gallery/wedding-gallery-6.jpg";
import wedding_gallery_7 from "@/assets/images/new-gallery/wedding-gallery-7.jpg";
import reception_gallery_1 from "@/assets/images/new-gallery/reception-gallery-1.jpg";
import reception_gallery_2 from "@/assets/images/new-gallery/reception-gallery-2.jpg";
import reception_gallery_3 from "@/assets/images/new-gallery/reception-gallery-3.jpg";
import reception_gallery_4 from "@/assets/images/new-gallery/reception-gallery-4.jpg";
import reception_gallery_5 from "@/assets/images/new-gallery/reception-gallery-5.jpg";
import reception_gallery_6 from "@/assets/images/new-gallery/reception-gallery-6.jpg";
import reception_gallery_7 from "@/assets/images/new-gallery/reception-gallery-7.jpg";
import birthday_gallery_1 from "@/assets/images/new-gallery/birthday-gallery-1.jpg";
import birthday_gallery_2 from "@/assets/images/new-gallery/birthday-gallery-2.jpg";
import birthday_gallery_3 from "@/assets/images/new-gallery/birthday-gallery-3.jpg";
import birthday_gallery_4 from "@/assets/images/new-gallery/birthday-gallery-4.jpg";
import birthday_gallery_5 from "@/assets/images/new-gallery/birthday-gallery-5.jpg";
import birthday_gallery_6 from "@/assets/images/new-gallery/birthday-gallery-6.jpg";
import birthday_gallery_7 from "@/assets/images/new-gallery/birthday-gallery-7.jpg";
import dining_gallery_1 from "@/assets/images/new-gallery/dining-gallery-1.jpg";
import dining_gallery_2 from "@/assets/images/new-gallery/dining-gallery-2.jpg";
import dining_gallery_3 from "@/assets/images/new-gallery/dining-gallery-3.jpg";
import dining_gallery_4 from "@/assets/images/new-gallery/dining-gallery-4.jpg";
import dining_gallery_5 from "@/assets/images/new-gallery/dining-gallery-5.jpg";
import dining_gallery_6 from "@/assets/images/new-gallery/dining-gallery-6.jpg";
import dining_gallery_7 from "@/assets/images/new-gallery/dining-gallery-7.jpg";
import lighting_gallery_1 from "@/assets/images/new-gallery/lighting-gallery-1.jpg";
import lighting_gallery_2 from "@/assets/images/new-gallery/lighting-gallery-2.jpg";
import lighting_gallery_3 from "@/assets/images/new-gallery/lighting-gallery-3.jpg";
import lighting_gallery_4 from "@/assets/images/new-gallery/lighting-gallery-4.jpg";
import lighting_gallery_5 from "@/assets/images/new-gallery/lighting-gallery-5.jpg";
import lighting_gallery_6 from "@/assets/images/new-gallery/lighting-gallery-6.jpg";

// This replaces the old database-backed "gallery" table.
// To add photos: drop the image file in src/assets/attached_assets (or src/assets/images),
// import it above, and add an entry below. To remove a photo, delete its entry.
// Categories can be anything you like — "All" is added automatically.
export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  type: "image" | "video";
  url: string;
}

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: "1", title: "Grand Hall Setup", category: "Hall", type: "image", url: venue1 },
  { id: "2", title: "Guest Room Interior", category: "Guest Rooms", type: "image", url: venue2 },
  { id: "4", title: "Stage & Mandap Setup", category: "Decoration", type: "image", url: venue4 },
  { id: "6", title: "Venue Exterior", category: "Hall", type: "image", url: venue6 },
  { id: "7", title: "Event Ambience", category: "Decoration", type: "image", url: venue7 },
  { id: "8", title: "Wedding Decor 1", category: "Wedding", type: "image", url: wedding_gallery_1 },
  { id: "9", title: "Wedding Decor 2", category: "Wedding", type: "image", url: wedding_gallery_2 },
  { id: "10", title: "Wedding Decor 3", category: "Wedding", type: "image", url: wedding_gallery_3 },
  { id: "11", title: "Wedding Decor 4", category: "Wedding", type: "image", url: wedding_gallery_4 },
  { id: "12", title: "Wedding Decor 5", category: "Wedding", type: "image", url: wedding_gallery_5 },
  { id: "13", title: "Wedding Decor 6", category: "Wedding", type: "image", url: wedding_gallery_6 },
  { id: "14", title: "Wedding Decor 7", category: "Wedding", type: "image", url: wedding_gallery_7 },
  { id: "15", title: "Reception Decor 1", category: "Reception", type: "image", url: reception_gallery_1 },
  { id: "16", title: "Reception Decor 2", category: "Reception", type: "image", url: reception_gallery_2 },
  { id: "17", title: "Reception Decor 3", category: "Reception", type: "image", url: reception_gallery_3 },
  { id: "18", title: "Reception Decor 4", category: "Reception", type: "image", url: reception_gallery_4 },
  { id: "19", title: "Reception Decor 5", category: "Reception", type: "image", url: reception_gallery_5 },
  { id: "20", title: "Reception Decor 6", category: "Reception", type: "image", url: reception_gallery_6 },
  { id: "21", title: "Reception Decor 7", category: "Reception", type: "image", url: reception_gallery_7 },
  { id: "22", title: "Birthday Decor 1", category: "Birthday", type: "image", url: birthday_gallery_1 },
  { id: "23", title: "Birthday Decor 2", category: "Birthday", type: "image", url: birthday_gallery_2 },
  { id: "24", title: "Birthday Decor 3", category: "Birthday", type: "image", url: birthday_gallery_3 },
  { id: "25", title: "Birthday Decor 4", category: "Birthday", type: "image", url: birthday_gallery_4 },
  { id: "26", title: "Birthday Decor 5", category: "Birthday", type: "image", url: birthday_gallery_5 },
  { id: "27", title: "Birthday Decor 6", category: "Birthday", type: "image", url: birthday_gallery_6 },
  { id: "28", title: "Birthday Decor 7", category: "Birthday", type: "image", url: birthday_gallery_7 },
  { id: "29", title: "Dining Area Decor 1", category: "Dining Area", type: "image", url: dining_gallery_1 },
  { id: "30", title: "Dining Area Decor 2", category: "Dining Area", type: "image", url: dining_gallery_2 },
  { id: "31", title: "Dining Area Decor 3", category: "Dining Area", type: "image", url: dining_gallery_3 },
  { id: "32", title: "Dining Area Decor 4", category: "Dining Area", type: "image", url: dining_gallery_4 },
  { id: "33", title: "Dining Area Decor 5", category: "Dining Area", type: "image", url: dining_gallery_5 },
  { id: "34", title: "Dining Area Decor 6", category: "Dining Area", type: "image", url: dining_gallery_6 },
  { id: "35", title: "Dining Area Decor 7", category: "Dining Area", type: "image", url: dining_gallery_7 },
  { id: "36", title: "Lighting Decor 1", category: "Lighting", type: "image", url: lighting_gallery_1 },
  { id: "37", title: "Lighting Decor 2", category: "Lighting", type: "image", url: lighting_gallery_2 },
  { id: "38", title: "Lighting Decor 3", category: "Lighting", type: "image", url: lighting_gallery_3 },
  { id: "39", title: "Lighting Decor 4", category: "Lighting", type: "image", url: lighting_gallery_4 },
  { id: "40", title: "Lighting Decor 5", category: "Lighting", type: "image", url: lighting_gallery_5 },
  { id: "41", title: "Lighting Decor 6", category: "Lighting", type: "image", url: lighting_gallery_6 },
];
