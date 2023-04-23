function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const ClassifyData = {
    0: '配料类',
    1: '家电类 ',
    2: '母婴类',
    3: '数码类',
    4: '食品类',
    5: '生活用品类',
    6: '服装类',
    7: '酒水类',
    8: '家具类',
}
function createClassifyData() {
    let data = []
    for (let i = 0; i < 9; i++) {
        data.push({ value: random(400, 80), name: ClassifyData[i] })
    }
    return data

}
function createLienData() {
    let data = []
    for (let i = 0; i < 12; i++) {
        data.push(random(450, 80))
    }
    return data
}
function createOrderData() {
    let data = []
    for (let i = 0; i < 12; i++) {
        data.push(random(260, 80))
    }
    return data
}
module.exports = {
    createClassifyData,
    createLienData,
    createOrderData
}