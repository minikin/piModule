var Parse = require('parse/node');

var checkUserRfidID = function (rfidID) {

		var Employee = Parse.Object.extend("Employee");
		var query = new Parse.Query(Employee);
		query.equalTo("rfidID", rfidID);
		console.log("REQUEST TAG ID:", rfidID);
		query.first({
		  success: function(employee) {
					if (employee == null) {
						console.log("ATTENSION WE CAN'T FIND USER!");
					} else {
						console.log("WELCOME", employee.get("employeeName"),"ENJOY YOUR COFFEE!");
					}
		  },
		  error: function(error) {
		    console.log("SORRY, SOME ERROR HEPPEND:", error.code, error.message);
		  }
		});
};

module.exports = checkUserRfidID;
