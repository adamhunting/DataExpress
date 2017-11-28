window.onload() = function(){

    var chart = new CanvasJS.Chart("chart", {
        animationEnabled: true,
        title: {
            text: "Percentage of Answers For Each Question"
        },
        axisX:{
            prefix: "Question ",
            interval: 1
        },
        axisY:{
            suffix: "%"
        },
        data: [
            {
                type: "stackecColumn100",
                name: "Answer 1",
                showInLegend: false,
                yValueFormatString: "#,##0\"%\"",
                dataPoints: [
                    {x: 1, y : 25},
                    {x: 1, y : 25},
                    {x: 1, y : 25},
                    {x: 1, y : 25}
                ]
            }, 
            {
                type: "stackecColumn100",
                name: "Answer 2",
                showInLegend: false,
                yValueFormatString: "#,##0\"%\"",
                dataPoints: [
                    {x: 1, y : 25},
                    {x: 1, y : 25},
                    {x: 1, y : 25},
                    {x: 1, y : 25}
                ]
            },
            {
                type: "stackecColumn100",
                name: "Answer 3",
                showInLegend: false,
                yValueFormatString: "#,##0\"%\"",
                dataPoints: [
                    {x: 1, y : 25},
                    {x: 1, y : 25},
                    {x: 1, y : 25},
                    {x: 1, y : 25}
                ]
            },
            {
                type: "stackecColumn100",
                name: "Answer 4",
                showInLegend: false,
                yValueFormatString: "#,##0\"%\"",
                dataPoints: [
                    {x: 1, y : 25},
                    {x: 1, y : 25},
                    {x: 1, y : 25},
                    {x: 1, y : 25}
                ]
            }
        ]

    });
chart.render();
}

function FindPercentage(){

}