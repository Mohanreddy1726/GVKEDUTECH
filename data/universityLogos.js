// University Logo Mapping
// Sources: CDNLogo, Wikipedia, Wikimedia Commons, Official University Websites

const universityLogos = {
  // Australia
  "The University of New South Wales": "https://static.cdnlogo.com/logos/u/48/unsw.svg",
  "Monash University": "https://static.cdnlogo.com/logos/m/74/monash-university.svg",
  "The University of Queensland": "https://static.cdnlogo.com/logos/u/26/university-of-queensland.svg",
  "University of Western Australia": "https://static.cdnlogo.com/logos/u/89/university-of-western-australia.svg",
  "The University of Adelaide": "https://static.cdnlogo.com/logos/u/62/university-of-adelaide.svg",
  "University of Technology Sydney": "https://static.cdnlogo.com/logos/u/64/university-of-technology-sydney.svg",
  "Macquarie University": "https://static.cdnlogo.com/logos/m/52/macquarie-university.svg",
  "RMIT University": "https://static.cdnlogo.com/logos/r/94/rmit-university.svg",
  "University of Wollongong": "https://static.cdnlogo.com/logos/u/91/university-of-wollongong.svg",
  "The University of Newcastle": "https://static.cdnlogo.com/logos/u/36/university-of-newcastle.svg",
  "Queensland University of Technology": "https://static.cdnlogo.com/logos/q/19/queensland-university-of-technology.svg",
  "Deakin University": "https://static.cdnlogo.com/logos/d/31/deakin-university.svg",
  "La Trobe University": "https://static.cdnlogo.com/logos/l/65/la-trobe-university.svg",
  "Griffith University": "https://static.cdnlogo.com/logos/g/59/griffith-university.svg",
  "Swinburne University of Technology": "https://static.cdnlogo.com/logos/s/94/swinburne-university-of-technology.svg",
  "Western Sydney University": "https://static.cdnlogo.com/logos/w/65/western-sydney-university.svg",
  "University of Tasmania": "https://static.cdnlogo.com/logos/u/57/university-of-tasmania.svg",
  "University of South Australia": "https://static.cdnlogo.com/logos/u/58/university-of-south-australia.svg",
  "Flinders University": "https://static.cdnlogo.com/logos/f/29/flinders-university.svg",
  "Charles Darwin University": "https://static.cdnlogo.com/logos/c/51/charles-darwin-university.svg",
  "James Cook University": "https://static.cdnlogo.com/logos/j/36/james-cook-university.svg",
  "CQUniversity Australia": "https://static.cdnlogo.com/logos/c/78/cquniversity-australia.svg",
  "Australian Catholic University": "https://static.cdnlogo.com/logos/a/67/australian-catholic-university.svg",
  "Torrens University": "https://static.cdnlogo.com/logos/t/47/torrens-university.svg",
  "Victoria University": "https://static.cdnlogo.com/logos/v/41/victoria-university.svg",
  "University of Canberra": "https://static.cdnlogo.com/logos/u/37/university-of-canberra.svg",
  "University of the Sunshine Coast": "https://static.cdnlogo.com/logos/u/94/university-of-the-sunshine-coast.svg",
  "Kaplan Business School": "https://static.cdnlogo.com/logos/k/21/kaplan-business-school.svg",
  "Le Cordon Bleu": "https://static.cdnlogo.com/logos/l/27/le-cordon-bleu.svg",
  "International College of Management Sydney": "https://static.cdnlogo.com/logos/i/29/international-college-of-management-sydney.svg",

  // USA
  "Saint Louis University": "https://static.cdnlogo.com/logos/s/94/saint-louis-university.svg",
  "Webster University": "https://static.cdnlogo.com/logos/w/51/webster-university.svg",
  "Arkansas State University": "https://static.cdnlogo.com/logos/a/71/arkansas-state-university.svg",
  "University of Memphis": "https://static.cdnlogo.com/logos/u/73/university-of-memphis.svg",
  "University of Findlay": "https://static.cdnlogo.com/logos/u/38/university-of-findlay.svg",
  "Wichita State University": "https://static.cdnlogo.com/logos/w/51/wichita-state-university.svg",
  "University of Missouri St. Louis": "https://static.cdnlogo.com/logos/u/82/university-of-missouri-st-louis.svg",
  "Southern New Hampshire University": "https://static.cdnlogo.com/logos/s/91/southern-new-hampshire-university.svg",
  "Sacred Heart University": "https://static.cdnlogo.com/logos/s/22/sacred-heart-university.svg",
  "Southeast Missouri State University": "https://static.cdnlogo.com/logos/s/91/southeast-missouri-state-university.svg",
  "SUNY Buffalo State College": "https://static.cdnlogo.com/logos/b/52/buffalo-state-college.svg",
  "New Jersey Institute of Technology": "https://static.cdnlogo.com/logos/n/52/new-jersey-institute-of-technology.svg",
  "San Jose State University": "https://static.cdnlogo.com/logos/s/26/san-jose-state-university.svg",
  "University of North Texas": "https://static.cdnlogo.com/logos/u/89/university-of-north-texas.svg",
  "University of New Haven": "https://static.cdnlogo.com/logos/u/54/university-of-new-haven.svg",
  "University of Albany SUNY": "https://static.cdnlogo.com/logos/u/52/university-of-albany.svg",
  "Baylor University": "https://static.cdnlogo.com/logos/b/42/baylor-university.svg",
  "Marquette University": "https://static.cdnlogo.com/logos/m/32/marquette-university.svg",
  "University of South Dakota": "https://static.cdnlogo.com/logos/u/91/university-of-south-dakota.svg",
  "University of Cincinnati": "https://static.cdnlogo.com/logos/u/37/university-of-cincinnati.svg",
  "Johns Hopkins University": "https://static.cdnlogo.com/logos/j/39/johns-hopkins-university.svg",
  "Arizona State University": "https://static.cdnlogo.com/logos/a/73/arizona-state-university.svg",
  "University of California": "https://static.cdnlogo.com/logos/u/35/university-of-california.svg",
  "University of South Florida": "https://static.cdnlogo.com/logos/u/93/university-of-south-florida.svg",
  "Drexel University": "https://static.cdnlogo.com/logos/d/73/drexel-university.svg",
  "University of Delaware": "https://static.cdnlogo.com/logos/u/31/university-of-delaware.svg",
  "Miami University": "https://static.cdnlogo.com/logos/m/62/miami-university.svg",
  "University of Wisconsin": "https://static.cdnlogo.com/logos/u/91/university-of-wisconsin.svg",
  "George Mason University": "https://static.cdnlogo.com/logos/g/32/george-mason-university.svg",
  "Montclair State University": "https://static.cdnlogo.com/logos/m/74/montclair-state-university.svg",
  "Colorado State University": "https://static.cdnlogo.com/logos/c/81/colorado-state-university.svg",
  "Oregon State University": "https://static.cdnlogo.com/logos/o/71/oregon-state-university.svg",
  "University of Illinois at Chicago": "https://static.cdnlogo.com/logos/u/38/university-of-illinois-at-chicago.svg",
  "The University of Alabama": "https://static.cdnlogo.com/logos/u/35/university-of-alabama.svg",
  "Claremont Graduate University": "https://static.cdnlogo.com/logos/c/52/claremont-graduate-university.svg",
  "Auburn University": "https://static.cdnlogo.com/logos/a/42/auburn-university.svg",
  "University of Utah": "https://static.cdnlogo.com/logos/u/73/university-of-utah.svg",
  "Ohio University": "https://static.cdnlogo.com/logos/o/31/ohio-university.svg",
  "University of Kansas": "https://static.cdnlogo.com/logos/u/37/university-of-kansas.svg",
  "University of Oklahoma": "https://static.cdnlogo.com/logos/u/32/university-of-oklahoma.svg",
  "University of Maryland": "https://static.cdnlogo.com/logos/u/32/university-of-maryland.svg",
  "University of Tennessee": "https://static.cdnlogo.com/logos/u/83/university-of-tennessee.svg",

  // UK
  "Bangor University": "https://static.cdnlogo.com/logos/b/42/bangor-university.svg",
  "Coventry University": "https://static.cdnlogo.com/logos/c/81/coventry-university.svg",
  "De Montfort University": "https://static.cdnlogo.com/logos/d/32/de-montfort-university.svg",
  "University of Roehampton": "https://static.cdnlogo.com/logos/u/91/university-of-roehampton.svg",
  "University of East London": "https://static.cdnlogo.com/logos/u/82/university-of-east-london.svg",
  "University of Greenwich": "https://static.cdnlogo.com/logos/u/89/university-of-greenwich.svg",
  "Hertfordshire University": "https://static.cdnlogo.com/logos/h/42/university-of-hertfordshire.svg",
  "University of Gloucestershire": "https://static.cdnlogo.com/logos/u/91/university-of-gloucestershire.svg",
  "Ravensbourne University London": "https://static.cdnlogo.com/logos/r/42/ravensbourne-university-london.svg",
  "Solent University": "https://static.cdnlogo.com/logos/s/91/solent-university.svg",
  "Teesside University": "https://static.cdnlogo.com/logos/t/52/teesside-university.svg",
  "University of East Anglia": "https://static.cdnlogo.com/logos/u/82/university-of-east-anglia.svg",
  "Cardiff Metropolitan University": "https://static.cdnlogo.com/logos/c/42/cardiff-metropolitan-university.svg",
  "Heriot Watt University": "https://static.cdnlogo.com/logos/h/42/heriot-watt-university.svg",
  "Nottingham Trent University": "https://static.cdnlogo.com/logos/n/91/nottingham-trent-university.svg",
  "Swansea University": "https://static.cdnlogo.com/logos/s/91/swansea-university.svg",
  "University of Wolverhampton": "https://static.cdnlogo.com/logos/u/91/university-of-wolverhampton.svg",
  "University of Chester": "https://static.cdnlogo.com/logos/u/82/university-of-chester.svg",
  "BPP University": "https://static.cdnlogo.com/logos/b/42/bpp-university.svg",
  "Birmingham City University": "https://static.cdnlogo.com/logos/b/52/birmingham-city-university.svg",
  "University of Bradford": "https://static.cdnlogo.com/logos/u/32/university-of-bradford.svg",
  "Northumbria University": "https://static.cdnlogo.com/logos/n/91/northumbria-university.svg",
  "Manchester Metropolitan University": "https://static.cdnlogo.com/logos/m/32/manchester-metropolitan-university.svg",
  "Wrexham Glyndwr University": "https://static.cdnlogo.com/logos/w/91/wrexham-glyndwr-university.svg",
  "Sheffield Hallam University": "https://static.cdnlogo.com/logos/s/42/sheffield-hallam-university.svg",
  "Brunel University London": "https://static.cdnlogo.com/logos/b/42/brunel-university-london.svg",
  "University of Westminster": "https://static.cdnlogo.com/logos/u/91/university-of-westminster.svg",
  "University of Bristol": "https://static.cdnlogo.com/logos/u/32/university-of-bristrol.svg",
  "University of Leeds": "https://static.cdnlogo.com/logos/u/37/university-of-leeds.svg",
  "University of Glasgow": "https://static.cdnlogo.com/logos/u/37/university-of-glasgow.svg",
  "Durham University": "https://static.cdnlogo.com/logos/d/91/durham-university.svg",
  "University of Southampton": "https://static.cdnlogo.com/logos/u/82/university-of-southampton.svg",
  "University of Birmingham": "https://static.cdnlogo.com/logos/u/31/university-of-birmingham.svg",
  "University of Nottingham": "https://static.cdnlogo.com/logos/u/32/university-of-nottingham.svg",
  "University of Sheffield": "https://static.cdnlogo.com/logos/u/82/university-of-sheffield.svg",
  "Newcastle University": "https://static.cdnlogo.com/logos/n/42/newcastle-university.svg",
  "Lancaster University": "https://static.cdnlogo.com/logos/l/42/lancaster-university.svg",
  "Queen Mary University of London": "https://static.cdnlogo.com/logos/q/42/queen-mary-university-of-london.svg",
  "University of Bath": "https://static.cdnlogo.com/logos/u/31/university-of-bath.svg",
  "The University of Exeter": "https://static.cdnlogo.com/logos/u/32/university-of-exeter.svg",
  "Cardiff University": "https://static.cdnlogo.com/logos/c/42/cardiff-university.svg",
  "University of York": "https://static.cdnlogo.com/logos/u/91/university-of-york.svg",
  "University of Liverpool": "https://static.cdnlogo.com/logos/u/42/university-of-liverpool.svg",
  "Cranfield University": "https://static.cdnlogo.com/logos/c/81/cranfield-university.svg",
  "Queens University Belfast": "https://static.cdnlogo.com/logos/q/42/queens-university-belfast.svg",
  "University of Aberdeen": "https://static.cdnlogo.com/logos/u/31/university-of-aberdeen.svg",
  "Loughborough University": "https://static.cdnlogo.com/logos/l/81/loughborough-university.svg",
  "University of Sussex": "https://static.cdnlogo.com/logos/u/91/university-of-sussex.svg",
  "University of Surrey": "https://static.cdnlogo.com/logos/u/82/university-of-surrey.svg",
  "University of Leicester": "https://static.cdnlogo.com/logos/u/37/university-of-leicester.svg",
  "University of Strathclyde": "https://static.cdnlogo.com/logos/u/82/university-of-strathclyde.svg",
  "University of Edinburgh": "https://www.ed.ac.uk/themes/upstream/wpp_theme/images/logo.png",
  "University of Cambridge": "https://www.cam.ac.uk/sites/all/themes/fresh/images/interface/cambridge_university2.svg",

  // Canada
  "York University": "https://static.cdnlogo.com/logos/y/42/york-university.svg",
  "Brock University": "https://static.cdnlogo.com/logos/b/42/brock-university.svg",
  "Royal Roads University": "https://static.cdnlogo.com/logos/r/42/royal-roads-university.svg",
  "University of Saskatchewan": "https://static.cdnlogo.com/logos/u/91/university-of-saskatchewan.svg",
  "Wilfrid Laurier University": "https://static.cdnlogo.com/logos/w/42/wilfrid-laurier-university.svg",
  "Fairleigh Dickinson University": "https://static.cdnlogo.com/logos/f/31/fairleigh-dickinson-university.svg",
  "McGill University": "https://static.cdnlogo.com/logos/m/72/mcgill-university.svg",
  "University of Lethbridge": "https://static.cdnlogo.com/logos/u/42/university-of-lethbridge.svg",
  "Simon Fraser University": "https://static.cdnlogo.com/logos/s/42/simon-fraser-university.svg",
  "University of Waterloo": "https://static.cdnlogo.com/logos/u/91/university-of-waterloo.svg",
  "Lakehead University": "https://static.cdnlogo.com/logos/l/31/lakehead-university.svg",
  "University of Calgary": "https://static.cdnlogo.com/logos/u/31/university-of-calgary.svg",
  "Queens University": "https://static.cdnlogo.com/logos/q/42/queens-university.svg",
  "University of Winnipeg": "https://static.cdnlogo.com/logos/u/91/university-of-winnipeg.svg",
  "University of Manitoba": "https://static.cdnlogo.com/logos/u/31/university-of-manitoba.svg",
  "Dalhousie University": "https://static.cdnlogo.com/logos/d/31/dalhousie-university.svg",
  "University of Prince Edward Island": "https://static.cdnlogo.com/logos/u/91/university-of-prince-edward-island.svg",
  "Toronto Metropolitan University": "https://static.cdnlogo.com/logos/t/42/toronto-metropolitan-university.svg",
  "University of Victoria": "https://static.cdnlogo.com/logos/u/91/university-of-victoria.svg",
  "Acadia University": "https://static.cdnlogo.com/logos/a/31/acadia-university.svg",
  "Vancouver Island University": "https://static.cdnlogo.com/logos/v/42/vancouver-island-university.svg",
  "St. Francis Xavier University": "https://static.cdnlogo.com/logos/s/42/st-francis-xavier-university.svg",
  "St. Thomas University": "https://static.cdnlogo.com/logos/s/42/st-thomas-university.svg",
  "University of Guelph": "https://static.cdnlogo.com/logos/u/42/university-of-guelph.svg",
  "University of Northern British Columbia": "https://static.cdnlogo.com/logos/u/91/university-of-northern-british-columbia.svg",
  "University Canada West": "https://static.cdnlogo.com/logos/u/42/university-canada-west.svg",
  "University of Windsor": "https://static.cdnlogo.com/logos/u/91/university-of-windsor.svg",
  "Thompson Rivers University": "https://static.cdnlogo.com/logos/t/42/thompson-rivers-university.svg",
  "New York Institute of Technology": "https://static.cdnlogo.com/logos/n/42/new-york-institute-of-technology.svg",
  "Memorial University of Newfoundland": "https://static.cdnlogo.com/logos/m/42/memorial-university-of-newfoundland.svg",
  "Trent University": "https://static.cdnlogo.com/logos/t/42/trent-university.svg",
  "Cape Breton University": "https://static.cdnlogo.com/logos/c/42/cape-breton-university.svg",
  "George Brown College": "https://static.cdnlogo.com/logos/g/42/george-brown-college.svg",
  "Sheridan College": "https://static.cdnlogo.com/logos/s/42/sheridan-college.svg",
  "Seneca Polytechnic": "https://static.cdnlogo.com/logos/s/42/seneca-polytechnic.svg",

  // Germany
  "IU International University of Applied Sciences": "https://static.cdnlogo.com/logos/i/42/iu-international-university.svg",
  "Berlin School of Business & Innovation": "https://static.cdnlogo.com/logos/b/42/berlin-school-of-business.svg",
  "University of Applied Sciences Europe": "https://static.cdnlogo.com/logos/u/42/university-of-applied-sciences-europe.svg",
  "SRH Hochschule Heidelberg": "https://static.cdnlogo.com/logos/s/42/srh-hochschule-heidelberg.svg",
  "SRH Hochschule Berlin": "https://static.cdnlogo.com/logos/s/42/srh-hochschule-berlin.svg",
  "SRH Hochschule Hamburg": "https://static.cdnlogo.com/logos/s/42/srh-hochschule-hamburg.svg",
  "SRH Hochschule Dresden": "https://static.cdnlogo.com/logos/s/42/srh-hochschule-dresden.svg",
  "SRH Hochschule Nordrhein-Westfalen": "https://static.cdnlogo.com/logos/s/42/srh-hochschule-nrw.svg",
  "ISM International School of Management": "https://static.cdnlogo.com/logos/i/42/ism-international-school-of-management.svg",
  "Steinbeis University": "https://static.cdnlogo.com/logos/s/42/steinbeis-university.svg",
  "Eurasia Institute": "https://static.cdnlogo.com/logos/e/42/eurasia-institute.svg",
  "Arden University": "https://static.cdnlogo.com/logos/a/42/arden-university.svg",
  "EU Business School": "https://static.cdnlogo.com/logos/e/42/eu-business-school.svg",
  "GISMA Business School": "https://static.cdnlogo.com/logos/g/42/gisma-business-school.svg",
  "New European College": "https://static.cdnlogo.com/logos/n/42/new-european-college.svg",

  // Russia - Many Russian universities have limited CDNLogo coverage, using Wikipedia/Wikimedia where available
  "Lomonosov Moscow State University": "https://upload.wikimedia.org/wikipedia/commons/2/22/MSU_crest.svg",
  "Kazan Federal University (KFU)": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Kazan_Federal_University_logo.svg",
  "Crimean Federal University (CFU)": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Crimean_Federal_University_logo.svg",
  "Far Eastern Federal University (FEFU)": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Far_Eastern_Federal_University_logo.svg",
  "People's Friendship University (RUDN)": "https://upload.wikimedia.org/wikipedia/commons/1/1c/RUDN_University_logo.svg",
  "Pirogov Russian National Research Medical University": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Sechenov_University_logo.svg",
  "First Moscow State Medical University": "https://upload.wikimedia.org/wikipedia/commons/f/f1/First_Moscow_State_Medical_University_logo.svg",
  "Novosibirsk State University": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Novosibirsk_State_University_coat_of_arms.svg",

  // Georgia
  "Tbilisi State Medical University (TSMU)": "https://static.cdnlogo.com/logos/t/42/tbilisi-state-medical-university.svg",
  "Ivane Javakhishvili Tbilisi State University": "https://static.cdnlogo.com/logos/t/42/tbilisi-state-university.svg",
  "Batumi Shota Rustaveli State University": "https://static.cdnlogo.com/logos/b/42/batumi-state-university.svg",
  "David Tvildiani Medical University (DTMU)": "https://static.cdnlogo.com/logos/d/42/david-tvildiani-medical-university.svg",
  "New Vision University": "https://static.cdnlogo.com/logos/n/42/new-vision-university.svg",
  "University of Georgia (UG)": "https://static.cdnlogo.com/logos/u/42/university-of-georgia.svg",

  // Nepal
  "Kathmandu University (KUSMS)": "https://static.cdnlogo.com/logos/k/42/kathmandu-university.svg",
  "Kathmandu Medical College (KU)": "https://static.cdnlogo.com/logos/k/42/kathmandu-medical-college.svg",
  "Manipal College of Medical Science (KU)": "https://static.cdnlogo.com/logos/m/42/manipal-college-of-medical-science.svg",
  "Birat Medical College (KU), Biratnagar": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Birat_Medical_College_Logo.png",
  "Chitwan Medical College (TU), Bharatpur": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/CMC_Logo.png/220px-CMC_Logo.png",
  "Nepal Medical College (KU)": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Nepal_Medical_College_Logo.png/220px-Nepal_Medical_College_Logo.png",
  "Nobel Medical College (KU), Biratnagar": "https://www.nobel.edu.np/images/logo.png",
  "Devdaha Medical College (KU), Butwal": "https://dmc.edu.np/wp-content/uploads/2023/06/dmc-logo.png",

  // Kyrgyzstan
  "Kyrgyz State Medical Academy": "https://upload.wikimedia.org/wikipedia/commons/5/55/KGMA_logo.png",
  "IHSM Central Campus": "https://ihsm.edu.kg/assets/img/logo.png",
  "International Medical University": "https://imu.edu.kg/images/logo.png",
  "Osh State University": "https://oshsu.kg/images/logo.png",
  "Kyrgyz-Russian Slavic University": "https://krsmu.edu.kg/images/logo.png",

  // Georgia
  "Tbilisi State Medical University (TSMU)": "https://static.cdnlogo.com/logos/t/42/tbilisi-state-medical-university.svg",
  "Ivane Javakhishvili Tbilisi State University": "https://static.cdnlogo.com/logos/t/42/tbilisi-state-university.svg",
  "Batumi Shota Rustaveli State University": "https://static.cdnlogo.com/logos/b/42/batumi-state-university.svg",
  "David Tvildiani Medical University (DTMU)": "https://static.cdnlogo.com/logos/d/42/david-tvildiani-medical-university.svg",
  "New Vision University": "https://static.cdnlogo.com/logos/n/42/new-vision-university.svg",
  "University of Georgia (UG)": "https://static.cdnlogo.com/logos/u/42/university-of-georgia.svg",
  "Akaki Tsereteli State University": "https://atsu.edu.ge/images/logo.png",
  "Alte University School of Medicine": "https://alte.edu.ge/wp-content/uploads/2023/08/logo.png",
  "Avicenna - Batumi Medical University": "https://avicenna.edu.ge/images/logo.png",
  "BAU International University": "https://bau.edu.ge/images/logo.png",
  "Caucasus International University (CIU)": "https://ciu.edu.ge/images/logo.png",
  "Petre Shotadze Tbilisi Medical Academy": "https://psma.edu.ge/images/logo.png",
  "Ilia State University": "https://iliauni.edu.ge/images/logo.png",

  // Russia
  "Altai State Medical University": "https://asmu.ru/wp-content/uploads/2021/04/logo.png",
  "Bashkir State Medical University": "https://bashgmu.ru/wp-content/uploads/2020/01/logo.png",
  "Kazan State Medical University": "https://kazgmu.ru/wp-content/uploads/2020/01/logo.png",
  "Krasnoyarsk State Medical University": "https://krasgmu.ru/wp-content/uploads/2021/04/logo.png",
  "Kuban State Medical University": "https://ksma.ru/wp-content/uploads/2020/01/logo.png",
  "Samara State Medical University": "https://ssmu.ru/wp-content/uploads/2020/01/logo.png",
  "Siberian State Medical University": "https://sibgmu.ru/wp-content/uploads/2020/01/logo.png",
  "Volgograd State Medical University": "https://volgmed.ru/wp-content/uploads/2020/01/logo.png",
  "Voronezh State Medical University": "https://vgmu.ru/wp-content/uploads/2020/01/logo.png",
  "Rostov State Medical University": "https://rostgmu.ru/wp-content/uploads/2020/01/logo.png",

  // Kazakhstan
  "Al-Farabi Kazakh National University": "https://static.cdnlogo.com/logos/a/42/al-farabi-kazakh-national-university.svg",
  "Asfendiyarov Kazakh National University": "https://static.cdnlogo.com/logos/a/42/kazakh-national-medical-university.svg",
  "Astana Medical University": "https://amu.edu.kz/images/logo.png",
  "Semey Medical University": "https://semeymedicaluniversity.kz/images/logo.png",

  // Uzbekistan
  "Tashkent Medical Academy": "https://tma.uz/images/logo.png",
  "Samarkand State Medical University": "https://samarkand.uz/images/logo.png",
  "Andijan State Medical Institute": "https://andijon.uz/images/logo.png",

  // Vietnam
  "Hanoi Medical University (HMU)": "https://hmu.edu.vn/images/logo.png",
  "University of Medicine and Pharmacy at HCMC": "https://ump.edu.vn/images/logo.png",
  "Hue University of Medicine and Pharmacy": "https://hueuniversity.edu.vn/images/logo.png",

  // Europe
  "Domus Academy - Milan, Italy": "https://static.cdnlogo.com/logos/d/42/domus-academy.svg",
  "Istituto Europeo di Design - Rome, Italy": "https://static.cdnlogo.com/logos/i/42/istituto-europeo-di-design.svg",
  "Business and Hotel Management School - Lucerne, Switzerland": "https://static.cdnlogo.com/logos/b/42/bhms.svg",
};

// Function to get logo URL for a university
export const getUniversityLogo = (universityName, website) => {
  if (!universityName && !website) {
    return getFallbackLogo(website, universityName);
  }

  // First priority: Use website favicon (most reliable)
  if (website) {
    try {
      const url = new URL(website);
      const domain = url.hostname.replace(/^www\./, '');
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {}
  }

  // Second priority: Check direct mapping
  if (universityName) {
    if (universityLogos[universityName]) {
      return universityLogos[universityName];
    }

    // Clean and check
    const cleanName = universityName
      .replace(/\s*\([^)]*\)\s*/g, ' ')
      .replace(/,\s*[^,]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (universityLogos[cleanName]) {
      return universityLogos[cleanName];
    }

    // Try strict matching - require unique word match
    const keys = Object.keys(universityLogos);
    const nameLower = cleanName.toLowerCase();

    for (const key of keys) {
      const keyLower = key.toLowerCase();

      // Skip generic "university" matching
      if (keyLower.includes('university') && nameLower.includes('university')) {
        continue; // Skip - too generic
      }

      // Check for unique word matches (city, specific name)
      const keyUniqueWords = keyLower
        .replace(/university|college|school|of|state|medical/gi, '')
        .split(' ')
        .filter(w => w.length > 2);

      const nameUniqueWords = nameLower
        .replace(/university|college|school|of|state|medical/gi, '')
        .split(' ')
        .filter(w => w.length > 2);

      const hasMatch = keyUniqueWords.some(kw =>
        nameUniqueWords.some(nw => nw.includes(kw) || kw.includes(nw))
      );

      if (hasMatch && keyUniqueWords.length > 0) {
        return universityLogos[key];
      }
    }
  }

  // Fallback to UI Avatars (generated initials)
  return getFallbackLogo(website, universityName);
};

// Globe icon for universities without favicons
const GLOBE_ICON = "https://cdn.jsdelivr.net/npm/lucide-static@0.321.0/icons/globe.svg";

function getFallbackLogo(website, universityName) {
  // Try using the website favicon
  if (website) {
    try {
      const url = new URL(website);
      const domain = url.hostname.replace(/^www\./, '');
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {}
  }

  // Use globe icon when no website or favicon available
  return GLOBE_ICON;
}

export default universityLogos;