//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('arretesService', function () {
    this.getArretes= function () {
        return arretes;
    };

    this.getLastNumber= function() {
    	return arretes.length();
    }
    this.insertArrete = function (rues,typeAutorisation,petititionDate,additionnalInfoTypeAutorisation,startDateAutorisation,endDateAutorisation,articles,tarif,topValid,lois) {
        var number = this.getLastNumber()+ 1;
        arretes.push({
        	number:number,
        	typeAutorisation:typeAutorisation,
        	petititionDate:petititionDate,
	        additionnalInfoTypeAutorisation:additionnalInfoTypeAutorisation,
	        startDateAutorisation:startDateAutorisation,
	        endDateAutorisation:endDateAutorisation,
	        tarif:tarif,
	        title:title,
	        topValid:topValid,
        	articles:articles,
        	rues:rues,
	        lois:lois
        });
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

    var arretes = [
        {
        	number:1,
        	typeAutorisation:"type",
        	petititionDate:new Date(2017, 01,01,01,01,01,01),
	        additionnalInfoTypeAutorisation:"type",
	        startDateAutorisation:new Date(2017, 02,01,01,01,01,01),
	        endDateAutorisation:new Date(2017, 03,01,01,01,01,01),
	        tarif:100,
	        title:"arrêté exepmple",
	        topValid:true,
            rues: [
                { id: 10, rue: "Marcel Proust", startNumber: 1, endNumber: 500 },
            ],
        	lois:[
                { id: 10, description: "Loi 10"},
            ],
        	articles:[
                { id: 10, category: "scolaire", typeArticle: "type"},
            ],
        },
    ];

});