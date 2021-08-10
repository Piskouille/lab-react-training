const creditCards = [
  {
    type:"Visa",
    number:"0123456789018845",
    expirationMonth:3,
    expirationYear:2021,
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"white",
  },
  {
    type:"Master Card",
    number:"0123456789010999",
    expirationMonth:3,
    expirationYear:2021,
    bank:"N26",
    owner:"Maxence Bouret",
    bgColor:"#eeeeee",
    color:"#222222"
  },
  {
    type:"Visa",
    number:"0123456789016984",
    expirationMonth:12,
    expirationYear:2019,
    bank:"Name of the Bank",
    owner:"Firstname Lastname",
    bgColor:"#ddbb55",
    color:"white"
  }
]

const cards = [{
  lastName:'Doe',
  firstName:'John',
  gender: 'male',
  height: 178,
  birth: new Date("1992-07-14"),
  picture:"https://randomuser.me/api/portraits/men/44.jpg"
},{
  lastName:'Delores ',
  firstName:'Obrien',
  gender:'female',
  height: 172,
  birth: new Date("1988-05-11"),
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
}
]

const driverCards = [
  {
    name:"Travis Kalanick",
    rating: 4.2,
    img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
    car : {
      model: "Toyota Corolla Altis",
      licensePlate: "CO42DE"
    }
  },
  {
    name:"Dara Khosrowshahi",
    rating: 4.9,
    img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car:{
      model: "Audi A3",
      licensePlate: "BE33ER"
    }
  },
]

const carrouselContent=[
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg'
]

module.exports = {creditCards, cards, driverCards, carrouselContent}