ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([678404.663480, 5931152.671830, 678757.842783, 5931395.899086]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Colector_1 = new ol.format.GeoJSON();
var features_Colector_1 = format_Colector_1.readFeatures(json_Colector_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Colector_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_1.addFeatures(features_Colector_1);
var lyr_Colector_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_1, 
                style: style_Colector_1,
                popuplayertitle: 'Colector',
                interactive: true,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_1_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Colector_1_1.png" /> VERIFICADO<br />\
    <img src="styles/legend/Colector_1_2.png" /> SEMI VERIFICADO<br />' });
var format_Cmara_2 = new ol.format.GeoJSON();
var features_Cmara_2 = format_Cmara_2.readFeatures(json_Cmara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Cmara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_2.addFeatures(features_Cmara_2);
var lyr_Cmara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_2, 
                style: style_Cmara_2,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_2_0.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_2_1.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_2_2.png" /> SELLADA<br />\
    <img src="styles/legend/Cmara_2_3.png" /> NO ENCONTRADA<br />' });
var group_Solicitud = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Solicitud'});
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_1,lyr_Cmara_2,],
                                fold: 'open',
                                title: 'Levantamiento'});
var group_Referencial = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Referencial'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Colector_1.setVisible(true);lyr_Cmara_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Levantamiento];
lyr_Colector_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Cmara_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'COTA ENTRADA 1': 'COTA ENTRADA 1', 'COTA ENTRADA 2': 'COTA ENTRADA 2', 'COTA ENTRADA 3': 'COTA ENTRADA 3', 'COTA ENTRADA 4': 'COTA ENTRADA 4', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'COTA ENTRADA 5': 'COTA ENTRADA 5', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'PROFUNDIDAD ENTRADA 1': 'PROFUNDIDAD ENTRADA 1', 'PROFUNDIDAD ENTRADA 2': 'PROFUNDIDAD ENTRADA 2', 'PROFUNDIDAD ENTRADA 4': 'PROFUNDIDAD ENTRADA 4', 'PROFUNDIDAD ENTRADA 5': 'PROFUNDIDAD ENTRADA 5', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'PROFUNDIDAD SALIDA': 'PROFUNDIDAD SALIDA', 'PROFUNDIDAD ENTRADA 3': 'PROFUNDIDAD ENTRADA 3', 'DIAMETRO SALIDA': 'DIAMETRO SALIDA', 'E_UTM (m)': 'E_UTM (m)', 'N_UTM (m)': 'N_UTM (m)', 'ELEV_UTM (m)': 'ELEV_UTM (m)', 'PROFUNDIDAD CANAL (m)': 'PROFUNDIDAD CANAL (m)', 'COTA CANAL UTM (m)': 'COTA CANAL UTM (m)', 'FALLA ESTRUCTURAL': 'FALLA ESTRUCTURAL', 'EMBANCAMIENTO': 'EMBANCAMIENTO', 'ESTADO CANAL': 'ESTADO CANAL', 'ESTADO BANQUETA': 'ESTADO BANQUETA', 'ESTADO ESCALINES': 'ESTADO ESCALINES', 'NAPA': 'NAPA', 'COMUNA': 'COMUNA', 'DIAMETRO SALIDA 2': 'DIAMETRO SALIDA 2', });
lyr_Colector_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'TextEdit', 'CAMARA_INICIO': 'TextEdit', 'CAMARA_FINAL': 'TextEdit', 'OBSERVACIONES': 'TextEdit', });
lyr_Cmara_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'COTA ENTRADA 1': 'TextEdit', 'COTA ENTRADA 2': 'TextEdit', 'COTA ENTRADA 3': 'TextEdit', 'COTA ENTRADA 4': 'TextEdit', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'COTA ENTRADA 5': 'TextEdit', 'DIAMETRO ENTRADA 1': 'TextEdit', 'DIAMETRO ENTRADA 2': 'TextEdit', 'DIAMETRO ENTRADA 3': 'TextEdit', 'DIAMETRO ENTRADA 4': 'TextEdit', 'DIAMETRO ENTRADA 5': 'TextEdit', 'PROFUNDIDAD ENTRADA 1': 'TextEdit', 'PROFUNDIDAD ENTRADA 2': 'TextEdit', 'PROFUNDIDAD ENTRADA 4': 'TextEdit', 'PROFUNDIDAD ENTRADA 5': 'TextEdit', 'PROFUNDIDAD FONDO': 'TextEdit', 'PROFUNDIDAD SALIDA': 'TextEdit', 'PROFUNDIDAD ENTRADA 3': 'TextEdit', 'DIAMETRO SALIDA': 'TextEdit', 'E_UTM (m)': '', 'N_UTM (m)': '', 'ELEV_UTM (m)': '', 'PROFUNDIDAD CANAL (m)': '', 'COTA CANAL UTM (m)': '', 'FALLA ESTRUCTURAL': '', 'EMBANCAMIENTO': '', 'ESTADO CANAL': '', 'ESTADO BANQUETA': '', 'ESTADO ESCALINES': '', 'NAPA': '', 'COMUNA': '', 'DIAMETRO SALIDA 2': '', });
lyr_Colector_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', 'ESTADO': 'inline label - visible with data', 'DIAMETRO': 'inline label - visible with data', 'CAMARA_INICIO': 'inline label - visible with data', 'CAMARA_FINAL': 'inline label - visible with data', 'OBSERVACIONES': 'hidden field', });
lyr_Cmara_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'COTA ENTRADA 1': 'hidden field', 'COTA ENTRADA 2': 'hidden field', 'COTA ENTRADA 3': 'hidden field', 'COTA ENTRADA 4': 'hidden field', 'ESCALINES': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'inline label - visible with data', 'COTA SALIDA': 'hidden field', 'COTA ENTRADA 5': 'hidden field', 'DIAMETRO ENTRADA 1': 'hidden field', 'DIAMETRO ENTRADA 2': 'hidden field', 'DIAMETRO ENTRADA 3': 'hidden field', 'DIAMETRO ENTRADA 4': 'hidden field', 'DIAMETRO ENTRADA 5': 'hidden field', 'PROFUNDIDAD ENTRADA 1': 'hidden field', 'PROFUNDIDAD ENTRADA 2': 'hidden field', 'PROFUNDIDAD ENTRADA 4': 'hidden field', 'PROFUNDIDAD ENTRADA 5': 'hidden field', 'PROFUNDIDAD FONDO': 'hidden field', 'PROFUNDIDAD SALIDA': 'hidden field', 'PROFUNDIDAD ENTRADA 3': 'hidden field', 'DIAMETRO SALIDA': 'hidden field', 'E_UTM (m)': 'header label - visible with data', 'N_UTM (m)': 'header label - visible with data', 'ELEV_UTM (m)': 'header label - visible with data', 'PROFUNDIDAD CANAL (m)': 'header label - visible with data', 'COTA CANAL UTM (m)': 'header label - visible with data', 'FALLA ESTRUCTURAL': 'hidden field', 'EMBANCAMIENTO': 'inline label - visible with data', 'ESTADO CANAL': 'inline label - visible with data', 'ESTADO BANQUETA': 'inline label - visible with data', 'ESTADO ESCALINES': 'inline label - visible with data', 'NAPA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'DIAMETRO SALIDA 2': 'hidden field', });
lyr_Cmara_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});