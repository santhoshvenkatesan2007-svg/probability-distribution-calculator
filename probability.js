function factorial(n) {
    if (n < 0) return NaN;

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

function binomial_calculate() {
    var nValue = Number(document.getElementById("n").value)
    var xValue = Number(document.getElementById("x1").value)
    var pValue = Number(document.getElementById("p").value)
    var qValue = 1 - pValue

    if (isNaN(nValue) || isNaN(xValue) || isNaN(pValue) || nValue < 0 || xValue < 0 || pValue < 0 || pValue > 1) {
        alert("Please enter valid values");
        return;
    }
    if (xValue > nValue) {
        alert("x cannot be greater than n");
        return;
    }
    var nCx = (factorial(nValue) / (factorial(xValue) * factorial(nValue - xValue)))
    let binomial_probability = nCx * ((pValue) ** xValue) * ((qValue) ** (nValue - xValue))
    binomial.textContent = "Probability : " + binomial_probability.toFixed(5)

    // P(X=x) = nCx p^x q^(n-x)
    // nCx = n! / x!(n-x)! 

}

function poisson_calculate() {
    var lambValue = Number(document.getElementById("lamb").value)
    var xValue = Number(document.getElementById("x2").value)

    if (isNaN(lambValue) || isNaN(xValue) || lambValue < 0 || xValue < 0) {
        alert("Please enter valid values");
        return;
    }

    let poisson_probability = (Math.E ** (-1 * lambValue) * lambValue ** xValue) / factorial(xValue)
    poisson.textContent = "Probability : " + poisson_probability.toFixed(5)

    // P(X=x) = (e^-(lambda) * lambda**x) / x!
    // n! = n (n-1) (n-2) ... (3) (2) (1)
}

function normal_calculate() {
    var muValue = Number(document.getElementById("mu").value)
    var sigmaValue = Number(document.getElementById("sigma").value)
    var xValue = Number(document.getElementById("x3").value)

    if (isNaN(muValue) || isNaN(sigmaValue) || isNaN(xValue) || sigmaValue <= 0) {
        alert("Please enter valid values");
        return;
    }

    var zValue = (xValue - muValue) / sigmaValue
    var normal_probability = (1 / (sigmaValue * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * zValue * zValue)
    normal.textContent = "Probability : " + normal_probability.toFixed(5)

    // f(x) = (1/(sigma*sqrt(2*pi))) * e^(-(1/2) * ((x-mu)/sigma)^2)
}