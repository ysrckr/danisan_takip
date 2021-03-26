class ClientDetails {
	constructor(
		weight,
		height,
		age,
		gender,
		activity,
		abdomen = 0,
		neck = 0,
		waist = 0,
		hip = 0
	) {
		;(this.weight = weight),
			(this.height = height),
			(this.age = age),
			(this.gender = gender),
			(this.activity = activity),
			(this.abdomen = abdomen),
			(this.neck = neck),
			(this.waist = waist),
			(this.hip = hip)
	}

	// Convertions
	convertHeight() {
		return this.height / 100
	}

	toInchHeight() {
		return this.height / 2.54
	}
	toInchAbdomen() {
		return this.abdomen / 2.54
	}
	toInchNeck() {
		return this.neck / 2.54
	}
	toInchWaist() {
		return this.waist / 2.54
	}
	toInchHip() {
		return this.hip / 2.54
	}

	// Calculations
	calculateBki() {
		return weight / Math.pow(this.convertHeight(), 2)
	}

	calculateIdealWeight() {
		return 22 * Math.pow(this.convertHeight(), 2)
	}

	calculateCorrectedWeight() {
		return (
			(this.weight - this.calculateIdealWeight()) * 0.25 +
			this.calculateIdealWeight()
		)
	}

	calculateBasal() {
		switch (this.gender) {
			case 'Male':
				if (this.calculateBki() >= 25) {
					if (this.age < 3) {
						return 59.512 * this.calculateCorrectedWeight() - 30.4
					} else if (this.age >= 3 && this.age < 10) {
						return 22.706 * this.calculateCorrectedWeight() + 504.3
					} else if (this.age >= 10 && this.age < 18) {
						return 17.686 * this.calculateCorrectedWeight() + 658.2
					} else if (this.age >= 18 && this.age < 30) {
						return 15.057 * this.calculateCorrectedWeight() + 692.2
					} else if (this.age >= 30 && this.age < 60) {
						return 11.472 * this.calculateCorrectedWeight() + 873.1
					} else if (this.age >= 60) {
						return 11.711 * this.calculateCorrectedWeight() + 587.7
					}
				} else {
					if (this.age < 3) {
						return 59.512 * this.weight - 30.4
					} else if (this.age >= 3 && this.age < 10) {
						return 22.706 * this.weight + 504.3
					} else if (this.age >= 10 && this.age < 18) {
						return 17.686 * this.weight + 658.2
					} else if (this.age >= 18 && this.age < 30) {
						return 15.057 * this.weight + 692.2
					} else if (this.age >= 30 && this.age < 60) {
						return 11.472 * this.weight + 873.1
					} else if (this.age >= 60) {
						return 11.711 * this.weight + 587.7
					}
				}
				break
			case 'Female':
				if (this.calculateBki() >= 25) {
					if (this.age < 3) {
						return 58.317 * this.calculateCorrectedWeight() - 31.1
					} else if (this.age >= 3 && this.age < 10) {
						return 20.315 * this.calculateCorrectedWeight() + 485.9
					} else if (this.age >= 10 && this.age < 18) {
						return 13.384 * this.calculateCorrectedWeight() + 692.6
					} else if (this.age >= 18 && this.age < 30) {
						return 14.818 * this.calculateCorrectedWeight() + 486.6
					} else if (this.age >= 30 && this.age < 60) {
						return 8.126 * this.calculateCorrectedWeight() + 845.6
					} else if (this.age >= 60) {
						return 9.082 * this.calculateCorrectedWeight() + 658.5
					}
				} else {
					if (this.age < 3) {
						return 58.317 * this.weight - 31.1
					} else if (this.age >= 3 && this.age < 10) {
						return 20.315 * this.weight + 485.9
					} else if (this.age >= 10 && this.age < 18) {
						return 13.384 * this.weight + 692.6
					} else if (this.age >= 18 && this.age < 30) {
						return 14.818 * this.weight + 486.6
					} else if (this.age >= 30 && this.age < 60) {
						return 8.126 * this.weight + 845.6
					} else if (this.age >= 60) {
						return 9.082 * this.weight + 658.5
					}
				}
				break

			default:
				console.log('BMH hesaplanamadi')
				return 0
		}
	}

	calculateEnergyNeed() {
		switch (this.activity) {
			case 'light activity':
				return this.calculateBasal() * 1.2
			case 'normal activity':
				return this.calculateBasal() * 1.4
			case 'high activity':
				return this.calculateBasal() * 1.6
			case 'very high activity':
				return this.calculateBasal() * 1.8
			default:
				return this.calculateBasal()
		}
	}

	calculateBodyFat() {
		switch (this.gender) {
			case 'male':
				return (
					86.01 * Math.log10(this.toInchAbdomen() - this.toInchNeck()) -
					70.041 * Math.log10(this.toInchHeight()) +
					36.76
				)
			case 'female':
				return (
					Math.log10(
						this.toInchWaist() + this.toInchHip() - this.toInchNeck()
					) -
					97.684 * Math.log10(this.toInchHeight()) -
					78.387
				)
			default:
				return 0
		}
	}
}

module.exports = ClientDetails
