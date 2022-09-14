const categories = [
    {
        name: "Jet Pumps",
        description: "Long lasting Pumps.",
        mainImage: 'all-pumps.webp',
        subCategories: [
            {
                name: "Jet Pump",
                images: [
                    'jet-pump-1.webp'
                ]
            },
        ],
        options: [
            "DAB JET 102 M (1.0HP) (102660040)",
            "DAB JET 132 M (1.36HP) (102660100)",
            "DAB JET 200 M (2.0HP) (102160142)",
            "DAB JET 300 M (3.0HP) (102160162)",
        ]
    },
    {
        name: "Centrifugal Pumps",
        description: "We have in stock wide range of Centrifugal Pumps from DAB and others",
        mainImage: 'jet-pumps.webp',
//         subCategories: [
//             {
//                 name: "Centrifugal Pump & Smart Press Automatic device",
//                 images: [
//                     'pump-3.webp'
//                 ]
//             },
//         ],
        options: [
            "DAB K12/200 M (1.0HP) (160168883)",
            "DAB K20/41 M (0.5HP) (102110004) ",
            "DAB K 30/70 M (2.5 HP) (1021100162)",
            "DAB K 36/100 M (1.0HP) (102110024)",
            "DAB K 36/200 T (3.0HP) (60146040) ",
            "DAB K 55/200T (5.5 HP) (60146064)",
            "DAB K 40/400T (7.5HP) (60146093) ",
            "DAB K 50/400T (10.0HP) (60146100)",
            "DAB K 35/1200T (15.0HP) (60167628)",
            "SPERONI CM 32 (1.0HP) ",
            "SPERONI CM 35 (1.5HP)",
            "SPERONI CM 45 (2.0HP)",
            "SPERONI CM 53 (3.0HP)",
            "SPERONI CM 55 (5.5HP)"
        ]
    },
    {
        name: "Water Pressure Sets ",
        description: "We have in stock wide range of Water Pressure from DAB, JAZZI and others",
        mainImage: 'pump-2.webp',
        subCategories: [
            {
                name: "Water Pressure set",
                images: [
                    'water-pressure.jpg'
                ]
            },
        ],
        options: [
            "DAB Aquajet 132 M-G (1.3HP) (60141883)",
            "DAB JET 82 PRESSURE VESSEL (0.8HP) (102662020)",
            "DAB JET INOX 82 + PRESSURE VESSEL (0.8HP) (102640020)",
            "DAB JET 200 M+ PRESSURE VESSEL (2.0HP) (102162182)",
            "DAB JET 300 M+ PRESSURE VESSEL (3.0HP) (102162192)",
            "DAB 2 JET 102 M+ PRESSURE VESSELS (1.0HP) (500121140)",
            "DAB 2 JET 132 M+ PRESSURE VESSELS (1.5HP) (500121160)",
            "DAB 2 JET 251 M+ PRESSURE VESSELS (2.5HP) (500121100)",
            "DAB 2K 55/100T PRESSURE VESSEL (3.0HP) (500124620)",
            "DAB 2K 66/100T+PRESSURE VESSEL (4.0HP) (60179958)",
            "DAB 2K 90/100T + PRESSURE VESSEL (5.5HP) (60179959)",
        ]
    },
    {
        name: "Borehole Pump Kits",
        description: "We have different heights of borehole pump kits.",
        mainImage: 'stand-poles.webp',
        subCategories: [
            {
                name: "Borehole Pump",
                images: [
                    'borehole-1.webp'
                ]
            },
            {
                name: "Borehole Pump",
                images: [
                    'borehole-2.webp'
                ]
            },
        ],
        options: [
            "CS 4A-12 M + CONTROL (0.5HP) (104100212)",
            "S4 4/9 (1.0HP) (60197297) + 15M CABLE + CONTROL",
            "S4 4/14 (1.5HP) (60197298) + 30M CABLE + CONTRO",
            "S4 4/19 (2.0HP) (60197299) + 40M CABLE + CONTRO",
            "S4 4/27 (3.0HP) (60197300) + 40M CABLE + CONTROL",
            "S4D-21T (3.0HP) (504103652)",
        ]
    },
    {
        name: "Submersible Pumps",
        description: "Strong submersible pumps",
        mainImage: 'submersible-pumps.webp',
        options: [
            "DAB NOVA 600 MA (0.75HP) (60152306)",
            "DAB DRENAG 1000 MA (1.36HP) (103041000) ",
            "DAB DRENAG 1400 MA (1.5HP) (103010040)",
            "DAB FEKA VS 750 MA (0.75HP) (103040040)",
            "DAB FEKA VS 1200 MA (1.60HP) (103045020)",
            "DAB FEKA VS 1000 (103040080)"
        ]
    },
    {
        name: "Control Panel and Switches",
        description: "Long lasting control panels and switches.",
        mainImage: 'control-switches.webp',
        subCategories: [
            {
                name: "Control and switch",
                images: [
                    'control-1.webp'
                ]
            },
        ],
        options: [
            "CONTROL E. BOX PLUS D (60163217)",
            "CONTROL ESIM 1HP (108000130) ",
            "CONTROL ES3M (108000140) ",
            "CONROL ESC 4T (UP TO 4 HP) (60149591)",
            "CONTROL 1HP (SINGLE PHASE) (108003270)",
            "CONTROL 2.0HP (SINGLE PHASE) (108003290)",
            "CONTROL 3.0HP (SINGLE PHASE) (108003300) ",
            "CONTROL ED 75T 7.5T (FEKA 3000/35000/3700) (108320630)",
            "MAGNETIC SWITCHES (2.0HP)",
            "MAGNETIC SWITCHES (3.0HP)",
        ]
    },
    {
        name: "Filter and Valves",
        description: "We offer various range of sizes of filters and valves.",
        mainImage: 'filter-valves.webp',
        subCategories: [
            {
                name: "Bobbin wound Filters and valves",
                images: [
                    'filter-1.webp'
                ]
            },
            {
                name: "Bobbin wound Filters and valves",
                images: [
                    'filter-2.webp'
                ]
            },
        ],
        options: [
            '18" JAZZI-(8000 1/hr) SAND 80KG (040218)',
            '21" AQUA-(10800 1/hr) SAND 90KG (WS550) 25" JAZZI/AQUA (15000 1/hr) SAND 170KG (040225/WS650)',
            '28" AQUA-(19500 l/hr) SAND 200KG (WS700B)',
            '30" JAZZI-(21000 l/hr) SAND 210KG (040230) 36" JAZZI/AQUA - (32000 l/hr) SAND 400KG (040236/WS900)',
            '44" JAZZI (42000 1/hr) SAND 600KG (040244) SILICA SAND X 25KG',
            'MULTICYCLONE PRE-FILTER',
        ]
    },
    {
        name: "PVC Fitting & Accesories",
        description: "We have PVC Fittings",
        mainImage: 'pipes.webp',
        options: [
            "BALL VALVES (07266) ",
            "BALL VALVES 1\" (07268)",
            "BALL VALVES 1% (07270)",
            "BALL VALVES 2\" (07271)",
            "90 BEND 1% (07141)",
            "90 BEND 2\" (07142)",
            "PVC TEE 1% (07171)",
            "PVC TEE 2 (07172) ",
            "REDUCER 2\"-1\" (07205) 1",
            "3 PS. UNION ADAPTOR 1% (07262)",
            "3 PS. UNION ADAPTOR 2\" (07263)",
            "3 PS. UNION ADAPTOR 3\" (07264)",
            "NON-RETURN VALVE 1%\" (09114)",
            "NON-RETURN VALVE 2\" (33015) ",
            "PVD FOOT VALVE 1\" (09102)",
            "PVC FOOT VALVE 1 1/2\" (09104) ",
            "PVC FOOT VALVE 2\" (09105)",
            "PVC FOOT VALVE 3\" (09106)",
            "ADAPTOR SOCKET 1½\" (07195) ",
            "ADAPTOR SOCKET 2\" (07196)",
            "JOINT SOCKET 1 1/2\" (07186) ",
            "JOINT SOCKET 2\" (07187)",
            "ADAPTOR BUSH 1 1/2\" (07250)",
            "ADAPTOR BUSH 2\" (07251)",
            "3 PS. UNION 1\" (07334) ",
            "3 PS. UNION 1 1/2\" (07336)",
            "3 PS. UNION 2\" (07337)",
            "UNION ADAPTOR 1\" (07812)",
            "PVC SIGHT GLASS 2\" (21083)"
        ]
    },
    {
        name: "Lights",
        description: "Various sizes of colorful bright lights for your pool.",
        mainImage: 'lights.webp',
        options: [
            "300W UNDERWATER LIGHT+ NICHE ASTRAL (07844) 300W UNDERWATER LIGHT+ NICHE JAZZI (70105)",
            "12V TRANSFORMER ASTRAL 300W (71436) 12V TRANSFORMER COVER ASTRAL (00387)",
            "12V TRANSFORMER JAZZI 300W (070504)",
            "ASTRAL MINI LED LIGHT (52124)",
            "126 LED FLAT LIGHT JAZZI (071005) JAZZI SPO100A UNDERWATER LIGHT FLAT",
            "JAZZI LIGHT 50W/12V/PAR36 (YC43625)",
            "REMOTE CONTROL + TRANSFORMER (070509)",
            "35W PAR 56 LED LIGHT (56003)",
            "LED PUSH BUTTON CONTROL (32458) RECIEVER CONTROL MODULE (27818)",
            "REMOTE CONTROL (41988)",
            "LIGHT NICHE (00349)",
            "300W BULB (K589BX) LED BULB (56001) ASTRAL",
            "LED BULB+ REMOTE JAZZI",
            "LED BULB WHITE KOKIDO (LT40CBX/ABX)",]
    },
    {
        name: "tiles and tile adhesives",
        description: "We have in stock mosaic tiles and non-slip surround tiles",
        mainImage: 'tiles-group.webp',
        subCategories: [
            {
                name: "Glass Mosaic Tiles",
                images: [
                    'pool-floor-tile.webp'
                ]
            },
            {
                name: "Coping and Border Tile",
                images: [
                    'pool-side-tile.webp'
                ]
            },
            {
                name: "Non-Slip Surround Tiles",
                images: [
                    'pool-wall-tile.webp'
                ]
            },
        ],
        options: [
            "LIGHT BLUE (BOXES) 4804 (48x48) (SHT/BOX.22) 2.06sqm/box",
            "DARK BLUE (BOXES) 48802 (48x48) (SHT/BOX.22) 2.06sqm/Box",
            "LARGE LIGHT BLUE (BOXES) 9704 (97x97) (SHT/BOX.22) 2.0sqm/Box",
            "LARGE DARK BLUE (BOXES) 9707 (97x97SHT/BOX.22) 2.0sqm/Box",
            "MIXED DARK (BOXES) Y48B02 (SHT/BOX.22) 2.06sqm/box",
            "MIXED LIGHT (BOXES) Y73805 (SHT/BOX.22) 2.06sqm/box ",
            "WAVY BOARDER (PCS) 234814 (PCS/BOX.44) PCS",
            "DIAMONDS (PCS) 234815 (PES/BOX.40) PCS",
            "ROMANTIC NON-SLIP SURROUND (SQ M) CREAM",
            "ROMANTIC NON-SLIP SURROUND (SQM) ASH",
            "ROMANTIC NON-SLIP SURROUND (SQM) LIGHT BROWN",
            "ROMANTIC NON-SLIP SURROUND (SQM) DARK BROWN",
            "ROMANTIC NON-SLIP SURROUND (SQM) BLACK",
            "ROMANTIC LIGHT BLUE (SQM)",
            "ROMANTIC DARK BLUE (SQ.M) ",
            "ROMANTIC COPING (PES) YCS",
            "ROMANTIC COPING (PES) YC4",
            "ROMANTIC COPING DARK BLUE (PES) YC3",
            "ROMANTIC COPING LIGHT BLUE (PES) YC3",
            "EXAGRES GRECIA ROMA BORDER (PES)",
            "EXAGRES COPING (PES)",
            "EXAGRES COPING CORNER (PES)",
            "EXAGRES GRATING EDGE (PES)",
        ]
    },
    {
        name: "Chemicals",
        description: "Pool chemicals in tablets , powders.",
        mainImage: 'chemicals.webp',
        options: [
            "CHLORINE GRANULES 10KG 90%",
            "CHLIORINE GRANULES 50KG 90%",
            "CHLORINE TABLETS 10KG 90%",
            "CHLORINE TABLETS 50KG 90%",
            "ALGICIDE 5L (11417)",
            "PH INCREASER 7KG",
            "PH INCREASER 50KG",
            "FLOCULANT 10KG",
            "FLOCULANT 50KG"
        ]
    },

    {
        name: "Accesories",
        description: "Pool maintenance equipments for cleaning, and keeping your pool fresh at al times..",
        mainImage: 'all-accesories.webp',
        subCategories: [
            {
                name: "Maintenance Equipment",
                images: [
                    'acessory-1.webp'
                ]
            },
            {
                name: "Maintenance Equipment",
                images: [
                    'accesory-2.png'
                ]
            },
            {
                name: "Maintenance Equipment",
                images: [
                    'accesory-3.webp'
                ]
            },
        ],
        options: [
            "CABLE JOINT KIT",
            "FLOAT SWITCH SM (159260030)",
            "FLOAT SWITCH 10M (159269940)",
            "GWS PRESSURE VESSEL FLOOR MOUNT 10BAR (60141869)",
            "GWS PRESSURE VESSEL TOP MOUNT 10 BAR (60141867)",
            "GWS PRESSURE VESSEL TOP MOUNT 16 BAR (60141868)",
            "VAREM PRESSURE VESSEL FLOOR MOUNT 19L 8BAR (S2019361) VAREM PRESSURE VESSEL TOP MOUNT19L 8BAR (S1019301)",
            "PROBE",
            "SMART PRESS WG (1.5HP) (60113308)",
            "SMART PRESS WG (3.0HP) (60113922)",
            "3-WAY BRASS CONNECTOR (V50901) SOLLATEK VOLTSHIELD",
            'ELITE VACUUM HEAD 14" (K393CBX/G)',
            'ELITE VACUUM HEAD 18" (K394CBX/G)',
            "EVOLUTION TRIAGULAR VACUUM HEAD (K300CS/PB) ",
            "ASTRAL TELESCOPIC POLE 10M (01362)",
            "ASTRAL VACUUM HEAD 35CM (01355)",
            "ASTRAL VACUUM HEAD 45CM (01356) ",
            "VACUUM HEAD (BLUE DEVIL) (K761C56) ",
            "POOL BRUSH (K069C812)",
            "CURVED POOL BRUSH (K166C812)",
            "JAZZI POOL BRUSH",
            "CLASSIC ALGAE BRUSH (K316CB) ",
            "LEAF RAKE (K043CB12/NY) ",
            "LEAF NET (K087CB)",
            "TELESCOPIC POLE 5M (K120BU/S) ",
            "HEAVYDUTY POLE (K254BU/S) ",
            "EXTRUDED VACUUM HOSE 15M (K357 SW)",
            "SPIRAL WOUND VACUUM HOSE 6M (K3585W) ",
            "SPIRAL WOUND VACUUM HOSE 15M (K3685W)",
            "TEST KIT (K529BL) ",
            "TEST KIT REFIL (K1028L)",
            "VACUUM HOSE REEL (K836CBX) ",
            "THERMOMETER (K785CS/6P)",
            "FLOATING CHAIR (K643CBX)",
            "POOL HANGERS (K079BL/AL) ",
            "VACUUM HOSE CUFF (K3988U)",
            "(NB. ASTRAL+ JAZZI STOCK AS PER CLASSIC PRICES)",
        ]
    },
]

export default categories
