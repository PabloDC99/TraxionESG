AmCharts.ready(function() {
    var chart = new AmCharts.AmSerialChart();
    chart.dataProvider = [
        { "category": "2021\nPermiso parental acogido", "Mujeres": 10, "Hombres": 59 },
        { "category": "2022\nPermiso parental acogido", "Mujeres": 10, "Hombres": 56},
        { "category": "2021\nRegreso al trabajo después del permiso", "Mujeres": 7, "Hombres": 59 },
        { "category": "2022\nRegreso al trabajo después del permiso", "Mujeres": 8, "Hombres": 55 },
        { "category": "2021\n% de regreso", "Hombres": 100, "Mujeres": 70 },
        { "category": "2022\n% de regreso", "Hombres": 98, "Mujeres": 80 }
    ];
    chart.categoryField = "category";
    chart.startDuration = 1;
    
    // AXES
    // Category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.gridPosition = "start";
    categoryAxis.labelRotation = 0;
    categoryAxis.autoWrap = true;
    
    // Value
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.stackType = "regular"; // this will make the columns stacked
    chart.addValueAxis(valueAxis);
    
    // GRAPHS
    
    // Mujeres graph
    var graph1 = new AmCharts.AmGraph();
    graph1.title = "Mujeres";
    graph1.labelText = "[[value]]";
    graph1.valueField = "Mujeres";
    graph1.type = "column";
    graph1.lineAlpha = 0;
    graph1.fillAlphas = 1;
    graph1.fillColors = "#008000"; // Green
    chart.addGraph(graph1);
    // Hombres graph
    var graph2 = new AmCharts.AmGraph();
    graph2.title = "Hombres";
    graph2.labelText = "[[value]]";
    graph2.valueField = "Hombres";
    graph2.type = "column";
    graph2.lineAlpha = 0;
    graph2.fillAlphas = 1;
    graph2.fillColors = "#FFD700"; // Yellow
    chart.addGraph(graph2);
    
    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.position = "bottom";
    legend.align = "center";
    chart.addLegend(legend);
    
    // Add custom labels for groups
    chart.addListener("dataUpdated", function() {
        chart.addLabel(120, 490, "Permiso parental acogido", "center", 16, "#000", 1, 0, true);
        chart.addLabel(420, 490, "Regreso al trabajo después del permiso", "center", 16, "#000", 1, 0, true);
        chart.addLabel(720, 490, "% de regreso", "center", 16, "#000", 1, 0, true);
    });

    // WRITE
    chart.write("chartdiv");
});