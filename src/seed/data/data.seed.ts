
interface SeedProduct {
  product: string;
  description?: string;
  price: number;
  category: number
}

interface SeedData { 
  products: SeedProduct[];
}

export const initialData: SeedData={

  products: [
    {
      product:"Orden de memelitas (3)",
      price:50,
      category:1
    },
    {
      product:"Orden de Tlacoyos (4)",
      price:65,
      category:1
    },
    {
      product:"Tostadas de Pollo",
      price:45,
      category:1
    },
    {
      product:"Tostada de camaron",
      price:90,
      category:1
    },
    {
      product:"Coctel chico",
      price:90,
      category:1
    },
    {
      product:"Coctel grande",
      price:150,
      category:1
    },
    {
      product:"Aguacates rellenos de camaron",
      price:150,
      category:1
    },
    {
      product:"Arroz (blanco o rojo )",
      price:40,
      category:2
    },
    {
      product:"arroz con un huevo",
      price:55,
      category:2
    },
    {
      product:"Arroz con dos huevos",
      price:65,
      category:2
    },
    {
      product:"Arroz con platanos",
      price:65,
      category:2
    },
    {
      product:"Arroz con camarones",
      price:90,
      category:2
    },
    {
      product:"Consomé sencillo",
      price:50,
      category:2
    },
    {
      product:"Consomé Atlixco",
      price:60,
      category:2
    },
    {
      product:"Caldo de camarón",
      price:180,
      category:2
    },
    {
      product:"Sopa de mariscos",
      price:210,
      category:2
    },
    {
      product:"Mole con pollo y arroz",
      price:160,
      category:2
    },
    {
      product:"Enchiladas de ,ole",
      price:140,
      category:2
    },
    {
      product:"Caldo de trucha",
      price:200,
      category:2
    },
    {
      product:"Caldo de camarón c/cascara",
      price:170,
      category:2
    },
    {
      product:"Pechuga empanizada(ensalada, papas y arroz)",
      price:170,
      category:3
    },
    {
      product:"Pechuga al mojo de ajo (ensalada, papas,arroz)",
      price:170,
      category:3
    },
    {
      product:"Pechuga a las Finas hierbas (ensalada, papas y arroz)",
      price:170,
      category:3
    },
    {
      product:"Cecina Atlixco",
      price:190,
      category:3
    },
    {
      product:"Arrachera",
      price:210,
      category:3
    },
    {
      product:"Filete tilapia empanizado",
      price:140,
      category:3
    },
    {
      product:"Orden de frijoles",
      price:45,
      category:4
    },
    {
      product:"Orden de pan",
      price:35,
      category:4
    },
    {
      product:"Orden de pan con mantequlla",
      price:50,
      category:4
    },
    {
      product:"Totopos con aderezo",
      price:45,
      category:4
    },
    {
      product:"Ensalad verde(desinfectada)",
      price:50,
      category:4
    },
    {
      product:"Orden de Guacamole",
      price:50,
      category:4
    },
    {
      product:"Orden de aguacate",
      price:50,
      category:4
    },
    {
      product:"Orden de papas",
      price:70,
      category:4
    },
    {
      product:"Orden de chiles toreados",
      price:30,
      category:4
    },
    {
      product:"Pico de gallo",
      price:40,
      category:4
    },
    {
      product:"Orden de aderzo (chipotle, chilpetin,diabla)",
      price:20,
      category:4
    },
    {
      product:"Natural",
      price:200,
      category:5
    },
    {
      product:"Ajillo",
      price:200,
      category:5
    },
    {
      product:"Ajo",
      price:200,
      category:5
    },
    {
      product:"Diabla",
      price:200,
      category:5
    },
    {
      product:"Encipotlada",
      price:200,
      category:5
    },
    {
      product:"Almendrada (sin espinas)",
      price:210,
      category:5
    },
    {
      product:"Asada natural (sin espinas)",
      price:200,
      category:5
    },
    {
      product:"Asada con ajo (sin espinas)",
      price:200,
      category:5
    },
    {
      product:"Empanizada (sin espinas)",
      price:200,
      category:5
    },
    {
      product:"Asada al chiltepin",
      price:200,
      category:5
    },
    {
      product:"Mojarra",
      price:185,
      category:5
    },
    {
      product:"Adobada",
      price:200,
      category:6
    },
    {
      product:"Ajo",
      price:200,
      category:6
    },
    {
      product:"Diabla",
      price:200,
      category:6
    },
    {
      product:"Encipotlada",
      price:200,
      category:6
    },
    {
      product:"Epazote",
      price:200,
      category:6
    },
    {
      product:"Talla",
      price:200,
      category:6
    },
    {
      product:"Vino",
      price:200,
      category:6
    },
    {
      product:"Chanpiñones (sin espinas)",
      price:210,
      category:6
    },
    {
      product:"Oasis (sin espinas)",
      price:200,
      category:6
    },
    {
      product:"Poblana (sin espinas)",
      price:200,
      category:6
    },
    {
      product:"Rellena de camarones (sin espinas)",
      price:230,
      category:6
    },
    {
      product:"Hawaiana",
      price:220,
      category:6
    },
    {
      product:"Chiltepin",
      price:200,
      category:6
    },
    {
      product:"Ajillo (ensalada, papas y arroz)",
      price:230,
      category:7
    },
    {
      product:"Ajo (ensalada, papas y arroz)",
      price:230,
      category:7
    },
    {
      product:"Diabla (ensalada, papas y arroz)",
      price:230,
      category:7
    },
    {
      product:"Enchipotlados (ensalada, papas y arroz)",
      price:230,
      category:7
    },
    {
      product:"Empanizados (ensalada, papas y arroz)",
      price:250,
      category:7
    },
    {
      product:"Naturales (ensalada, papas y arroz)",
      price:250,
      category:7
    },
    {
      product:"Costa Brava (pico de gallo y naranja)",
      price:230,
      category:7
    },
    {
      product:"Al coco (ensalada, papas y arroz)",
      price:250,
      category:7
    },
    {
      product:"Tiras de pollo empanizadas",
      price:170,
      category:8
    },
    {
      product:"Tiritas de pescado empanizadas",
      price:120,
      category:8
    },
    {
      product:"Hamburguesa con papas",
      price:100,
      category:8
    },
    {
      product:"Hot Dog con papas",
      price:40,
      category:8
    },
    {
      product:"Nuguets d pollo con papas",
      price:90,
      category:8
    },
    {
      product:"Duraznos o mangos (con crema o rompope)",
      price:65,
      category:9
    },
    {
      product:"Flan napolitano",
      price:65,
      category:9
    },
    {
      product:"Fresas con crema",
      price:65,
      category:9
    },
    {
      product:"Fresas con chantilly y chocolate",
      price:85,
      category:9
    },
    {
      product:"Postre especial(fresa,durazno, platano, mango, lechera nuez, pasas)",
      price:115,
      category:9
    },
    {
      product:"Rebanada de pastel",
      price:65,
      category:9
    },
    {
      product:"Helado (durazno, manzana, naranja, pera o melon)",
      price:65,
      category:9
    },
    {
      product:"Helado de coco o mamey",
      price:65,
      category:9
    },
    {
      product:"Helado de cafe o chocolate",
      price:65,
      category:9
    },
    {
      product:"Helado de tequila",
      price:65,
      category:9
    },
    {
      product:"Helado de piña",
      price:65,
      category:9
    },
    {
      product:"Pay de manzana",
      price:85,
      category:9
    }
  ]
}