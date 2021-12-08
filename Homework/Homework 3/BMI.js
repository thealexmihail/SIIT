var persons = [{
    name: 'John Doe',
    gender: 'M',
    height: 1.8,
    weight: 78
}, {
    name: 'Marry Anne',
    gender: 'F',
    height: 1.74,
    weight: 90
}]

function bmiFormula(height, weight) {
    var bmi = Math.round(weight / (height * height));
    return bmi;
}

function bmiResult(bmi) {
    var result = '';
    if (bmi < 18.5) {
        result = 'Underweight';
    } else if (bmi > 18.5 && bmi < 25) {
        result = 'Normal weight';
    } else if (bmi > 25 && bmi < 30) {
        result = 'Overweight';
    } else if (bmi >= 30) {
        result = 'Obese';
    } else {
        result = 'BMI is not correct';
    }
    return result;
}

for (var i = 0; i < persons.length; i++) {
    var bmi = bmiFormula(persons[i].height, persons[i].weight);
    var result = bmiResult(bmi);
    console.log(persons[i].name + ' | ' + persons[i].gender + ' | BMI: ' + bmi + ' | ' + result);
}