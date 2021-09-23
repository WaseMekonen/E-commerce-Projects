const products = [
  {
    id: 1,
    name: "Apple MacBook Air A1466",
    price: 549.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/3gTfT", "https://did.li/jslTY"],
  },
  {
    id: 2,
    name: "Apple Macbook Pro MJLQ2LL",
    price: 640.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/ADNw5", "https://did.li/ROfaa"],
  },
  {
    id: 3,
    name: "Apple MacBook Pro",
    price: 530.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/9ZHNf", "https://did.li/pbarl"],
  },
  {
    id: 4,
    name: "ASUS VivoBook 15",
    price: 430.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/GmC5q", "https://did.li/Xx5Hw"],
  },
  {
    id: 5,
    name: "ASUS ZenBook 13 Ultra-Slim",
    price: 350.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/eJwlC", "https://did.li/vUYYH"],
  },
  {
    id: 6,
    name: "Dell G3 15 3500 Gaming Laptop",
    price: 430.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/M6qCN", "https://did.li/4gTfT"],
  },
  {
    id: 7,
    name: "Dell Inspiron 14 5000",
    price: 388.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/BDNw5", "https://did.li/SOfaa"],
  },
  {
    id: 8,
    name: "Dell Inspiron 3000",
    price: 453.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/0ZHNf", "https://did.li/qbarl"],
  },
  {
    id: 9,
    name: "Dell Latitude 7480",
    price: 320.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/HmC5q", "https://did.li/Yx5Hw"],
  },
  {
    id: 10,
    name: "HP EliteBook 725",
    price: 300.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/fJwlC", "https://did.li/wUYYH"],
  },
  {
    id: 11,
    name: "HP Elitebook 840 G1",
    price: 470.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/N6qCN", "https://did.li/5gTfT"],
  },
  {
    id: 12,
    name: "HP EliteBook x360",
    price: 203.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/lslTY", "https://did.li/CDNw5"],
  },
  {
    id: 13,
    name: "HP ENVY 14",
    price: 520.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/TOfaa", "https://did.li/a1HNf"],
  },
  {
    id: 14,
    name: "HP Pavilion 14-dv0017ne",
    price: 240.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/rbarl", "https://did.li/ImC5q"],
  },
  {
    id: 15,
    name: "Lenovo Chromebook Flex",
    price: 239.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/Zx5Hw", "https://did.li/gJwlC"],
  },
  {
    id: 16,
    name: "Lenovo IdeaPad S145",
    price: 329.0,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/O6qCN", "https://did.li/mslTY"],
  },
  {
    id: 17,
    name: "Lenovo Ideapad",
    price: 489.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/DDNw5", "https://did.li/UOfaa"],
  },
  {
    id: 18,
    name: "Lenovo Thinkpad T495",
    price: 492.5,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/JmC5q", "https://did.li/1x5Hw"],
  },
  {
    id: 19,
    name: "Lenovo Yoga",
    price: 325.23,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/hJwlC", "https://did.li/yUYYH"],
  },
  {
    id: 20,
    name: "Microsoft Surface Laptop GO",
    price: 204.23,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "laptops",
    image: ["https://did.li/P6qCN", "https://did.li/7gTfT"],
  },
  {
    id: 21,
    name: "Anbernic RG350",
    price: 120.05,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/xbarl", "https://did.li/6x5Hw"],
  },
  {
    id: 22,
    name: "Cougar Gaming Chair",
    price: 234.65,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/mJwlC", "https://did.li/DUYYH"],
  },
  {
    id: 23,
    name: "Hori Apex Racing Wheel",
    price: 105.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/U6qCN", "https://did.li/bhTfT"],
  },
  {
    id: 24,
    name: "Microsoft Xbox Series S Console",
    price: 495.34,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/sslTY", "https://did.li/JDNw5"],
  },
  {
    id: 25,
    name: "Microsoft Xbox Series X",
    price: 480.0,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/1Ofaa", "https://did.li/h1HNf"],
  },
  {
    id: 26,
    name: "Nintendo Switch",
    price: 239.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/ybarl", "https://did.li/PmC5q"],
  },
  {
    id: 27,
    name: "Oculus Quest 2",
    price: 220.5,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/7x5Hw", "https://did.li/nJwlC"],
  },
  {
    id: 28,
    name: "Playstation 3",
    price: 234.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/EUYYH", "https://did.li/V6qCN"],
  },
  {
    id: 29,
    name: "PlayStation 4 Console - 1TB Slim Edition",
    price: 450.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/chTfT", "https://did.li/tslTY"],
  },
  {
    id: 30,
    name: "PlayStation 5 Console",
    price: 499.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/KDNw5", "https://did.li/2Ofaa"],
  },
  {
    id: 31,
    name: "PlayStation 5 DualSense Wireless Controller",
    price: 78.8,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/zbarl", "https://did.li/i1HNf"],
  },
  {
    id: 32,
    name: "PlayStation 5 HD Camera",
    price: 132.12,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/QmC5q", "https://did.li/8x5Hw"],
  },
  {
    id: 33,
    name: "Playstation DualSense Charging Station",
    price: 109.25,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/oJwlC", "https://did.li/FUYYH"],
  },
  {
    id: 34,
    name: "Sony PlayStation 4 Camera",
    price: 354.55,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/W6qCN", "https://did.li/dhTfT"],
  },
  {
    id: 35,
    name: "SteelSeries Arctis 3 Console",
    price: 328.53,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/uslTY", "https://did.li/LDNw5"],
  },
  {
    id: 36,
    name: "Wii Sports Game",
    price: 365.23,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/3Ofaa", "https://did.li/j1HNf"],
  },
  {
    id: 37,
    name: "Xbox 360 4GB Slim Console",
    price: 429.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/Abarl", "https://did.li/RmC5q"],
  },
  {
    id: 38,
    name: "Xbox Elite Wireless Controller",
    price: 350.5,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/9x5Hw", "https://did.li/pJwlC"],
  },
  {
    id: 39,
    name: "Xbox One S 1TB Console",
    price: 459.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/GUYYH", "https://did.li/X6qCN"],
  },
  {
    id: 40,
    name: "Xbox Wireless Controller",
    price: 80.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "console games",
    image: ["https://did.li/ehTfT", "https://did.li/vslTY"],
  },
  {
    id: 41,
    name: "DEERC D20 Mini Drone",
    price: 230.48,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/KmC5q", "https://did.li/2x5Hw"],
  },
  {
    id: 42,
    name: "DEERC D20",
    price: 243.34,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/iJwlC", "https://did.li/zUYYH"],
  },
  {
    id: 43,
    name: "DEERC D50",
    price: 250.5,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/Q6qCN", "https://did.li/8gTfT"],
  },
  {
    id: 44,
    name: "DJI - Mavic Pro Quadcopter",
    price: 500.0,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/oslTY", "https://did.li/FDNw5"],
  },
  {
    id: 45,
    name: "DJI Inspire 2 Drone",
    price: 420.0,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/WOfaa", "https://did.li/d1HNf"],
  },
  {
    id: 46,
    name: "DJI Mavic 2 Pro",
    price: 509.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/ubarl", "https://did.li/LmC5q"],
  },
  {
    id: 47,
    name: "DJI Mavic Air Quadcopter",
    price: 220.5,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/3x5Hw", "https://did.li/jJwlC"],
  },
  {
    id: 48,
    name: "DJI Mini 2",
    price: 264.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/AUYYH", "https://did.li/R6qCN"],
  },
  {
    id: 49,
    name: "DJI Phantom 4 Pro V2.0",
    price: 470.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/9gTfT", "https://did.li/pslTY"],
  },
  {
    id: 50,
    name: "DJI Tello Ryze",
    price: 239.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/GDNw5", "https://did.li/XOfaa"],
  },
  {
    id: 51,
    name: "Eanling FPV Drone HS700D",
    price: 80.8,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/e1HNf", "https://did.li/vbarl"],
  },
  {
    id: 52,
    name: "Eanling HS110G GPS Drone",
    price: 242.12,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/MmC5q", "https://did.li/4x5Hw"],
  },
  {
    id: 53,
    name: "HOLY STONE HS720",
    price: 329.25,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/kJwlC", "https://did.li/BUYYH"],
  },
  {
    id: 54,
    name: "Hubsan H501S X4 1080P HD",
    price: 434.55,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/S6qCN", "https://did.li/qslTY"],
  },
  {
    id: 55,
    name: "Mezone Drone",
    price: 218.53,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/HDNw5", "https://did.li/YOfaa"],
  },
  {
    id: 56,
    name: "Nano Classic JJRC H8",
    price: 235.23,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/f1HNf", "https://did.li/wbarl"],
  },
  {
    id: 57,
    name: "Potensic D58 Potensic Dreamer Drone",
    price: 449.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/NmC5q", "https://did.li/5x5Hw"],
  },
  {
    id: 58,
    name: "Potensic Dreamer Drone",
    price: 540.5,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/lJwlC", "https://did.li/CUYYH"],
  },
  {
    id: 59,
    name: "S9 Foldable RC Mini Drone",
    price: 149.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/T6qCN", "https://did.li/ahTfT"],
  },
  {
    id: 60,
    name: "SANROCK Upgrade X105W HD",
    price: 220.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "drones",
    image: ["https://did.li/rslTY", "https://did.li/IDNw5"],
  },
  {
    id: 61,
    name: "Apple iPhone 11",
    price: 520.05,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/jy5Hw", "https://did.li/AJwlC"],
  },
  {
    id: 62,
    name: "Apple iPhone 12 Pro",
    price: 734.65,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/96qCN", "https://did.li/GslTY"],
  },
  {
    id: 63,
    name: "Apple iPhone SE",
    price: 690.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/hPfaa", "https://did.li/y1HNf"],
  },
  {
    id: 64,
    name: "Apple Magic Keyboard",
    price: 820.0,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/ny5Hw", "https://did.li/Pbarl"],
  },
  {
    id: 65,
    name: "Google Pixel 4A",
    price: 340.5,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/EJwlC", "https://did.li/VUYYH"],
  },
  {
    id: 66,
    name: "Google Pixel 5",
    price: 259.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/c7qCN", "https://did.li/thTfT"],
  },
  {
    id: 67,
    name: "iPad 8th gen",
    price: 459.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/KslTY", "https://did.li/JJwlC"],
  },
  {
    id: 68,
    name: "Ipad air wi-fi",
    price: 259.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/2DNw5", "https://did.li/iPfaa"],
  },
  {
    id: 69,
    name: "Lenovo Tab M10 TB-X505L",
    price: 540.33,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/z1HNf", "https://did.li/Qbarl"],
  },
  {
    id: 70,
    name: "Nokia C10 Android Smartphone",
    price: 354.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/WUYYH", "https://did.li/d7qCN"],
  },
  {
    id: 71,
    name: "OnePlus 8 Pro",
    price: 130.45,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/uhTfT", "https://did.li/LslTY"],
  },
  {
    id: 72,
    name: "OnePlus 9 Pro",
    price: 564.12,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/3DNw5", "https://did.li/jPfaa"],
  },
  {
    id: 73,
    name: "OnePlus Nord N100",
    price: 144.25,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/A1HNf", "https://did.li/Rbarl"],
  },
  {
    id: 74,
    name: "realme 7 Pro",
    price: 250.5,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/9mC5q", "https://did.li/py5Hw"],
  },
  {
    id: 75,
    name: "Samsung Galaxy A52 5G",
    price: 345.9,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/GJwlC", "https://did.li/XUYYH"],
  },
  {
    id: 76,
    name: "Samsung Galaxy A71 SM-A715F DS",
    price: 430.45,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/e7qCN", "https://did.li/MslTY"],
  },
  {
    id: 77,
    name: "Samsung Galaxy A72 SM",
    price: 529.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/4DNw5", "https://did.li/kPfaa"],
  },
  {
    id: 78,
    name: "Samsung Galaxy Note 20 Ultra",
    price: 450.55,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/B1HNf", "https://did.li/Sbarl"],
  },
  {
    id: 79,
    name: "Samsung Galaxy S20 Plus SM-G985F",
    price: 659.99,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/0mC5q", "https://did.li/qy5Hw"],
  },
  {
    id: 80,
    name: "Samsung Galaxy S20 Ultra 5G",
    price: 369.9,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/HJwlC", "https://did.li/YUYYH"],
  },
  {
    id: 81,
    name: "Samsung Galaxy Tab A 8.0",
    price: 654.0,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/f7qCN", "https://did.li/whTfT"],
  },
  {
    id: 82,
    name: "Samsung Galaxy Tab A7",
    price: 450.23,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/NslTY", "https://did.li/5DNw5"],
  },
  {
    id: 83,
    name: "Samsung Galaxy Tab S6 Lite",
    price: 540.45,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/lPfaa", "https://did.li/Tbarl"],
  },
  {
    id: 84,
    name: "Samsung Galaxy Tab S7",
    price: 500.43,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/ry5Hw", "https://did.li/IJwlC"],
  },
  {
    id: 85,
    name: "Xiaomi Mi 10T lite",
    price: 200.0,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/ZUYYH", "https://did.li/g7qCN"],
  },
  {
    id: 86,
    name: "Xiaomi Mi 11 Lite",
    price: 230.4,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/g7qCN", "https://did.li/xhTfT"],
  },
  {
    id: 87,
    name: "Xiaomi Poco M3",
    price: 370.65,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/OslTY", "https://did.li/6DNw5"],
  },
  {
    id: 88,
    name: "Xiaomi Poco X3",
    price: 400.25,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/mPfaa", "https://did.li/D1HNf"],
  },
  {
    id: 89,
    name: "Xiaomi Redmi 9",
    price: 340.35,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/Ubarl", "https://did.li/bnC5q"],
  },
  {
    id: 90,
    name: "Xiaomi Redmi 9C",
    price: 300.95,
    description: "Lorem ipsum dolor sit. Ut doloremque dolor impedit.",
    category: "smartphones & tablets",
    image: ["https://did.li/sy5Hw", "https://did.li/1UYYH"],
  },
];



