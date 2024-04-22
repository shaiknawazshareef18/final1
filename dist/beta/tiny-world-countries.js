(function(){
    // This dataset is licensed under the ODbL license; attribute tinyworldmap and OpenStreetMap
    let places = {"countries":[[0.380987,0.490324,"Spain",0],[0.396098,0.791666,"China",0],[0.5069,0.827473,"Indonesia",0],[0.528861,0.352222,"Brazil",0],[0.26229,0.771515,"Russia",0],[0.284376,0.200023,"Canada",0],[0.260344,0.449706,"Iceland",0],[0.146465,0.381076,"Greenland",0],[0.379362,0.220984,"United States",1],[0.473208,0.522222,"Nigeria",1],[0.432331,0.216645,"Mexico",1],[0.455178,0.799903,"Vietnam",1],[0.411512,0.69791,"Pakistan",2],[0.317734,0.490898,"United Kingdom",1],[0.583651,0.569421,"South Africa",1],[0.60389,0.319535,"Argentina",1],[0.571073,0.874319,"Australia",1],[0.508286,0.566173,"Congo",2],[0.436276,0.718522,"India",2],[0.390705,0.886776,"Japan",2],[0.424377,0.581299,"Egypt",2],[0.382323,0.597014,"Turkey",2],[0.471483,0.607367,"Ethiopia",2],[0.353336,0.505245,"France",2],[0.488602,0.297476,"Colombia",2],[0.341349,0.586866,"Ukraine",2],[0.418928,0.508333,"Algeria",2],[0.373732,0.677647,"Uzbekistan",2],[0.519129,0.291539,"Peru",2],[0.478951,0.724205,"Sri Lanka",2],[0.347193,0.685495,"Kazakhstan",2],[0.434283,0.275464,"Cuba",2],[0.292197,0.540336,"Sweden",2],[0.566634,0.338418,"Paraguay",2],[0.46129,0.253016,"El Salvador",2],[0.352438,0.788472,"Mongolia",2],[0.440315,0.658344,"Oman",2],[0.459357,0.459853,"Senegal",3],[0.382196,0.561077,"Greece",3],[0.479461,0.917826,"Micronesia",2],[0.405096,0.320121,"Bermuda",2],[0.464286,0.84092,"Philippines",3],[0.334053,0.529022,"Germany",3],[0.403965,0.651568,"Iran",3],[0.368819,0.535206,"Italy",3],[0.518164,0.599411,"Tanzania",3],[0.459043,0.581922,"Sudan",3],[0.495994,0.606754,"Kenya",3],[0.417736,0.733333,"Nepal",3],[0.402483,0.622708,"Iraq",3],[0.487294,0.784071,"Malaysia",3],[0.453962,0.633032,"Yemen",3],[0.37722,0.85302,"North Korea",3],[0.431373,0.836061,"Taiwan",3],[0.553552,0.629005,"Madagascar",3],[0.355821,0.568572,"Romania",3],[0.487173,0.536538,"Cameroon",3],[0.477734,0.484533,"Ivory Coast",3],[0.449928,0.5259,"Niger",3],[0.540769,0.576553,"Zambia",3],[0.453896,0.493639,"Mali",3],[0.503722,0.279537,"Ecuador",3],[0.548096,0.319469,"Bolivia",3],[0.456082,0.552821,"Chad",3],[0.445816,0.299008,"Haiti",3],[0.32378,0.576936,"Belarus",3],[0.377148,0.632742,"Azerbaijan",3],[0.409959,0.596832,"Israel",3],[0.515808,0.900691,"Papua New Guinea",3],[0.422609,0.550344,"Libya",3],[0.271403,0.572003,"Finland",3],[0.476135,0.274637,"Panama",3],[0.566383,0.54812,"Namibia",3],[0.307171,0.56876,"Latvia",3],[0.5025,0.532472,"Gabon",3],[0.469971,0.330322,"Trinidad and Tobago",3],[0.424684,0.640374,"Bahrain",3],[0.396158,0.59207,"Cyprus",3],[0.486535,0.337106,"Guyana",3],[0.534161,0.623009,"Comoros",3],[0.487728,0.818237,"Brunei",3],[0.546554,0.966964,"Vanuatu",3],[0.538622,0.021889,"Sāmoa",3],[0.499042,0.9824,"Kiribati",3],[0.512952,0.654039,"Seychelles",3],[0.456665,0.329541,"Dominica",3],[0.475563,0.969753,"Marshall Islands",3],[0.27867,0.480466,"Faroe Islands",3],[0.429841,0.750815,"Bangladesh",4],[0.458145,0.780091,"Thailand",4],[0.390485,0.854711,"South Korea",4],[0.329338,0.553151,"Poland",4],[0.49574,0.589491,"Uganda",4],[0.408791,0.479622,"Morocco",4],[0.400245,0.683996,"Afghanistan",4],[0.4777,0.316359,"Venezuela",4],[0.426323,0.617647,"Saudi Arabia",4],[0.554661,0.596985,"Mozambique",4],[0.397315,0.608471,"Syria",4],[0.466206,0.495311,"Burkina Faso",4],[0.593126,0.301892,"Chile",4],[0.537191,0.594251,"Malawi",4],[0.464876,0.791151,"Cambodia",4],[0.533232,0.548803,"Angola",4],[0.505458,0.583512,"Rwanda",4],[0.399991,0.526111,"Tunisia",4],[0.47004,0.470255,"Guinea",4],[0.476673,0.636343,"Somalia",4],[0.473407,0.506273,"Benin",4],[0.349293,0.539235,"Austria",4],[0.47807,0.582408,"South Sudan",4],[0.368936,0.570794,"Bulgaria",4],[0.383505,0.69671,"Tajikistan",4],[0.44323,0.787162,"Laos",4],[0.373046,0.707567,"Kyrgyzstan",4],[0.313024,0.528704,"Denmark",4],[0.28388,0.52441,"Norway",4],[0.455111,0.605555,"Eritrea",4],[0.38083,0.664979,"Turkmenistan",4],[0.49623,0.788387,"Singapore",4],[0.326373,0.477835,"Ireland",4],[0.431293,0.649999,"United Arab Emirates",4],[0.626922,0.980096,"New Zealand",4],[0.358283,0.543493,"Croatia",4],[0.314595,0.565972,"Lithuania",4],[0.414897,0.631939,"Kuwait",4],[0.596788,0.344388,"Uruguay",4],[0.442529,0.474334,"Mauritania",4],[0.448616,0.285015,"Jamaica",4],[0.566185,0.568314,"Botswana",4],[0.576579,0.58722,"Eswatini",4],[0.297204,0.570366,"Estonia",4],[0.557536,0.659918,"Mauritius",4],[0.524385,0.850176,"East Timor",4],[0.495518,0.529214,"Equatorial Guinea",4],[0.420342,0.751422,"Bhutan",4],[0.527174,0.952302,"Solomon Islands",4],[0.454966,0.43331,"Cape Verde",4],[0.393068,0.540132,"Malta",4],[0.489658,0.703401,"Maldives",4],[0.451719,0.25365,"Belize",4],[0.463147,0.334653,"Barbados",4],[0.366879,0.614528,"Abkhazia",4],[0.556471,0.013326,"Tonga",4],[0.342482,0.494067,"Jersey",4],[0.369187,0.50437,"Andorra",4],[0.475908,0.467111,"Sierra Leone",5],[0.374926,0.555555,"Albania",5],[0.363027,0.557087,"Serbia",5],[0.428934,0.283333,"The Bahamas",5],[0.352545,0.522867,"Switzerland",5],[0.466947,0.619015,"Djibouti",5],[0.364651,0.520632,"Monaco",5],[0.451561,0.766667,"Myanmar",5],[0.350985,0.554184,"Hungary",5],[0.484001,0.473984,"Liberia",5],[0.372407,0.622302,"Georgia",5],[0.480416,0.55555,"Central African Republic",5],[0.464689,0.263073,"Nicaragua",5],[0.551206,0.997256,"Fiji",5],[0.477621,0.497,"Ghana",5],[0.329213,0.515651,"Netherlands",5],[0.552175,0.58263,"Zimbabwe",5],[0.336359,0.512963,"Belgium",5],[0.340249,0.542606,"Czechia",5],[0.509524,0.583146,"Burundi",5],[0.379801,0.477402,"Portugal",5],[0.457109,0.260901,"Honduras",5],[0.344515,0.554036,"Slovakia",5],[0.399887,0.599565,"Lebanon",5],[0.471308,0.266461,"Costa Rica",5],[0.35055,0.579353,"Moldova",5],[0.502018,0.54345,"Congo",5],[0.369013,0.558061,"Kosovo",5],[0.466945,0.45768,"Guinea-Bissau",5],[0.339939,0.517027,"Luxembourg",5],[0.464995,0.305662,"Aruba",5],[0.45142,0.327901,"Antigua and Barbuda",5],[0.456163,0.24904,"Guatemala",5],[0.472848,0.627805,"Somaliland",5],[0.444633,0.276204,"Cayman Islands",5],[0.438162,0.301242,"Turks and Caicos Islands",5],[0.497302,0.519507,"São Tomé and Príncipe",6],[0.427217,0.642304,"Qatar",6],[0.445941,0.304714,"Dominican Republic",7],[0.372644,0.560325,"North Macedonia",6],[0.586157,0.578708,"Lesotho",6],[0.475515,0.502833,"Togo",6],[0.408811,0.602616,"Jordan",6],[0.362438,0.548878,"Bosnia and Herzegovina",6],[0.375772,0.624094,"Armenia",6],[0.355282,0.541154,"Slovenia",6],[0.462234,0.456972,"The Gambia",6],[0.488486,0.34423,"Suriname",6],[0.461219,0.330625,"Saint Lucia",6],[0.466034,0.328638,"Grenada",6],[0.320164,0.487336,"Isle of Man",6],[0.369914,0.622494,"South Ossetia",6],[0.367499,0.554217,"Montenegro",7],[0.463847,0.329787,"Saint Vincent and the Grenadines",7],[0.34148,0.492827,"Guernsey",7],[0.466086,0.308525,"Curacao",7],[0.395335,0.593403,"Northern Cyprus",8]],"cities":[],"paths":[],"lakes":[["M 506.17 286.48 506.35 285.57 506.86 285.51 506.97 286.52 506.99 285.69 508.29 285.83 508.3 284.98 508.77 284.66 508.99 284.95 508.95 284.23 509.59 284.4 509.33 283.52 510.16 283.98 509.83 283.53 510.52 283.89 510.4 283.42 510.73 283.97 510.52 283.39 510.95 282.76 512.62 281.65 514.29 281.43 514.51 281.93 516.2 282.21 516.79 281.55 517.26 282.48 517.86 282.21 518.06 283.32 517.39 284.21 517.75 284.84 516.92 286.17 514.2 286.82 513.32 287.98 513.93 289.07 514.55 289.28 513.57 289.43 512.93 288.92 511.81 288.89 511.66 289.7 512.98 290.29 513.96 292.12 513.93 293.5 514.79 293.4 515.34 294.47 517.22 294.82 517.12 295.25 516.78 294.77 517.07 295.32 516.5 296.71 516.79 298.35 517.66 299.97 517.25 302.83 517.67 303.27 517.61 302.85 519.18 302.8 520.31 303.46 519.12 303.03 518.75 303.69 519.41 304.17 518.29 304.18 518.44 303.73 517.99 304.51 518.18 305.12 518.15 304.66 519 304.7 519.23 305.41 519.37 305.08 519.37 305.52 520.04 305.85 519.59 308.84 520 311.6 514.8 312.49 512.67 311.66 511.55 310.32 509.93 310.09 508.9 309.34 508.47 306.09 508.94 305.14 508.59 305.19 508.91 304.94 509.34 305.4 509.46 304.75 509.86 304.95 509.5 304.32 509.96 302.34 510.83 301.77 511.93 302.21 511.93 301.82 511.26 301.12 510.1 301 509.02 298.81 505.49 293.95 506.11 291.16 505.47 291.45 504.96 290.21 503.87 289.34 504.24 289.37 504.08 288.95 504.6 288.84 504.56 288.41 504.84 288.67 505.85 285.72 506.17 286.48 Z M 520 311.6 520.05 311.93 518.63 311.88 520 311.6 Z",[0.6298374938964844,0.35178749084472655,0.6503874969482422,0.39061248779296875]],["M 636.84 261.34 636.76 260.82 637.96 259.94 638.44 259.19 639.11 258.67 640.09 257.39 640.84 255.88 642.34 252.93 642.65 250.95 643.35 250.18 644.29 250.25 643.78 253.12 643.69 254.12 643.29 255.57 642.93 257.54 642.71 258.3 642.22 257.69 641.33 258.97 641.78 259.19 641.69 259.86 641.02 260.08 640.4 261.34 639.56 262.14 638.49 262.73 636.98 263.09 635.78 264.11 634.98 265.12 633.87 265.98 632.93 266.19 631.78 266.05 630.58 265.69 630.27 265.19 630.8 264.76 632 264.76 633.47 264.25 634.4 263.24 635.51 262.36 636.13 262 636.84 261.34 Z",[0.7878375244140625,0.31272499084472655,0.8053624725341797,0.3327375030517578]],["M 180.1 257.13 182.32 255.59 182.66 256.64 183.01 259.02 185.79 266.41 186.14 268.91 185.05 269.76 184.62 268.69 183.92 266.05 181.78 263.58 179.47 259.8 180.1 257.13 Z",[0.22433750152587892,0.31948749542236327,0.23267499923706056,0.3372000122070313]],["M 144.44 223.28 142.65 220.56 142.09 219.41 142.57 219.55 145.66 221.11 148.1 222.94 151.6 221.03 153.24 218.73 155.11 217.94 156.89 218.93 157.58 219.24 157.52 219.83 155.33 220.69 152.72 221.49 149.71 225.22 147.47 227.44 143.69 228.37 141.24 228.45 137.64 226.37 137.01 226.14 136.92 225.4 137.38 225.23 140.44 226.3 142.94 224.6 144.44 223.28 Z",[0.17114999771118164,0.2724250030517578,0.19697500228881837,0.2855624961853027]],["M 224.32 293.19 223.64 293.34 222.75 293.05 223.42 292.01 224.1 291.64 225.67 291.19 227.54 290.77 228.53 291.36 229.15 290.68 229.85 290.25 230.33 290.48 230.58 290.96 230.71 292.16 229.04 293.17 227.22 292.91 225.48 292.8 224.32 293.19 Z",[0.2784375,0.3628125,0.28838750839233396,0.36667499542236326]],["M 215.29 296.73 216.51 296.92 218.16 295.97 219.13 295.13 219.79 294.99 221.01 295.29 221.6 294.82 222.69 294.44 224.62 294.07 224.67 294.36 222.75 296.17 221.07 297.03 219.93 297.44 218.61 298.26 217.01 298.65 215.9 298.5 214.53 297.89 215.29 296.73 Z",[0.2681624984741211,0.36758750915527344,0.28083749771118166,0.3733124923706055]],["M 200.89 278.06 201.79 276.74 203.05 276.21 203.55 275.39 204.05 274.95 206.11 275.63 207.64 275.71 208.18 276.16 208.92 278.06 211.41 278.56 211.02 279.49 211.9 280.46 211.52 281.7 212.45 282.11 211.99 283.2 211.31 283.07 210.84 282.16 208.66 282.44 206.69 283.16 205.12 281.93 203.86 281.52 204.58 279.79 202.62 280.88 200.83 281.93 199.12 282.76 197.76 281.64 195.53 282.32 195.54 281.84 197.04 280.47 198.62 279.15 200.89 278.06 Z",[0.24441249847412108,0.34368751525878904,0.26556249618530275,0.35400001525878905]],["M 475.22 399.72 475.86 400.71 475.72 402.36 474.62 403.35 473.89 404.35 474.77 405.11 473.5 405.66 473.23 405.4 471.94 405.53 470.95 406.03 470.33 405.18 470.75 403.62 470.81 402.28 470.7 401.42 471.72 400.12 473.12 399.81 474.07 399.28 475.22 399.72 Z",[0.5879124832153321,0.4990999984741211,0.5948249816894531,0.5075374984741211]],["M 466.3 226.77 468.56 224.21 472.28 227.27 473.21 229.44 472.92 230.16 472.44 229.93 472.41 231.39 470.44 231.27 470.02 232.67 469.13 232.64 469.13 231.67 467.85 229.49 467.78 228.52 466.3 226.77 Z",[0.5828749847412109,0.28026250839233396,0.5915124893188477,0.2908374977111816]],["M 575.54 282.2 576.1 282.53 575.31 283.42 574.32 283.66 571.57 283.34 568.03 282.98 567.7 282.45 567.57 283.1 566.47 283.31 566.16 284.26 565.06 284.6 564.67 287.81 563.19 285.85 563.2 285.23 563.86 284.57 563.73 284.02 564.49 283.95 564.65 283.24 566.53 281.98 569.34 282.1 571.51 282.54 573.02 282.52 573.99 283.1 574.22 282.49 575.54 282.2 Z",[0.7039875030517578,0.3524750137329102,0.7201249694824219,0.3597624969482422]],["M 468.46 419.13 467.7 418.95 467.93 418.09 467.28 417.5 466.99 416.26 465.64 415.04 464.87 413.44 465.27 412.5 464.67 411.25 465.07 407.68 465.89 409.83 465.78 410.89 466.2 411.22 466.13 412.17 466.56 413.05 466.05 413.9 467.84 415.42 468.01 416.81 469.31 419.48 468.94 419.6 468.46 419.13 Z",[0.580837516784668,0.5095999908447265,0.5866374969482422,0.5245000076293945]],["M 478.36 432.06 478.3 432.35 477.51 431.45 477.13 432.03 476.77 431.53 476.78 430.67 476.27 430.01 476.29 429.01 475.63 427.34 476.27 426.08 476.13 423.35 475.35 421.89 475.55 421.2 476.72 422.4 476.91 424.78 477.64 425.65 477.1 427.82 477.48 430.74 477.9 430.84 478.36 432.06 Z",[0.5941875076293945,0.5265000152587891,0.5979499816894531,0.5404375076293946]],["M 431.07 235.81 431.08 236.33 430.93 237.12 429.52 238.38 428.51 238.8 427.69 238.81 427.86 237.66 427.83 237.21 428.22 236.9 428.95 236.73 429.32 236.14 430.2 235.24 431.07 235.81 Z",[0.5346125030517578,0.2940500068664551,0.5388499832153321,0.29851249694824217]],["M 220.65 338.17 220.15 338.09 220.18 337.48 220.68 337.56 220.65 338.17 Z",[0.27518749237060547,0.42185001373291015,0.27584999084472656,0.422712516784668]],["M 211.43 375.07 210.47 375.01 209.35 374.25 209.14 373.36 209.85 373.27 211.03 374.22 211.43 375.07 Z",[0.26142499923706053,0.46658748626708985,0.2642874908447266,0.46883750915527345]],["M 482.54 373.48 482.26 373.06 482.76 372.6 483.37 372.77 483.29 373.53 482.97 373.79 482.54 373.48 Z",[0.6028250122070312,0.46575000762939456,0.6042124938964843,0.4672375106811523]],["M 245.76 436.32 245.05 435.86 244.48 435.42 244.72 435.26 244.74 434.98 244.7 434.54 245.34 434.67 246.7 435.76 246.76 435.83 247.23 436.85 246.88 437.2 246.66 437.27 246.46 437.1 246.26 436.96 246.11 436.55 245.76 436.32 Z",[0.30559999465942383,0.5431750106811524,0.3090374946594238,0.5465874862670899]],["M 179.1 260.14 178.78 260.16 178.21 260.07 176.82 259.55 176.43 258.63 177.03 257.83 176.83 257.21 176.88 257.07 177.05 256.51 177.25 255.99 177.79 256.05 177.67 256.49 177.37 257.13 178.06 257.14 177.98 257.54 177.65 258.96 178.52 259.51 179.13 259.61 179.1 260.14 Z",[0.22053749084472657,0.31998750686645505,0.22391250610351562,0.3252000045776367]],["M 479.37 221.82 480.12 224.49 480.87 226.54 480.24 227.74 478.56 228.04 477.48 227.27 478.24 227.28 479.06 227.41 478.13 225.99 477.46 225.25 476.64 223.78 476.14 222.11 476.2 221.73 477.03 222.06 476.95 220.99 477.41 221.74 477.96 222.48 478.26 222.23 478.81 221.93 478.09 220.82 476.92 219.49 477.77 219.56 478.3 219.92 479.37 221.82 Z",[0.5951750183105469,0.2743625068664551,0.6010874938964844,0.28504999160766603]],["M 150.7 298.93 150.8 299.52 150.73 300.38 149.6 299.56 149.54 299.45 149.16 298.08 149.8 298.64 150.21 298.94 150.62 298.67 150.7 298.93 Z",[0.18645000457763672,0.37259998321533205,0.18850000381469725,0.37547500610351564]],["M 138.31 201.61 137.84 203.62 137.54 204.1 133.96 204.27 133.9 204.71 134.08 205.39 134 206.24 130.32 208.82 130.36 208.22 131.23 206.19 130.98 205.83 127.63 208.03 126.15 207.24 126.27 206.5 128.16 203.96 128.1 203.37 122.33 202.56 122.45 202 134.47 197.43 134.76 197.97 132.94 200.27 138.65 199.74 138.64 200.52 138.31 201.61 Z",[0.15291250228881836,0.24678749084472656,0.17331249237060548,0.26102500915527344]],["M 156.33 236.54 153.14 238.58 152.89 238.05 152.98 237.73 157.56 234.3 163.23 235.31 163.23 235.43 156.33 236.54 Z",[0.19111249923706056,0.2928750038146973,0.20403749465942383,0.2982250022888184]],["M 173.57 240.89 174.35 241.5 173.4 243.66 173.48 244.14 170.66 247.74 170.48 247.48 170.78 246.29 170.94 246.26 171.08 246.85 172.05 245.34 171.53 243.91 171.53 243.18 173.05 240.87 173.57 240.89 Z",[0.21309999465942384,0.30108749389648437,0.21793750762939454,0.3096750068664551]],["M 211.27 285.28 211.66 284.85 211.73 284.87 213.69 284.58 212.59 283.3 213 282.82 213.44 283.54 215.11 283.94 216.8 283.97 218.6 284.3 220.58 284.92 221.31 285.92 222.75 288.33 222.03 289.36 220.23 288.93 219.11 286.99 219.39 288.97 218.33 290.7 218.44 292.16 218.26 293.01 216.82 294.02 216.71 292.77 216.31 290.99 215.49 290.68 214.11 292.04 213.67 292.01 213.56 291.24 214.78 290 214.98 288.58 214.8 287.15 213.16 285.92 211.27 285.28 Z",[0.2640875053405762,0.35352500915527346,0.2784375,0.36752498626708985]],["M 211.66 284.85 211.27 285.28 210.96 286.49 210.47 286.81 210.07 288.36 209.87 287.31 208.98 288.06 208.42 289.11 207.84 290.64 207.73 291.94 208.47 293.83 208.41 295.83 207.51 297.29 207.06 297.7 206.46 298.03 205.7 298.05 205.5 297.84 204.9 296.27 204.88 295.49 204.94 294.75 204.66 293.26 205.08 291.52 205.59 289.37 206.74 286.95 206.4 286.96 204.77 288.99 204.47 288.62 205.34 287.49 206.67 285.44 208.18 285.15 209.91 284.51 211.66 284.85 Z",[0.2555875015258789,0.35563751220703127,0.2645750045776367,0.37256248474121095]]]}

    function drawPlaces(tile, coords, places, opts) {
    var ctx = tile.getContext('2d', {alpha: false});

    if (!places.path2ds)
        places.path2ds = places.paths.map(p => [new Path2D(p[0]), p[1]])

    if (!places.lakepath2ds)
        places.lakepath2ds = places.lakes.map(p => [new Path2D(p[0]), p[1]])

    let vwidth = 800, vheight = 800

    var size = {x: tile.width, y: tile.height};
    let margin1 = 2/size.x, margin2 = 35/size.x, margin3 = 50/size.x, N = Math.pow(2, coords.z);

    let lbound = coords.x / N, rbound = lbound + 1/N, tbound = coords.y / N, bbound = tbound + 1/N

    ctx.fillStyle = opts.backgroundColor || (places.path2ds.length ? "#aad3df" : 'white')
    ctx.fillRect(0, 0, size.x, size.y)

    ctx.translate(-size.x*coords.x, -size.x*coords.y)
    ctx.scale(size.x*N/vwidth,size.y*N/vheight)
    ctx.strokeStyle = opts.borderColor || '#b4a6ae'
    ctx.fillStyle = opts.borderFillColor || '#fdf9f1'
    ctx.lineWidth = (opts.borderWidth||4)/N
    ctx.lineJoin = 'round'

    let pathsToDraw = new Path2D()

    for (let [p, bounds] of places.path2ds) { // 60-100 fails
        if (!(bounds[0] > rbound || bounds[2] < lbound || bounds[1] > bbound || bounds[3] < tbound)) {
            pathsToDraw.addPath(p)
        }
    }

    if (opts.borderFillColor != 'transparent')
        ctx.fill(pathsToDraw)
    if (opts.borderStrokeColor != 'transparent')
        ctx.stroke(pathsToDraw)

    ctx.fillStyle = opts.backgroundColor || '#aad3df'

    let lakePathsToDraw = new Path2D()

    for (let [p, bounds] of places.lakepath2ds) { // 60-100 fails
        if (!(bounds[0] > rbound || bounds[2] < lbound || bounds[1] > bbound || bounds[3] < tbound)) {
            lakePathsToDraw.addPath(p)
        }
    }

    if (opts.backgroundColor != 'transparent')
        ctx.fill(lakePathsToDraw)
    if (opts.borderStrokeColor != 'transparent')
        ctx.stroke(lakePathsToDraw)

    ctx.resetTransform()

    let dotColor = opts.dotColor || (places.path2ds.length ? 'transparent' : 'red')
    ctx.fillStyle = dotColor

    if (dotColor != 'transparent')
        for (let [yc, xc, name, zoom] of places.cities) {
            let y = yc * N - coords.y, x = xc * N - coords.x
            if (zoom > coords.z && y > -margin1 && y < 1+margin1 && x > -margin1 && x < 1+margin1) {
                let xS = size.x * x, yS = size.y * y
                ctx.fillRect(xS-1,yS-1,2,2)
            }
        }

    ctx.strokeStyle = opts.textStrokeColor || 'rgba(255,255,255,.8)'
    ctx.lineWidth = opts.textStrokeWidth || 3
    ctx.textAlign = 'center'
    ctx.fillStyle = opts.textFillColor || "black";
    ctx.font = opts.cityFont || '12px Arial, Helvetica, Ubuntu, sans-serif'

    for (let [yc, xc, name, zoom] of places.cities) {
        if (zoom > coords.z) continue

        let y = yc * N - coords.y, x = xc * N - coords.x
        if (y > -margin2 && y < 1+margin2 && x > -margin2 && x < 1+margin2) {

            let xS = size.x * x, yS = size.y * y
            ctx.strokeText(name, xS, yS, 70)
            ctx.fillText(name, xS, yS, 70)
        }
    }

    ctx.font = opts.countryFont || 'bold 14px Arial, Helvetica, Ubuntu, sans-serif'

    for (let [yc, xc, name, zoom] of places.countries) {
        if (zoom > coords.z || coords.z > 8) continue

        let y = yc * N - coords.y, x = xc * N - coords.x
        if (y > -margin3 && y < 1+margin3 && x > -margin3 && x < 1+margin3) {
            let xS = size.x * x, yS = size.y * y
            ctx.strokeText(name, xS, yS, 100)
            ctx.fillText(name, xS, yS, 100)
        }
    }
    return tile;
}


    L.GridLayer.TinyWorld = L.GridLayer.extend({
        createTile: function(xyz){
            // create a <canvas> element for drawing
            let tile = L.DomUtil.create('canvas', 'leaflet-tile');

            var tileSize = this.getTileSize();
            tile.setAttribute('width', tileSize.x);
            tile.setAttribute('height', tileSize.y);

            return drawPlaces(tile, xyz, places, this.options)
        },
        getAttribution: function() {
            return '&copy; <a href="https://tinyworldmap.com">tinyworldmap</a>, <a href="https://openstreetmap.org">OpenStreetMap</a>'
        }
    });
})()
