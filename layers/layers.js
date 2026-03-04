ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([677012.788810, 5930664.868610, 679762.601929, 5932558.607833]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Colector_2 = new ol.format.GeoJSON();
var features_Colector_2 = format_Colector_2.readFeatures(json_Colector_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Colector_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_2.addFeatures(features_Colector_2);
var lyr_Colector_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_2, 
                style: style_Colector_2,
                popuplayertitle: 'Colector',
                interactive: true,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_2_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Colector_2_1.png" /> VERIFICADO<br />' });
var format_Cmara_3 = new ol.format.GeoJSON();
var features_Cmara_3 = format_Cmara_3.readFeatures(json_Cmara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Cmara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_3.addFeatures(features_Cmara_3);
var lyr_Cmara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_3, 
                style: style_Cmara_3,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_3_0.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_3_1.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_3_2.png" /> SELLADA<br />\
    <img src="styles/legend/Cmara_3_3.png" /> NO ENCONTRADA<br />' });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_2,lyr_Cmara_3,],
                                fold: 'open',
                                title: 'Levantamiento'});
var group_Referencial = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Referencial'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_Colector_2.setVisible(true);lyr_Cmara_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,group_Levantamiento];
lyr_Colector_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Cmara_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'COTA ENTRADA 1': 'COTA ENTRADA 1', 'COTA ENTRADA 2': 'COTA ENTRADA 2', 'COTA ENTRADA 3': 'COTA ENTRADA 3', 'COTA ENTRADA 4': 'COTA ENTRADA 4', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'COTA ENTRADA 5': 'COTA ENTRADA 5', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'PROFUNDIDAD ENTRADA 1': 'PROFUNDIDAD ENTRADA 1', 'PROFUNDIDAD ENTRADA 2': 'PROFUNDIDAD ENTRADA 2', 'PROFUNDIDAD ENTRADA 4': 'PROFUNDIDAD ENTRADA 4', 'PROFUNDIDAD ENTRADA 5': 'PROFUNDIDAD ENTRADA 5', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'PROFUNDIDAD SALIDA': 'PROFUNDIDAD SALIDA', 'PROFUNDIDAD ENTRADA 3': 'PROFUNDIDAD ENTRADA 3', 'DIAMETRO SALIDA': 'DIAMETRO SALIDA', 'E_UTM (m)': 'E_UTM (m)', 'N_UTM (m)': 'N_UTM (m)', 'ELEV_UTM (m)': 'ELEV_UTM (m)', 'PROFUNDIDAD CANAL (m)': 'PROFUNDIDAD CANAL (m)', 'COTA CANAL UTM (m)': 'COTA CANAL UTM (m)', });
lyr_Colector_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'TextEdit', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', });
lyr_Cmara_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'COTA ENTRADA 1': 'TextEdit', 'COTA ENTRADA 2': 'TextEdit', 'COTA ENTRADA 3': 'TextEdit', 'COTA ENTRADA 4': 'TextEdit', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'COTA ENTRADA 5': 'TextEdit', 'DIAMETRO ENTRADA 1': 'TextEdit', 'DIAMETRO ENTRADA 2': 'TextEdit', 'DIAMETRO ENTRADA 3': 'TextEdit', 'DIAMETRO ENTRADA 4': 'TextEdit', 'DIAMETRO ENTRADA 5': 'TextEdit', 'PROFUNDIDAD ENTRADA 1': 'TextEdit', 'PROFUNDIDAD ENTRADA 2': 'TextEdit', 'PROFUNDIDAD ENTRADA 4': 'TextEdit', 'PROFUNDIDAD ENTRADA 5': 'TextEdit', 'PROFUNDIDAD FONDO': 'TextEdit', 'PROFUNDIDAD SALIDA': 'TextEdit', 'PROFUNDIDAD ENTRADA 3': 'TextEdit', 'DIAMETRO SALIDA': 'TextEdit', 'E_UTM (m)': '', 'N_UTM (m)': '', 'ELEV_UTM (m)': '', 'PROFUNDIDAD CANAL (m)': '', 'COTA CANAL UTM (m)': '', });
lyr_Colector_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', 'ESTADO': 'inline label - visible with data', 'DIAMETRO': 'inline label - visible with data', 'CAMARA_INICIO': 'inline label - visible with data', 'CAMARA_FINAL': 'inline label - visible with data', 'OBSERVACIONES': 'hidden field', });
lyr_Cmara_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'COTA ENTRADA 1': 'hidden field', 'COTA ENTRADA 2': 'hidden field', 'COTA ENTRADA 3': 'hidden field', 'COTA ENTRADA 4': 'hidden field', 'ESCALINES': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'inline label - visible with data', 'COTA SALIDA': 'hidden field', 'COTA ENTRADA 5': 'hidden field', 'DIAMETRO ENTRADA 1': 'hidden field', 'DIAMETRO ENTRADA 2': 'hidden field', 'DIAMETRO ENTRADA 3': 'hidden field', 'DIAMETRO ENTRADA 4': 'hidden field', 'DIAMETRO ENTRADA 5': 'hidden field', 'PROFUNDIDAD ENTRADA 1': 'hidden field', 'PROFUNDIDAD ENTRADA 2': 'hidden field', 'PROFUNDIDAD ENTRADA 4': 'hidden field', 'PROFUNDIDAD ENTRADA 5': 'hidden field', 'PROFUNDIDAD FONDO': 'hidden field', 'PROFUNDIDAD SALIDA': 'hidden field', 'PROFUNDIDAD ENTRADA 3': 'hidden field', 'DIAMETRO SALIDA': 'hidden field', 'E_UTM (m)': 'header label - visible with data', 'N_UTM (m)': 'header label - visible with data', 'ELEV_UTM (m)': 'header label - visible with data', 'PROFUNDIDAD CANAL (m)': 'header label - visible with data', 'COTA CANAL UTM (m)': 'header label - visible with data', });
lyr_Cmara_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});