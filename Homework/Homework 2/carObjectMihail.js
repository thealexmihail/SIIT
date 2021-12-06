var daciaDusterCar = {
    name: 'Duster',
    manufacturer: 'Dacia',
    year: 2020,
    price: '18000 eur',
    manufacturingSites: [{
        country: 'Romania', 
        city: 'Mioveni'
    }, {
        country: 'Morocco', 
        city: 'Tanger'
    }, {
        country: 'France', 
        city: 'Paris'
    }],
    engine: {
        engineName: 'H5H',
        power: '131KW',
        fuelType: 'Petrol',
        pollutionNorm: 'EURO 6',
        capacity: 1.332,
        gearbox: 'manual',
        transmission: '4x4'
    },
    exteriorFeatures: {
        height: '1695mm',
        length: '4315mm',
        width: '2000mm',
        doors: 5,
        body: {
            style: 'SUV',
            color: 'white',
            material: 'S235JR',
            surfaceCoatingTreatment: true
        }
    },
    interiorFeatures: {
        seats: 5,
        adjustableHeight: ['Drivers Seat', 'Front Headrests', 'Steering Wheel'],
        steeringWheel: ['Leather', 'Piano Black Lower Insert', 'Satin Chrome Logo Surround'],
        airConditioning: 'manual',
        connectivity: {
            mediaPlayer: true,
            bluetooth: true,
            gps: true,
        }
    }
}

