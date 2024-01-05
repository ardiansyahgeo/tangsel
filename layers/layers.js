var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_LOKASISURVEY_1 = new ol.format.GeoJSON();
var features_LOKASISURVEY_1 = format_LOKASISURVEY_1.readFeatures(json_LOKASISURVEY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOKASISURVEY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOKASISURVEY_1.addFeatures(features_LOKASISURVEY_1);
var lyr_LOKASISURVEY_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOKASISURVEY_1, 
                style: style_LOKASISURVEY_1,
                interactive: true,
                title: '<img src="styles/legend/LOKASISURVEY_1.png" /> LOKASI SURVEY'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_LOKASISURVEY_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_LOKASISURVEY_1];
lyr_LOKASISURVEY_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'Kelurahan': 'Kelurahan', 'KABUPATEN': 'KABUPATEN', 'Luas_Km2': 'Luas_Km2', });
lyr_LOKASISURVEY_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'Kelurahan': 'TextEdit', 'KABUPATEN': 'TextEdit', 'Luas_Km2': 'TextEdit', });
lyr_LOKASISURVEY_1.set('fieldLabels', {'PROVINSI': 'inline label', 'KECAMATAN': 'inline label', 'Kelurahan': 'inline label', 'KABUPATEN': 'inline label', 'Luas_Km2': 'inline label', });
lyr_LOKASISURVEY_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});