//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('arretesService', function () {
	var arretes=[];
    this.getArretes= function () {
        return arretes;
    };

    this.getLastNumber= function() {
    	return arretes.length;
    }
    this.insertArrete = function (arrete) {
    	console.log(arrete);
    	arrete.num= this.getLastNumber()+ 1;
    	console.log(arrete);
        arretes.push(arrete);
    };

    this.deleteArrete = function (id) {
        for (var i = arretes.length - 1; i >= 0; i--) {
            if (arretes[i].id === id) {
                arretes.splice(i, 1);
                break;
            }
        }
    };

    this.getArrete = function (id) {
        for (var i = 0; i < arretes.length; i++) {
            if (arretes[i].id === id) {
                return arretes[i];
            }
        }
        return null;
    };

 });