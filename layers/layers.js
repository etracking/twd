var wms_layers = [];


        var lyr_Geodata_0 = new ol.layer.Tile({
            'title': 'Geodata',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/basemap/WGS84/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ib20000_2 = new ol.layer.Tile({
            'title': 'ib20000',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://etrack.freemyip.com/2023-06-QPNG/{z}/{x}/{y}.png'
            })
        });
var format_TWD_3 = new ol.format.GeoJSON();
var features_TWD_3 = format_TWD_3.readFeatures(json_TWD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TWD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TWD_3.addFeatures(features_TWD_3);
var lyr_TWD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TWD_3, 
                style: style_TWD_3,
                popuplayertitle: "TWD",
                interactive: false,
                title: '<img src="styles/legend/TWD_3.png" /> TWD'
            });
var format_UTM_4 = new ol.format.GeoJSON();
var features_UTM_4 = format_UTM_4.readFeatures(json_UTM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTM_4.addFeatures(features_UTM_4);
var lyr_UTM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTM_4, 
                style: style_UTM_4,
                popuplayertitle: "UTM",
                interactive: true,
                title: '<img src="styles/legend/UTM_4.png" /> UTM'
            });

        var lyr_Geodata_Label_5 = new ol.layer.Tile({
            'title': 'Geodata_Label',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/tc/WGS84/{z}/{x}/{y}.png'
            })
        });
var format_TWD_Group_6 = new ol.format.GeoJSON();
var features_TWD_Group_6 = format_TWD_Group_6.readFeatures(json_TWD_Group_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TWD_Group_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TWD_Group_6.addFeatures(features_TWD_Group_6);
var lyr_TWD_Group_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TWD_Group_6, 
                style: style_TWD_Group_6,
                popuplayertitle: "TWD_Group",
                interactive: true,
                title: '<img src="styles/legend/TWD_Group_6.png" /> TWD_Group'
            });

lyr_Geodata_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ib20000_2.setVisible(true);lyr_TWD_3.setVisible(true);lyr_UTM_4.setVisible(false);lyr_Geodata_Label_5.setVisible(true);lyr_TWD_Group_6.setVisible(true);
var layersList = [lyr_Geodata_0,lyr_OSMStandard_1,lyr_ib20000_2,lyr_TWD_3,lyr_UTM_4,lyr_Geodata_Label_5,lyr_TWD_Group_6];
lyr_TWD_3.set('fieldAliases', {'fid': 'fid', });
lyr_UTM_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'Zone': 'Zone', 'GR': 'GR', 'layer': 'layer', 'path': 'path', });
lyr_TWD_Group_6.set('fieldAliases', {'fid': 'fid', '旅號': '旅號', 'field_2': 'field_2', 'field_3': 'field_3', '小童軍': '小童軍', '幼童軍': '幼童軍', '童軍': '童軍', '深資童軍': '深資童軍', '樂行童軍': '樂行童軍', '旅務委員會': '旅務委員會', });
lyr_TWD_3.set('fieldImages', {'fid': '', });
lyr_UTM_4.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'left': 'Hidden', 'top': 'Hidden', 'right': 'Hidden', 'bottom': 'Hidden', 'Zone': 'Hidden', 'GR': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_TWD_Group_6.set('fieldImages', {'fid': '', '旅號': '', 'field_2': '', 'field_3': '', '小童軍': '', '幼童軍': '', '童軍': '', '深資童軍': '', '樂行童軍': '', '旅務委員會': '', });
lyr_TWD_3.set('fieldLabels', {'fid': 'no label', });
lyr_UTM_4.set('fieldLabels', {});
lyr_TWD_Group_6.set('fieldLabels', {'fid': 'hidden field', '旅號': 'inline label - always visible', 'field_2': 'inline label - always visible', 'field_3': 'inline label - always visible', '小童軍': 'inline label - always visible', '幼童軍': 'inline label - always visible', '童軍': 'inline label - always visible', '深資童軍': 'inline label - always visible', '樂行童軍': 'inline label - always visible', '旅務委員會': 'inline label - always visible', });
lyr_TWD_Group_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});