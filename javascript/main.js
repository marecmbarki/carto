//Apparition de la Map
const mapCont = new Map();
mapCont.load();
const BookingEvent = new Booking();
BookingEvent.check();
//Diaporama
const slider = new Slider();
slider.start();
slider.load();

//Evenement clique formulire
const formEvent = new Form();
formEvent.load();

//Informtions de reservation
BookingEvent.load();
