(function() {
    'use strict';

    // to track the state of each bulb
    var bulbState = {
        'red': false,
        'yellow': false,
        'green': false
    };

    var toggleBulb = (bulb) => {
        switch (bulb) {
            case 'red': 
                bulbState['red'] = !bulbState['red'];
                return bulbState['red'] ? 'red' : '#111';
            case 'yellow':
                bulbState['yellow'] = !bulbState['yellow'];
                return bulbState['yellow'] ? 'yellow' : '#111';
            case 'green':
                bulbState['green'] = !bulbState['green'];
                return bulbState['green'] ? 'green' : '#111';
            default: 
                return '#111';    
        }  
    };

    window.addEventListener('DOMContentLoaded', (event) => {

        // attach the basic handlers...
        document.getElementById('stopButton').addEventListener('click', (event) => {
            document.getElementById('stopLight').style.backgroundColor = toggleBulb('red');           
        });
        document.getElementById('slowButton').addEventListener('click', (event) => {
            document.getElementById('slowLight').style.backgroundColor = toggleBulb('yellow');            
        });
        document.getElementById('goButton').addEventListener('click', (event) => {
            document.getElementById('goLight').style.backgroundColor = toggleBulb('green');            
        });
        
        // part 2
        document.getElementById('stopButton').addEventListener('mouseenter', (event) => {
            console.log('Entered stop button');
        });
        document.getElementById('stopButton').addEventListener('mouseleave', (event) => {
            console.log('Left stop button');
        });
        //
        document.getElementById('slowButton').addEventListener('mouseenter', (event) => {
            console.log('Entered slow button');
        });
        document.getElementById('slowButton').addEventListener('mouseleave', (event) => {
            console.log('Left slow button');
        });
        //
        document.getElementById('goButton').addEventListener('mouseenter', (event) => {
            console.log('Entered go button');
        });
        document.getElementById('goButton').addEventListener('mouseleave', (event) => {
            console.log('Left go button');
        });
        
        // AND FOR THE BONUS...
        document.getElementById('controls').addEventListener('click', (event) => {
            switch(event.target.innerText) {
                case "Stop": console.log('Red bulb ' + (bulbState.red ? 'on' : 'off')); break;
                case "Slow": console.log('Slow bulb ' + (bulbState.yellow ? 'on' : 'off')); break;
                case "Go": console.log('Go bulb ' + (bulbState.green ? 'on' : 'off')); break;
                default: break;
            }
        });
        

    });

    
})();
