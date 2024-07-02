# tides-game-map-visualizer

A small javascript tool to visualize hints for finding chests on the Voyage map of 'Tides - A Fishing Game' 
by *[Shallot Games](https://shallotgames.com/)*.

## Usage

Copy _index.html_, _map-visualizer.js_ and _hints.js_ into the same directory and open _index.html_ in the browser of your choice.

Edit the _hints()_ function in the beginning of the _hints.js_ file and reload the browser window.

## Notes

Hints like 'The treasue is within x meters' are treated as squares, when calculating the target area.

Hints like 'The treasure is at least x meters away' are not considered to calculate the target area. That would involve 
calculating intersections of circles and squares.
