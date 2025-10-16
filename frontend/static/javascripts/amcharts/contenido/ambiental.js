AmCharts.theme = AmCharts.themes.light;

if (typeof AmCharts !== 'undefined') {
    var data = [
        {
            "year": "2022",
            "alcance1": 50033,
            "alcance2": 194346,
            "alcances3": 2581761
        },
        {
            "year": "2023",
            "alcance1": 46179,
            "alcance2": 204881,
            "alcances3": 2714390
        },
        {
            "year": "2024",
            "alcance1": 67908,
            "alcance2": 242166,
            "alcances3": 12363005
        }
    ];

    data.forEach(function (d) {
        d.total = d.alcance1 + d.alcance2 + d.alcances3;
    });

    var chart1 = AmCharts.makeChart("chart1", {
        "type": "serial",
        "theme": "none",
        "titles": [{
            "text": "Emisiones totales\n Dióxido de carbono equivalente (Ton CO\u2082e)",
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
                return AmCharts.formatNumber(value / 100, {
                    precision: 2,
                    decimalSeparator: ".",
                    thousandsSeparator: ","
                });
            }
        }],
        "graphs": [
            {
                "balloonFunction": function (item) {
                    return "Alcance 1: " + AmCharts.formatNumber(item.values.value / 100, {
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
                "color": "#1bc2ae",
                "lineColor": "#1bc2ae",
                "fillColors": "#1bc2ae"
            },
            {
                "balloonFunction": function (item) {
                    return "Alcance 2: " + AmCharts.formatNumber(item.values.value / 100, {
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
                "color": "#0081c9",
                "lineColor": "#0081c9",
                "fillColors": "#0081c9"
            },
            {
                "balloonFunction": function (item) {
                    return "Alcance 3: " + AmCharts.formatNumber(item.values.value / 100, {
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
                "color": "#2d4972",
                "lineColor": "#2d4972",
                "fillColors": "#2d4972"
            },
            {
                "balloonFunction": function (item) {
                    return "Total: " + AmCharts.formatNumber(item.values.value / 100, {
                        precision: 2,
                        decimalSeparator: ".",
                        thousandsSeparator: ","
                    });
                },
                "valueField": "total",
                "title": "Total",
                "type": "column",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "color": "#002855",
                "lineColor": "#002855",
                "fillColors": "#002855"
            }
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
        var peso_total_de_residuos = ['2022', '2023', '2024'];
        var residuos_peligrosos = ['2022', '2023', '2024'];
        var residuos_de_reciclaje = ['2022', '2023', '2024'];
        var residuos_a_eliminar = ['2022', '2023', '2024'];
    } else {
        var peso_total_de_residuos = ['2022', '2023', '2024'];
        var residuos_peligrosos = ['2022', '2023', '2024'];
        var residuos_de_reciclaje = ['2022', '2023', '2024'];
        var residuos_a_eliminar = ['2022', '2023', '2024'];
    }

    var chart2 = AmCharts.makeChart("chart2", {
        "titles": [
            {
                "text": "Peligrosos",
                "size": 15,
                "color": "#000000",
                "marginBottom": 10
            },
        ],
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
                "activo": peso_total_de_residuos[0],
                "valor": 514,
                "valorFormatted": "5.14"

            }, {
                "activo": peso_total_de_residuos[1],
                "valor": 255,
                "valorFormatted": "2.55"

            }, {
                "activo": peso_total_de_residuos[2],
                "valor": 205,
                "valorFormatted": "2.05"

            }
        ],
        "labelText": "[[valorFormatted]]",
        "labelFunction": function (data) {
            // Formatea el valor con comas
            return data.value.toLocaleString("en-US");
        },
        "labelRadius": 30,
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
                "text": "Sólidos Urbanos",
                "size": 15,
                "color": "#000000"
            },
        ],
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
                "activo": residuos_peligrosos[0],
                "valor": 7783,
                "valorFormatted": "77.83"

            }, {
                "activo": residuos_peligrosos[1],
                "valor": 2914,
                "valorFormatted": "29.14"

            }, {
                "activo": residuos_peligrosos[2],
                "valor": 6007,
                "valorFormatted": "60.07"

            }
        ],
        "labelText": "[[valorFormatted]]",
        "labelFunction": function (data) {
            // Formatea el valor con comas
            return data.value.toLocaleString("en-US");
        },
        "labelRadius": 30,
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

