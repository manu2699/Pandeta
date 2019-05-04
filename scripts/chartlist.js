function selectArea() {
    var areaSelect = document.getElementById("area");
    var Area = areaSelect.options[areaSelect.selectedIndex].value;
    const labels = ['2000', '2001', '2002', '2003', '2004'];
    var options = {
        width : 1000,
        height : 500,
        seriesBarDistance: 5,
        reverseData: false,
        horizontalBars: true,
        axisY: {offset: 50}
    };
    document.getElementById("info1").innerHTML = "Line Graph : " + Area + "<br>";
    document.getElementById("info2").innerHTML = "Horizontal Chart : " + Area + "<br>";
    //document.getElementById('disp').innerHTML = Area;
    if (Area == "City of London") {
        const dataset = [410, 420, 440, 440, 430];
        var data = {
            labels: labels,
            series: [dataset]
        };
        
        new Chartist.Line('#chart1', data, { showArea: true});
        
        new Chartist.Bar('#chart2', data, options );
    }
    else if (Area == "Barking and Dagenham") {
        const dataset = [19400, 19200, 20170, 20880, 21150];
        var data = {
            labels: labels,
            series: [dataset]
        };
        new Chartist.Line('#chart1', data, { showArea: true, });
        new Chartist.Bar('#chart2', data, options );
    }
    else if (Area == "Barnet") {
        const dataset = [22450, 22310, 24010, 24400, 24280];
        var data = {
            labels: labels,
            series: [dataset]
        };
        new Chartist.Line('#chart1', data, { showArea: true});
        new Chartist.Bar('#chart2', data, options );
    }
    else if (Area == "Bexley") {
        const dataset = [15010, 14570, 15490, 15650, 15470];
        var data = {
            labels: labels,
            series: [dataset]
        };
        new Chartist.Line('#chart1', data, { showArea: true});
        new Chartist.Bar('#chart2', data, options );
    }
    else if (Area == "Brent") {
        const dataset = [ 30740, 28590, 30170, 30400, 30200];
        var data = {
            labels: labels,
            series: [dataset]
        };
        new Chartist.Line('#chart1', data, { showArea: true});
        new Chartist.Bar('#chart2', data, options );
    }
    else if (Area == "Bromley") {
        const dataset = [18420, 17950, 19020, 19410, 19350];
        var data = {
            labels: labels,
            series: [dataset]
        };
        new Chartist.Line('#chart1', data, { showArea: true});
        new Chartist.Bar('#chart2', data, options );
    }
    else if (Area == "Camden") {
        const dataset = [ 25020, 23930, 25140, 25240, 25110];
        var data = {
            labels: labels,
            series: [dataset]
        };
        new Chartist.Line('#chart1', data, { showArea: true});
        new Chartist.Bar('#chart2', data, options );
    }
    else if (Area == "Croydon") {
        const dataset = [28400, 27280, 28730, 29140, 28870];
        var data = {
            labels: labels,
            series: [dataset]
        };
        new Chartist.Line('#chart1', data, { showArea: true});
        new Chartist.Bar('#chart2', data, options );
    }
    else if (Area == "Ealing" ) {
        const dataset = [30170, 28210, 29840, 29740, 29050];
        var data = {
            labels: labels,
            series: [dataset]
        };
        new Chartist.Line('#chart1', data, { showArea: true});
        new Chartist.Bar('#chart2', data, options );
        new Chartist.Pie('#chart2', data, {
            donut: true,
            donutWidth: 60,
            donutSolid: true,
            startAngle: 270,
            total: 200,
            showLabel: false
        });
    }
    else if (Area == "overall"){
        document.getElementById("info1").innerHTML = "SMIL ANIMATIONS : " + Area + "<br>";
        document.getElementById("info2").innerHTML = "PATH ANIMATIONS : " + Area + "<br>";
        var chart = new Chartist.Line('#chart1', {
            labels: labels,
            series: [
                [410, 420, 440, 440, 430],
                [19400, 19200, 20170, 20880, 21150],
                [22450, 22310, 24010, 24400, 24280],
                [15010, 14570, 15490, 15650, 15470],
                [30740, 28590, 30170, 30400, 30200],
                [18420, 17950, 19020, 19410, 19350],
                [25020, 23930, 25140, 25240, 25110],
                [28400, 27280, 28730, 29140, 28870],
                [30170, 28210, 29840, 29740, 29050]
            ]
          }, {
            low: 0
          });
          
          // Let's put a sequence number aside so we can use it in the event callbacks
          var seq = 0,
            delays = 80,
            durations = 500;
          
          // Once the chart is fully created we reset the sequence
          chart.on('created', function() {
            seq = 0;
          });
          
          // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
          chart.on('draw', function(data) {
            seq++;
          
            if(data.type === 'line') {
              // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
              data.element.animate({
                opacity: {
                  // The delay when we like to start the animation
                  begin: seq * delays + 1000,
                  // Duration of the animation
                  dur: durations,
                  // The value where the animation should start
                  from: 0,
                  // The value where it should end
                  to: 1
                }
              });
            } else if(data.type === 'label' && data.axis === 'x') {
              data.element.animate({
                y: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.y + 100,
                  to: data.y,
                  // We can specify an easing function from Chartist.Svg.Easing
                  easing: 'easeOutQuart'
                }
              });
            } else if(data.type === 'label' && data.axis === 'y') {
              data.element.animate({
                x: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 100,
                  to: data.x,
                  easing: 'easeOutQuart'
                }
              });
            } else if(data.type === 'point') {
              data.element.animate({
                x1: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 10,
                  to: data.x,
                  easing: 'easeOutQuart'
                },
                x2: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 10,
                  to: data.x,
                  easing: 'easeOutQuart'
                },
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'easeOutQuart'
                }
              });
            } else if(data.type === 'grid') {
              // Using data.axis we get x or y which we can use to construct our animation definition objects
              var pos1Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '1'] - 30,
                to: data[data.axis.units.pos + '1'],
                easing: 'easeOutQuart'
              };
          
              var pos2Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '2'] - 100,
                to: data[data.axis.units.pos + '2'],
                easing: 'easeOutQuart'
              };
          
              var animations = {};
              animations[data.axis.units.pos + '1'] = pos1Animation;
              animations[data.axis.units.pos + '2'] = pos2Animation;
              animations['opacity'] = {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
              };
          
              data.element.animate(animations);
            }
          });
          
          // For the sake of the example we update the chart every time it's created with a delay of 10 seconds
          chart.on('created', function() {
            if(window.__exampleAnimateTimeout) {
              clearTimeout(window.__exampleAnimateTimeout);
              window.__exampleAnimateTimeout = null;
            }
            window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 22000);
          });

          var chart = new Chartist.Line('#chart2', {
            labels: labels,
            series: [
                [410, 420, 440, 440, 430],
                [19400, 19200, 20170, 20880, 21150],
                [22450, 22310, 24010, 24400, 24280],
                [15010, 14570, 15490, 15650, 15470],
                [30740, 28590, 30170, 30400, 30200],
                [18420, 17950, 19020, 19410, 19350],
                [25020, 23930, 25140, 25240, 25110],
                [28400, 27280, 28730, 29140, 28870],
                [30170, 28210, 29840, 29740, 29050]
            ]
          }, {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true
          });
          
          chart.on('draw', function(data) {
            if(data.type === 'line' || data.type === 'area') {
              data.element.animate({
                d: {
                  begin: 2000 * data.index,
                  dur: 2000,
                  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                  to: data.path.clone().stringify(),
                  easing: Chartist.Svg.Easing.easeOutQuint
                }
              });
            }
          });
          
          
    }
}