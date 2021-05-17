const yaricapDegeri = process.argv.slice(2)

function daireAlani(yaricap) {

    let alan = Math.PI * Math.pow(yaricap, 2)
    let alan2 = alan.toFixed(2)

    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan2} `)
}

daireAlani(yaricapDegeri[0] * 1)