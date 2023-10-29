"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const middleFunction1 = (req, res, next) => {
	//   console.log(req.query);
	const skip = req.query.skip ?? false;

	req.customData = "Custom Data With Request";
	res.customDataWithResponse = "Custom Data With Response";

	if (skip) {
		// Bir sonraki route'a (bağımsız fonksiyona) git:
		console.log("next-route worked");
		next("route");
	} else {
		// Bir sonraki callback fonksiyona git:
		console.log("next worked");
		next();
	}
};

const middleFunction2 = (req, res, next) => {
	// next();

	res.send({
		customData: [req.customData, res.customDataWithResponse],
		message: "Here is func2, next() runned",
	});
};

module.export = [middleFunction1, middleFunction2];
