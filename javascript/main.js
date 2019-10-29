//Apparition de la Map
const mapCont = new Map();

mapCont.load();

//Etat de la reservation
const BookingEvent = new Booking();

BookingEvent.checkBookingStatus();

//Diaporama
const slider = new Slider();

slider.start();
slider.load();

//Evenement clique formulire
const formEvent = new Form();

formEvent.load();
//Informtions de reservation
BookingEvent.load();
