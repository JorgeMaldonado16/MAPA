ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32717").setExtent([638811.086800, 9576161.325100, 666563.636000, 9594619.016100]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VIAS_1 = new ol.format.GeoJSON();
var features_VIAS_1 = format_VIAS_1.readFeatures(json_VIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_VIAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIAS_1.addFeatures(features_VIAS_1);
var lyr_VIAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIAS_1, 
                style: style_VIAS_1,
                popuplayertitle: 'VIAS',
                interactive: true,
                title: '<img src="styles/legend/VIAS_1.png" /> VIAS'
            });
var format_RIOS_2 = new ol.format.GeoJSON();
var features_RIOS_2 = format_RIOS_2.readFeatures(json_RIOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_RIOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOS_2.addFeatures(features_RIOS_2);
var lyr_RIOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIOS_2, 
                style: style_RIOS_2,
                popuplayertitle: 'RIOS',
                interactive: true,
                title: '<img src="styles/legend/RIOS_2.png" /> RIOS'
            });
var format_zONAURBANA_3 = new ol.format.GeoJSON();
var features_zONAURBANA_3 = format_zONAURBANA_3.readFeatures(json_zONAURBANA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_zONAURBANA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zONAURBANA_3.addFeatures(features_zONAURBANA_3);
var lyr_zONAURBANA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zONAURBANA_3, 
                style: style_zONAURBANA_3,
                popuplayertitle: 'zONA URBANA',
                interactive: true,
                title: '<img src="styles/legend/zONAURBANA_3.png" /> zONA URBANA'
            });
var format_EDIFICACIONES_4 = new ol.format.GeoJSON();
var features_EDIFICACIONES_4 = format_EDIFICACIONES_4.readFeatures(json_EDIFICACIONES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_EDIFICACIONES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDIFICACIONES_4.addFeatures(features_EDIFICACIONES_4);
var lyr_EDIFICACIONES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDIFICACIONES_4, 
                style: style_EDIFICACIONES_4,
                popuplayertitle: 'EDIFICACIONES',
                interactive: true,
                title: '<img src="styles/legend/EDIFICACIONES_4.png" /> EDIFICACIONES'
            });
var format_CURVASDENIVEL_5 = new ol.format.GeoJSON();
var features_CURVASDENIVEL_5 = format_CURVASDENIVEL_5.readFeatures(json_CURVASDENIVEL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_CURVASDENIVEL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CURVASDENIVEL_5.addFeatures(features_CURVASDENIVEL_5);
var lyr_CURVASDENIVEL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CURVASDENIVEL_5, 
                style: style_CURVASDENIVEL_5,
                popuplayertitle: 'CURVAS DE NIVEL',
                interactive: true,
                title: '<img src="styles/legend/CURVASDENIVEL_5.png" /> CURVAS DE NIVEL'
            });
var format_RIOSSEC_6 = new ol.format.GeoJSON();
var features_RIOSSEC_6 = format_RIOSSEC_6.readFeatures(json_RIOSSEC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_RIOSSEC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOSSEC_6.addFeatures(features_RIOSSEC_6);
var lyr_RIOSSEC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIOSSEC_6, 
                style: style_RIOSSEC_6,
                popuplayertitle: 'RIOS SEC',
                interactive: true,
                title: '<img src="styles/legend/RIOSSEC_6.png" /> RIOS SEC'
            });
var format_POBLADOS_7 = new ol.format.GeoJSON();
var features_POBLADOS_7 = format_POBLADOS_7.readFeatures(json_POBLADOS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_POBLADOS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBLADOS_7.addFeatures(features_POBLADOS_7);
var lyr_POBLADOS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POBLADOS_7, 
                style: style_POBLADOS_7,
                popuplayertitle: 'POBLADOS',
                interactive: true,
                title: '<img src="styles/legend/POBLADOS_7.png" /> POBLADOS'
            });
var format_MINASZARUMA_8 = new ol.format.GeoJSON();
var features_MINASZARUMA_8 = format_MINASZARUMA_8.readFeatures(json_MINASZARUMA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_MINASZARUMA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINASZARUMA_8.addFeatures(features_MINASZARUMA_8);
var lyr_MINASZARUMA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINASZARUMA_8, 
                style: style_MINASZARUMA_8,
                popuplayertitle: 'MINAS ZARUMA',
                interactive: true,
                title: '<img src="styles/legend/MINASZARUMA_8.png" /> MINAS ZARUMA'
            });
var format_CONTAMINACION_9 = new ol.format.GeoJSON();
var features_CONTAMINACION_9 = format_CONTAMINACION_9.readFeatures(json_CONTAMINACION_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_CONTAMINACION_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTAMINACION_9.addFeatures(features_CONTAMINACION_9);
var lyr_CONTAMINACION_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTAMINACION_9, 
                style: style_CONTAMINACION_9,
                popuplayertitle: 'CONTAMINACION',
                interactive: true,
    title: 'CONTAMINACION<br />\
    <img src="styles/legend/CONTAMINACION_9_0.png" /> ALTO<br />\
    <img src="styles/legend/CONTAMINACION_9_1.png" /> BAJO<br />\
    <img src="styles/legend/CONTAMINACION_9_2.png" /> MEDIO<br />\
    <img src="styles/legend/CONTAMINACION_9_3.png" /> MUY ALTO<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_VIAS_1.setVisible(true);lyr_RIOS_2.setVisible(true);lyr_zONAURBANA_3.setVisible(true);lyr_EDIFICACIONES_4.setVisible(true);lyr_CURVASDENIVEL_5.setVisible(true);lyr_RIOSSEC_6.setVisible(true);lyr_POBLADOS_7.setVisible(true);lyr_MINASZARUMA_8.setVisible(true);lyr_CONTAMINACION_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_VIAS_1,lyr_RIOS_2,lyr_zONAURBANA_3,lyr_EDIFICACIONES_4,lyr_CURVASDENIVEL_5,lyr_RIOSSEC_6,lyr_POBLADOS_7,lyr_MINASZARUMA_8,lyr_CONTAMINACION_9];
lyr_VIAS_1.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'acc': 'acc', 'acc_desc': 'acc_desc', 'rst': 'rst', 'rst_desc': 'rst_desc', 'typ': 'typ', 'typ_desc': 'typ_desc', 'hct': 'hct', 'hct_desc': 'hct_desc', 'wtc': 'wtc', 'wtc_desc': 'wtc_desc', 'loc': 'loc', 'loc_desc': 'loc_desc', 'ltn': 'ltn', 'mes': 'mes', 'mes_desc': 'mes_desc', 'tuc': 'tuc', 'tuc_desc': 'tuc_desc', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RIOS_2.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'na2': 'na2', 'acc': 'acc', 'acc_desc': 'acc_desc', 'hyp': 'hyp', 'hyp_desc': 'hyp_desc', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_zONAURBANA_3.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'na2': 'na2', 'acc': 'acc', 'acc_desc': 'acc_desc', 'nute': 'nute', 'txt': 'txt', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_EDIFICACIONES_4.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'bfc_desc': 'bfc_desc', 'ebt': 'ebt', 'ebt_desc': 'ebt_desc', 'NORTE': 'NORTE', 'ESTE': 'ESTE', });
lyr_CURVASDENIVEL_5.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'acc': 'acc', 'acc_desc': 'acc_desc', 'hqc_desc': 'hqc_desc', 'ela_desc': 'ela_desc', 'crv': 'crv', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RIOSSEC_6.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'acc_desc': 'acc_desc', 'hyp_desc': 'hyp_desc', 'Shape_Leng': 'Shape_Leng', });
lyr_POBLADOS_7.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'na2': 'na2', 'ppt': 'ppt', 'ppt_desc': 'ppt_desc', 'nute': 'nute', 'txt': 'txt', 'NORTE': 'NORTE', 'ESTE': 'ESTE', });
lyr_MINASZARUMA_8.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'acc': 'acc', 'acc_desc': 'acc_desc', 'min_': 'min_', 'min_desc': 'min_desc', 'ppo': 'ppo', 'ppo_desc': 'ppo_desc', 'txt': 'txt', 'NORTE': 'NORTE', 'ESTE': 'ESTE', });
lyr_CONTAMINACION_9.set('fieldAliases', {'id': 'id', 'RIESGO': 'RIESGO', 'AREA Ha': 'AREA Ha', });
lyr_VIAS_1.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'rst': 'Range', 'rst_desc': 'TextEdit', 'typ': 'Range', 'typ_desc': 'TextEdit', 'hct': 'Range', 'hct_desc': 'TextEdit', 'wtc': 'Range', 'wtc_desc': 'TextEdit', 'loc': 'Range', 'loc_desc': 'TextEdit', 'ltn': 'Range', 'mes': 'Range', 'mes_desc': 'TextEdit', 'tuc': 'Range', 'tuc_desc': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_RIOS_2.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'na2': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'hyp': 'Range', 'hyp_desc': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_zONAURBANA_3.set('fieldImages', {'fcode': '', 'descripcio': '', 'nam': '', 'na2': '', 'acc': '', 'acc_desc': '', 'nute': '', 'txt': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_EDIFICACIONES_4.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'bfc_desc': 'TextEdit', 'ebt': 'Range', 'ebt_desc': 'TextEdit', 'NORTE': '', 'ESTE': '', });
lyr_CURVASDENIVEL_5.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'hqc_desc': 'TextEdit', 'ela_desc': 'TextEdit', 'crv': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_RIOSSEC_6.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'acc_desc': 'TextEdit', 'hyp_desc': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_POBLADOS_7.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'na2': 'TextEdit', 'ppt': 'Range', 'ppt_desc': 'TextEdit', 'nute': 'TextEdit', 'txt': 'TextEdit', 'NORTE': 'TextEdit', 'ESTE': 'TextEdit', });
lyr_MINASZARUMA_8.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'min_': 'Range', 'min_desc': 'TextEdit', 'ppo': 'Range', 'ppo_desc': 'TextEdit', 'txt': 'TextEdit', 'NORTE': 'TextEdit', 'ESTE': 'TextEdit', });
lyr_CONTAMINACION_9.set('fieldImages', {'id': 'TextEdit', 'RIESGO': 'TextEdit', 'AREA Ha': 'TextEdit', });
lyr_VIAS_1.set('fieldLabels', {'fcode': 'hidden field', 'descripcio': 'inline label - always visible', 'acc': 'hidden field', 'acc_desc': 'hidden field', 'rst': 'hidden field', 'rst_desc': 'inline label - always visible', 'typ': 'hidden field', 'typ_desc': 'inline label - always visible', 'hct': 'hidden field', 'hct_desc': 'header label - always visible', 'wtc': 'hidden field', 'wtc_desc': 'hidden field', 'loc': 'hidden field', 'loc_desc': 'hidden field', 'ltn': 'hidden field', 'mes': 'hidden field', 'mes_desc': 'hidden field', 'tuc': 'hidden field', 'tuc_desc': 'hidden field', 'txt': 'hidden field', 'SHAPE_Leng': 'inline label - always visible', });
lyr_RIOS_2.set('fieldLabels', {'fcode': 'hidden field', 'descripcio': 'inline label - always visible', 'nam': 'inline label - always visible', 'na2': 'hidden field', 'acc': 'hidden field', 'acc_desc': 'hidden field', 'hyp': 'hidden field', 'hyp_desc': 'hidden field', 'txt': 'hidden field', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_zONAURBANA_3.set('fieldLabels', {'fcode': 'hidden field', 'descripcio': 'inline label - always visible', 'nam': 'inline label - always visible', 'na2': 'hidden field', 'acc': 'hidden field', 'acc_desc': 'hidden field', 'nute': 'hidden field', 'txt': 'hidden field', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_EDIFICACIONES_4.set('fieldLabels', {'fcode': 'hidden field', 'descripcio': 'inline label - always visible', 'nam': 'inline label - always visible', 'bfc_desc': 'inline label - always visible', 'ebt': 'hidden field', 'ebt_desc': 'inline label - always visible', 'NORTE': 'inline label - always visible', 'ESTE': 'inline label - always visible', });
lyr_CURVASDENIVEL_5.set('fieldLabels', {'fcode': 'hidden field', 'descripcio': 'hidden field', 'acc': 'hidden field', 'acc_desc': 'hidden field', 'hqc_desc': 'hidden field', 'ela_desc': 'hidden field', 'crv': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', });
lyr_RIOSSEC_6.set('fieldLabels', {'fcode': 'hidden field', 'descripcio': 'inline label - always visible', 'nam': 'inline label - always visible', 'acc_desc': 'hidden field', 'hyp_desc': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', });
lyr_POBLADOS_7.set('fieldLabels', {'fcode': 'hidden field', 'descripcio': 'inline label - always visible', 'nam': 'inline label - always visible', 'na2': 'hidden field', 'ppt': 'hidden field', 'ppt_desc': 'hidden field', 'nute': 'hidden field', 'txt': 'inline label - always visible', 'NORTE': 'inline label - always visible', 'ESTE': 'inline label - always visible', });
lyr_MINASZARUMA_8.set('fieldLabels', {'fcode': 'inline label - always visible', 'descripcio': 'inline label - always visible', 'nam': 'inline label - always visible', 'acc': 'hidden field', 'acc_desc': 'hidden field', 'min_': 'hidden field', 'min_desc': 'hidden field', 'ppo': 'hidden field', 'ppo_desc': 'inline label - always visible', 'txt': 'hidden field', 'NORTE': 'inline label - always visible', 'ESTE': 'inline label - always visible', });
lyr_CONTAMINACION_9.set('fieldLabels', {'id': 'inline label - always visible', 'RIESGO': 'inline label - always visible', 'AREA Ha': 'inline label - always visible', });
lyr_CONTAMINACION_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});