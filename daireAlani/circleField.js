const radiusValue = process.argv.slice(2)

function circleField(radius) {

    let field = Math.PI * Math.pow(radius, 2)
    let field2 = alan.toFixed(2)

    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${field2} `)
}

circleField(radiusValue[0] * 1)
