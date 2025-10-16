console.log('responsabilidad-social.js is loaded');
AmCharts.theme = AmCharts.themes.light;

if (locale == "es") {
    var chart1_title = "Colaboradores por tipo de contrato"
    var chart2_title = "Colaboradores por género"
} else {
    var chart1_title = "Colaboradores por tipo de contrato"
    var chart2_title = "Colaboradores por género"
}

$(document).ready(function() {
    var chart = AmCharts.makeChart("chartdiv", {
        "type": "pie",
        "theme": "light",
        "fontSize": 20,
        "dataProvider": [{
            "type": "Permanente",
            "percentage": 99,
            "color": "#2792ec"
        }, {
            "type": "Temporal",
            "percentage": 1,
            "color": "#012E81"
        }],
        "titles": [{
            "text": chart1_title,
            "size": 15,
            "color": "#012E81"
        }],
        "valueField": "percentage",
        "titleField": "type",
        "innerRadius": "60%",
        "balloon": {
            "adjustBorderColor": true,
            "color": "#000000",
            "cornerRadius": 5,
            "fillColor": "#FFFFFF"
        },
        "balloonText": "<span style='font-size:14px;'>[[title]]: [[percents]]%</span>",
        "labelText": "[[title]]: [[percents]]%",
        "labelsEnabled": true,
        "labelColorField": "color",
        "labelTickColor": "#012E81",
        "colors": [
            '#2792ec', '#012E81'
        ],
        "legend": {
            "position": "bottom",
            "autoMargins": false,
            "marginLeft": 0,
            "marginRight": 0,
            "align": "center",
            "equalWidths": true,
            "valueWidth": 0,
            "fontSize": 12
        },
        "export": {
            "enabled": true
        }
    });

    var char2 = AmCharts.makeChart("chartdiv2", {
        "type": "pie",
        "theme": "light",
        "fontSize": 20,
        "dataProvider": [{
            "type": "Hombres",
            "percentage": 68,
            "color": "#2792ec"
        }, {
            "type": "Mujeres",
            "percentage": 32,
            "color": "#012E81"
        }],
        "titles": [{
            "text": chart2_title,
            "size": 15,
            "color": "#012E81"
        }],
        "valueField": "percentage",
        "titleField": "type",
        "innerRadius": "60%",
        "balloon": {
            "adjustBorderColor": true,
            "color": "#000000",
            "cornerRadius": 5,
            "fillColor": "#FFFFFF"
        },
        "balloonText": "<span style='font-size:14px;'>[[title]]: [[percents]]%</span>",
        "labelText": "[[title]]: [[percents]]%",
        "labelsEnabled": true,
        "labelColorField": "color",
        "labelTickColor": "#012E81",
        "colors": [
            '#2792ec', '#012E81'
        ],
        "legend": {
            "position": "bottom",
            "autoMargins": false,
            "marginLeft": 0,
            "marginRight": 0,
            "align": "center",
            "equalWidths": true,
            "valueWidth": 0,
            "fontSize": 12
        },
        "export": {
            "enabled": true
        }
    });
});

