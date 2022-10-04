# MMM-Shopping-list
Magic Mirror Nodejs module to show the shopping list items

Based on https://github.com/timdows/MMM-JsonTable.git

![](image1.png?raw=true)

# How to use:
1. cd modules

2. git clone https://github.com/itay47/MMM-Shopping-list.git

## add to config.js the following section:
```
{
	module: 'MMM-Shopping-list',
	position: 'top_right',
	header: 'קניות',
	config: {
		url: "https://shechtershoppinglist.onrender.com/getactiveitems", // Required
		keepColumns:  ["Measure","Ammount","GroceyName"],
		updateInterval: 5 * 1000,
	}
},
```
