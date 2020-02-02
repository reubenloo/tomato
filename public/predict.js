//jquery & jsdom packages required for debugging
//var jsdom = require('jsdom');
//$ = require('jquery')(new jsdom.JSDOM().window);

/*Function triggered when image is selected*/
$('#image-selector').change(function () {
    let reader = new FileReader();
    reader.onload = function () {
        let dataURL = reader.result;
        $('#selected-image').attr('src', dataURL);
        $('#prediction-list').empty();
    }
    let file = $('#image-selector').prop('files')[0];
    reader.readAsDataURL(file);
}); 

/*Hide progress bar once model has loaded */
let model;
(async function () {
    model = await tf.loadLayersModel('tfjs-models/PlantVillage/model.json')
    $('.progress-bar').hide();
})();

/*When predict button is clicked */
$('#predict-button').click(async function () {
    let image = $('#selected-image').get(0);
    let tensor = tf.browser.fromPixels(image)
        /*Image translated to height and width of 128 * 128 tensor*/
        .resizeNearestNeighbor([128, 128])
        /*Preprocessing */
        .toFloat()
        .expandDims()
        .div(255.0);

        /*Predict tensor value and  return probability of each leaf category*/
    let predictions = await model.predict(tensor).data();
    let top5 = Array.from(predictions)
        .map(function (p, i) {
            return {
                probability: p,
                className: PlantVillage_Classes[i]
            };
        /*Sort predictions by highest to lowest probabilty*/
        }).sort(function (a, b) {
            return b.probability - a.probability;
        /*Show top 5 predictions only*/
        }).slice(0, 5);

    /*Clear previous predictions*/
    $('#prediction-list').empty();
    top5.forEach(function (p) {
        $('#prediction-list').append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
    });
});

$('#button-1').click(async function () {
    document.getElementById('sol-1').style.display = 'visible';
});



