var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Zonedevgtation_1 = new ol.format.GeoJSON();
var features_Zonedevgtation_1 = format_Zonedevgtation_1.readFeatures(json_Zonedevgtation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonedevgtation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedevgtation_1.addFeatures(features_Zonedevgtation_1);
var lyr_Zonedevgtation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonedevgtation_1, 
                style: style_Zonedevgtation_1,
                popuplayertitle: 'Zone de végétation',
                interactive: true,
    title: 'Zone de végétation<br />\
            
    <img src="styles/legend/Zonedevgtation_1_0.png" /> Bananeraie<br />\
    <img src="styles/legend/Zonedevgtation_1_1.png" /> Bois<br />\
    <img src="styles/legend/Zonedevgtation_1_2.png" /> Canne à sucre<br />\
    <img src="styles/legend/Zonedevgtation_1_3.png" /> Forêt fermée de conifères<br />\
    <img src="styles/legend/Zonedevgtation_1_4.png" /> Forêt fermée de feuillus<br />\
    <img src="styles/legend/Zonedevgtation_1_5.png" /> Haie<br />\
    <img src="styles/legend/Zonedevgtation_1_6.png" /> Lande ligneuse<br />\
    <img src="styles/legend/Zonedevgtation_1_7.png" /> Verger<br />\
    <img src="styles/legend/Zonedevgtation_1_8.png" /> Vigne<br />\
    <img src="styles/legend/Zonedevgtation_1_9.png" /> <br />' });
var format_Bati_2 = new ol.format.GeoJSON();
var features_Bati_2 = format_Bati_2.readFeatures(json_Bati_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bati_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bati_2.addFeatures(features_Bati_2);
var lyr_Bati_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bati_2, 
                style: style_Bati_2,
                popuplayertitle: 'Bati',
                interactive: false,
                title: '<img src="styles/legend/Bati_2.png" /> Bati'
            });
var format_Parcelle_3 = new ol.format.GeoJSON();
var features_Parcelle_3 = format_Parcelle_3.readFeatures(json_Parcelle_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelle_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelle_3.addFeatures(features_Parcelle_3);
var lyr_Parcelle_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelle_3, 
                style: style_Parcelle_3,
                popuplayertitle: 'Parcelle',
                interactive: false,
                title: '<img src="styles/legend/Parcelle_3.png" /> Parcelle'
            });
var format_Commune_4 = new ol.format.GeoJSON();
var features_Commune_4 = format_Commune_4.readFeatures(json_Commune_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_4.addFeatures(features_Commune_4);
var lyr_Commune_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_4, 
                style: style_Commune_4,
                popuplayertitle: 'Commune',
                interactive: false,
                title: '<img src="styles/legend/Commune_4.png" /> Commune'
            });
var group_ZoneSaintPhilippe = new ol.layer.Group({
                                layers: [lyr_Zonedevgtation_1,lyr_Bati_2,lyr_Parcelle_3,lyr_Commune_4,],
                                fold: 'open',
                                title: 'Zone Saint Philippe'});
var group_Fond_de_plan = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: 'open',
                                title: 'Fond_de_plan'});

lyr_OSMStandard_0.setVisible(true);lyr_Zonedevgtation_1.setVisible(true);lyr_Bati_2.setVisible(true);lyr_Parcelle_3.setVisible(true);lyr_Commune_4.setVisible(true);
var layersList = [group_Fond_de_plan,group_ZoneSaintPhilippe];
lyr_Zonedevgtation_1.set('fieldAliases', {'ID': 'ID', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'NATURE': 'NATURE', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', });
lyr_Bati_2.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'USAGE1': 'USAGE1', 'USAGE2': 'USAGE2', 'LEGER': 'LEGER', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_LOGTS': 'NB_LOGTS', 'NB_ETAGES': 'NB_ETAGES', 'MAT_MURS': 'MAT_MURS', 'MAT_TOITS': 'MAT_TOITS', 'HAUTEUR': 'HAUTEUR', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'APP_FF': 'APP_FF', 'IDS_RNB': 'IDS_RNB', });
lyr_Parcelle_3.set('fieldAliases', {'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'created': 'created', 'updated': 'updated', });
lyr_Commune_4.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', });
lyr_Zonedevgtation_1.set('fieldImages', {'ID': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NATURE': 'TextEdit', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', });
lyr_Bati_2.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'USAGE1': 'TextEdit', 'USAGE2': 'TextEdit', 'LEGER': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_LOGTS': 'Range', 'NB_ETAGES': 'Range', 'MAT_MURS': 'TextEdit', 'MAT_TOITS': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'APP_FF': 'TextEdit', 'IDS_RNB': 'TextEdit', });
lyr_Parcelle_3.set('fieldImages', {'id': 'TextEdit', 'commune': 'TextEdit', 'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', });
lyr_Commune_4.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'NOM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'POPULATION': 'Range', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'SIREN_EPCI': 'TextEdit', });
lyr_Zonedevgtation_1.set('fieldLabels', {'ID': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'NATURE': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ID_SOURCE': 'hidden field', 'DATE_CREAT': 'inline label - always visible', 'DATE_MAJ': 'inline label - always visible', });
lyr_Bati_2.set('fieldLabels', {'ID': 'no label', 'NATURE': 'no label', 'USAGE1': 'no label', 'USAGE2': 'no label', 'LEGER': 'no label', 'ETAT': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'SOURCE': 'no label', 'ID_SOURCE': 'no label', 'ACQU_PLANI': 'no label', 'ACQU_ALTI': 'no label', 'PREC_PLANI': 'no label', 'PREC_ALTI': 'no label', 'NB_LOGTS': 'no label', 'NB_ETAGES': 'no label', 'MAT_MURS': 'no label', 'MAT_TOITS': 'no label', 'HAUTEUR': 'no label', 'Z_MIN_SOL': 'no label', 'Z_MIN_TOIT': 'no label', 'Z_MAX_TOIT': 'no label', 'Z_MAX_SOL': 'no label', 'ORIGIN_BAT': 'no label', 'APP_FF': 'no label', 'IDS_RNB': 'no label', });
lyr_Parcelle_3.set('fieldLabels', {'id': 'no label', 'commune': 'no label', 'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'contenance': 'no label', 'created': 'no label', 'updated': 'no label', });
lyr_Commune_4.set('fieldLabels', {'ID': 'hidden field', 'NOM': 'no label', 'NOM_M': 'hidden field', 'INSEE_COM': 'hidden field', 'STATUT': 'hidden field', 'POPULATION': 'hidden field', 'INSEE_CAN': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', });
lyr_Commune_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
