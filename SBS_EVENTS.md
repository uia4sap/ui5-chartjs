Events Adn Callbacks
===

## Chart.pointClick

### View

Support types of chart
* Bar
* Line
* Pie
* Polar Area

```xml
<chartjs:LineChart pointClick="onClick">
</chartjs:LineChart>
```

### Event Parameters

```js
onClick: function(oEvent) {
    var points = oEvent.getParameter("points");
    var info = oEvent.getParameter("info");
}
```
  
* `points`: Array
    * `datasetIndex`
    * `datasetLabel`
    * `index`: The value index in the dataset.
    * `value`: original data.

* `info`: Object
  * shiftKey
  * altKey
  * ctrlKey
  * x
  * y
  * screenX
  * screenY
  * type


## Data.pointBackgroundColor
Support types of data
* Bar
* Line

### View
```xml
<chartjs:LineChart>
    <data:Line
        label="{/label}"
        dataset="{/dataset}"
        pointBackgroundColor="{/customColor}" />
</chartjsLLineChart>
```

### JSON Model
```js
var model = {
    "label": "",
    "dataset": [],
    "customColor": function(oChart) {
        var value = oChart.dataset.data[oChart.dataIndex];
        return "red";
    }
}

```

