import { FaBook, FaChartPie, FaLightbulb, FaTicketAlt, FaUsers, FaUserTie } from 'react-icons/fa';
export const menuData = [
    {
        title: 'Pautas de votação',
        icon: <FaChartPie style={{ marginRight: '0.5rem' }} />,
        path: "/"
    }
]
export const tableTitles = ["Nome", "Descrição", "data Inicio", "Data fim"]
export const data=[
    [
      "Contact Email not Linked",
      "Tom Cruise",
      "May 26, 2019",
      "High"
    ],
    [
      "Adding Images to Featured Posts",
      "Matt Damon",
      "May 26, 2019",
      "low"
    ],
    [
      "When will I be charged this month?",
      "Robert Downey",
      "May 26, 2019",
      "High"
    ],
    [
      "Payment not going through",
      "Christian Bale",
      "May 25, 2019",
      "Normal"
    ],
    [
      "Unable to add replies",
      "Henry Cavil",
      "May 26, 2019",
      "High"
    ],
  ]

  export const SOCKET_URL = 'http://localhost:8080/vote-result/';

  export const API_URL = 'http://localhost:8080/api/v1.0/voting-agenda';