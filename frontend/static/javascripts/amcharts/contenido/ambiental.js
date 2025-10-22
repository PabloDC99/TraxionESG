AmCharts.theme = AmCharts.themes.light;

if (typeof AmCharts !== 'undefined') {
    var data = [
        {
            "year": "2023",
            "alcance1": 6652,
            "alcance2": 625503,
            "alcances3": 398609
        },
        {
            "year": "2024",
            "alcance1": 6101,
            "alcance2": 619255,
            "alcances3": 312173
        }
    ];

    data.forEach(function (d) {
        d.total = d.alcance1 + d.alcance2 + d.alcances3;
    });

    var chart1 = AmCharts.makeChart("chart1", {
        "type": "serial",
        "theme": "none",
        "titles": [{
            "text": "Emisiones totales (Ton CO\u2082e)",
            "size": 15,
            "useHTML": true
        }],
        "numberFormatter": {
            "precision": 2,
            "decimalSeparator": ".",
            "thousandsSeparator": ","
        },
        "dataProvider": data,
        "valueAxes": [{
            "axisAlpha": 1,
            "gridAlpha": 0.1,
            "labelsEnabled": true,
            "minimum": "0",
            "autoGridCount": false,
            "gridCount": 5,
            "labelFunction": function (value) {
                return AmCharts.formatNumber(value, {
                    precision: 2,
                    decimalSeparator: ".",
                    thousandsSeparator: ","
                });
            }
        }],
        "graphs": [
            {
                "balloonFunction": function (item) {
                    return "Alcance 1: " + AmCharts.formatNumber(item.values.value, {
                        precision: 2,
                        decimalSeparator: ".",
                        thousandsSeparator: ","
                    });
                },
                "valueField": "alcance1",
                "title": "Alcance 1",
                "type": "column",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "color": "#243881",
                "lineColor": "#243881",
                "fillColors": "#243881"
            },
            {
                "balloonFunction": function (item) {
                    return "Alcance 2: " + AmCharts.formatNumber(item.values.value, {
                        precision: 2,
                        decimalSeparator: ".",
                        thousandsSeparator: ","
                    });
                },
                "valueField": "alcance2",
                "title": "Alcance 2",
                "type": "column",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "color": "#C7E605",
                "lineColor": "#C7E605",
                "fillColors": "#C7E605"
            },
            {
                "balloonFunction": function (item) {
                    return "Alcance 3: " + AmCharts.formatNumber(item.values.value, {
                        precision: 2,
                        decimalSeparator: ".",
                        thousandsSeparator: ","
                    });
                },
                "valueField": "alcances3",
                "title": "Alcance 3",
                "type": "column",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "color": "#63666A",
                "lineColor": "#63666A",
                "fillColors": "#63666A"
            },
        ],
        "categoryField": "year",
        "categoryAxis": {
            "axisAlpha": 1,
            "gridAlpha": 0.1
        },
        "legend": {
            "position": "bottom",
            "align": "center"
        },
        "export": { "enabled": true }
    });


    if (locale == "es") {
        var consumo_energia  = ['Diésel','Gasolina','Gas natural','Gas LP','Electricidad'];
        var consumo_energia1  = ['Diésel', 'Gasolina', 'Gas natural', 'Gas LP', 'Electricidad'];
        var residuos_de_reciclaje = ['2022', '2023', '2024'];
        var residuos_a_eliminar = ['2022', '2023', '2024'];
    } else {
        var consumo_energia  = ['Diésel', 'Gasolina', 'Gas natural', 'Gas LP', 'Electricidad'];
        var consumo_energia1  = ['Diésel', 'Gasolina', 'Gas natural', 'Gas LP', 'Electricidad'];
        var residuos_de_reciclaje = ['2022', '2023', '2024'];
        var residuos_a_eliminar = ['2022', '2023', '2024'];
    }

    var chart2 = AmCharts.makeChart("chart2", {
        "titles": [
            {
                "text": "2023",
                "size": 15,
                "color": "#000000",
                "marginBottom": 10
            },
        ],
        "innerRadius": "0%",
    "radius": "22%",
        "colors": ["#C7E605", "#63666A", "#243881", "#F5F5F5", "#5B2B84"],
        "fontSize": 14,
        "balloonText": "[[activo]] <br> <b>[[valorFormatted]] toneladas</b>",
        "color": "#000000",
        "legend": {
            "align": "center",
            "markerType": "circle",
            "labelText": "[[title]]",
            "valueText": "",
            "equalWidths": true,
            "valueWidth": 0,
            "maxColumns": 3,
            "spacing": 30,
            "markerLabelGap": 8
        },
        "dataProvider": [
            {
                "activo":consumo_energia[0],
                "valor": 7629889.88,
                "valorFormatted": "7,629,889.88"

            }, {
                "activo":consumo_energia[1],
                "valor": 262518.31,
                "valorFormatted": "262,518.31"

            }, {
                "activo":consumo_energia[2],
                "valor": 72252.75,
                "valorFormatted": "72,252.75"

            }, {
                "activo":consumo_energia[3],
                "valor": 8028.08,
                "valorFormatted": "8,028.08"

            }, {
                "activo":consumo_energia[4],
                "valor": 54590.96,
                "valorFormatted": "54,590.96"

            }
        ],
        "labelsEnabled": true,
        "labelText": "[[valorFormatted]]",
        "labelRadius": 30,
        "labelTickAlpha": 0.4,
        "labelTickColor": "#888888",
        "labelTickLength": 8,
        "minAngle": 8,
        "outlineAlpha": 0.8,
        "outlineThickness": 2,
        "theme": "light",
        "titleField": "activo",
        "type": "pie",
        "valueField": "valor"
    });

    var chart3 = AmCharts.makeChart("chart3", {
        "titles": [
            {
                "text": "2024",
                "size": 15,
                "color": "#000000",
                "marginBottom": 10,
            },
        ],
        "innerRadius": "0%",
    "radius": "22%",
        "colors": ["#C7E605", "#63666A", "#243881", "#F5F5F5", "#5B2B84"],
        "fontSize": 14,
        "balloonText": "[[activo]] <br> <b>[[valorFormatted]] toneladas</b>",
        "color": "#000000",
        "legend": {
            "align": "center",
            "markerType": "circle",
            "labelText": "[[title]]",
            "valueText": "",
            "equalWidths": true,
            "valueWidth": 0,
            "maxColumns": 3,
            "spacing": 30,
            "markerLabelGap": 8
        },
        "dataProvider": [
            {
                "activo": consumo_energia1[0],
                "valor": 7490166.26,
                "valorFormatted": "7,490,166.26"

            }, {
                "activo": consumo_energia1[1],
                "valor": 262518.31,
                "valorFormatted": "259,141.29"

            }, {
                "activo": consumo_energia1[2],
                "valor": 58591.88,
                "valorFormatted": "58,591.88"

            }, {
                "activo": consumo_energia1[3],
                "valor": 7235.51,
                "valorFormatted": "7,235.51"

            }, {
                "activo": consumo_energia1[4],
                "valor": 49547.50,
                "valorFormatted": "49,547.50"

            }
        ],
        "labelsEnabled": true,
        "labelText": "[[valorFormatted]]",
        "labelRadius": 30,
        "labelTickAlpha": 0.4,
        "labelTickColor": "#888888",
        "labelTickLength": 8,
        "minAngle": 8,
        "outlineAlpha": 0.8,
        "outlineThickness": 2,
        "theme": "light",
        "titleField": "activo",
        "type": "pie",
        "valueField": "valor"
    });

    var chart4 = AmCharts.makeChart("chart4", {
    "titles": [{
        "text": "Manejo Especial",
        "size": 15,
        "color": "#000000"
    }],
    "innerRadius": "0%",
    "radius": "25%",
    "colors": ["#fe8243", "#1bc2ae", "#0081c9 "],
    "fontSize": 14,
    "balloonText": "[[activo]] <br> <b>[[valorFormatted]] toneladas</b>",
    "color": "#000000",
    "legend": {
        "align": "center",
        "markerType": "circle",
        "labelText": "",
        "valueText": "[[activo]]",
        "maxColumns": 2,
        "spacing": 10,
        "markerLabelGap": -6,
    },
    "dataProvider": [
        {
            "activo": residuos_de_reciclaje[0],
            "valor": 38365,
            "valorFormatted": "383.65"
        },
        {
            "activo": residuos_de_reciclaje[1],
            "valor": 1097,
            "valorFormatted": "10.97"
        },
        {
            "activo": residuos_de_reciclaje[2],
            "valor": 5634,
            "valorFormatted": "56.34"
        }
    ],
    "labelText": "[[valorFormatted]]",
    "labelRadius": 30,
    "outlineAlpha": 0.8,
    "outlineThickness": 2,
    "theme": "light",
    "titleField": "activo",
    "type": "pie",
    "valueField": "valor"
});



    // var chart5 = AmCharts.makeChart("chart5", {
    //     "titles": [
    //         {
    //             "text": "Residuos a eliminar",
    //             "size": 15,
    //             "color": "#000000"
    //         },
    //     ],
    //     "colors": ["#314597", "#79B928"],
    //     "fontSize": 14,
    //     "balloonText": "[[activo]] <b>[[value]] toneladas</b>",
    //     "color": "#000000",
    //     "legend": {
    //         "align": "center",
    //         "markerType": "circle",
    //         "labelText": "",
    //         "valueText": "[[activo]]",
    //         "maxColumns": 2,
    //         "spacing": 10,
    //         "markerLabelGap": -6,
    //
    //     },
    //     "dataProvider": [
    //         {
    //             "activo": residuos_a_eliminar[0],
    //             "valor": 4908,
    //             "valorFormatted": "4,908"
    //
    //         }, {
    //             "activo": residuos_a_eliminar[1],
    //             "valor": 4005,
    //             "valorFormatted": "4,005"
    //
    //         }
    //     ],
    //     "labelText": "[[valorFormatted]]",
    //     "labelFunction": function (data) {
    //         // Formatea el valor con comas
    //         return data.value.toLocaleString("en-US");
    //     },
    //     "labelRadius": -30,
    //     "outlineAlpha": 0.8,
    //     "outlineThickness": 2,
    //     "theme": "light",
    //     "titleField": "activo",
    //     "type": "pie",
    //     "valueField": "valor"
    // });
}

