document.querySelectorAll(".fecha-elegida").forEach(fechita => fechita.addEventListener("change", e => {
    const identificador = e.target.getAttribute("id");
    let fecha = document.getElementById(identificador);
    let valorFecha = fecha.value;
    
    let fechaSinGuion = valorFecha.split('-');
    
    let fechaReversada = fechaSinGuion.reverse();
    
    let fechaFormateada = fechaReversada.join('/');


    switch (identificador) {
            case "fecha-nacimiento":
                    document.getElementById("00NDn00000FTTBH").value = fechaFormateada;
                    break;
            case "fecha-inicio":
                    document.getElementById("00NDn00000FTUFZ").value = fechaFormateada;
                    break;
            case "fecha-finalizacion":
                document.getElementById("00NDn00000FTUJw").value = fechaFormateada;
                break;
            case "fecha-inicio2":
                document.getElementById("00NDn00000FTUJr").value = fechaFormateada;
                break;
            case "fecha-finalizacion2":
                document.getElementById("00NDn00000FTUK6").value = fechaFormateada;
                break;
            default:
                    break;
    }


}))

function mostrarEducActual() {
    let seleccion = document.getElementById("00NDn00000FTTMv").value;
    
    if (seleccion == 'SI') {
        document.getElementById('titulo-aspira').style.display = 'block';
        document.querySelectorAll(".campo-requerido").forEach(campo => campo.required =true);

    }else if(seleccion == 'No'){
        document.getElementById('titulo-aspira').style.display = 'none';
        document.querySelectorAll(".campo-requerido").forEach(campo => campo.required =false);
        document.querySelectorAll(".campo-requerido").forEach(campo => campo.value = '');
    }else{
        document.getElementById('titulo-aspira').style.display = 'none';
        document.querySelectorAll(".campo-requerido").forEach(campo => campo.value = '');
    }
}


function mostrarExpLaboral() {
    let seleccion = document.getElementById("00NDn00000FTTja").value;
    
    if (seleccion == 'SI') {
        document.getElementById('experiencia-laboral').style.display = 'block';
    }else if(seleccion == 'No'){
        document.getElementById('experiencia-laboral').style.display = 'none';
        document.querySelectorAll(".limpia-campos").forEach(campo => campo.value = '');
    }else{
        document.getElementById('experiencia-laboral').style.display = 'none';
        document.querySelectorAll(".limpia-campos").forEach(campo => campo.value = '');
    }
}

function cargarCiudades() {
    let listaCiudades = {
        Antioquia: ["Medellín","Abejorral","Abriaquí","Alejandría","Amaga","Amalfi","Andes","Angelopolis","Angostura","Anorí","Santafé De Antioquia","Anza","Apartadó","Arboletes","Argelia","Armenia","Barbosa","Belmira","Bello","Betania","Betulia","Ciudad Bolívar","Briceño","Buriticá","Cáceres","Caicedo","Caldas","Campamento","Cañasgordas","Caracolí","Caramanta","Carepa","Carmen De Viboral","Carolina","Caucasia","Chigorodó","Cisneros","Cocorná","Concepción","Concordia","Copacabana","Dabeiba","Don Matias","Ebéjico","El Bagre","Entrerrios","Envigado","Fredonia","Frontino","Giraldo","Girardota","Gómez Plata","Granada","Guadalupe","Guarne","Guatape","Heliconia","Hispania","Itagui","Ituango","Jardín","Jericó","La Ceja","La Estrella","La Pintada","La Unión","Liborina","Maceo","Marinilla","Montebello","Murindó","Mutata","Nariño","Necoclí","Nechí","Olaya","Peñol","Peque","Pueblorrico","Puerto Berrio","Puerto Nare","Puerto Triunfo","Remedios","Retiro","Rionegro","Sabanalarga (ANT)","Sabaneta","Salgar","San Andrés","San Carlos","San Francisco","San Jerónimo","San José De La Montaña","San Juan De Uraba","San Luis","San Pedro","San Pedro De Uraba","San Rafael","San Roque","San Vicente","Santa Barbara","Santa Rosa De Osos","Santo Domingo","Santuario","Segovia","Sonson","Sopetran","Támesis","Tarazá","Tarso","Titiribí","Toledo","Turbo","Uramita","Urrao","Valdivia","Valparaiso","Vegachí","Venecia","Vigía Del Fuerte","Yalí","Yarumal","Yolombó","Yondó","Zaragoza"],
	    Atlántico: ["Barranquilla","Baranoa","Campo De La Cruz","Galapa","Juan De Acosta","Luruaco","Malambo","Manati","Palmar De Varela","Ponedera","Puerto Colombia","Repelon","Sabanagrande","Sabanalarga(ATL)","Santa Lucia","Santo Tomas","Soledad"],
        "Bogotá D.C.": ["Bogotá D.C"],
        Bolívar: ["Cartagena","Achí","Arjona","Calamar","Córdoba","Carmen De Bolívar","Magangué","Mahates","María La Baja","Montecristo","Mompós","Morales","Pinillos","San Estanislao","San Jacinto","San Juan Nepomuceno","San Pablo","Santa Rosa De Lima","Santa Rosa Del Sur","Simití","Tiquisio","Turbaco","Turbana","Villanueva"],
	    Boyacá: ["Tunja","Almeida","Arcabuco","Berbeo","Boyacá","Briceño (BOY)","Busbanzá","Caldas (BOY)","Cerinza","Chiquinquirá","Chiscas","Chitaraque","Ciénega","Cubará","Duitama","Firavitoba","Floresta","Güicán","Iza","Jenesano","Labranzagrande","La Victoria","Villa De Leyva","Macanal","Mongua","Moniquirá","Otanche","Paipa","Pajarito","Panqueba","Pauna","Paya","Pesca","Puerto Boyaca","Ramiriquí","Sáchica","San Luis De Gaceno","San Pablo Borbur","Santa María","Santa Sofía","Sativanorte","Soatá","Socotá","Sogamoso","Somondoco","Soracá","Sutatenza","Tenza","Tibaná","Tinjacá","Togüí","Tota","Tuta","Umbita","Ventaquemada"],
	    Caldas: ["Manizales","Aguadas","Anserma","Aranzazu","Belalcázar","Chinchina","Filadelfia","La Dorada","Manzanares","Marquetalia","Neira","Pácora","Palestina","Pensilvania","Riosucio","Risaralda","Salamina","Samaná","Supía","Villamaria","Viterbo"],
	    Caquetá: ["Florencia","Belén De Los Andaquies","Cartagena Del Chairá","Currillo","El Doncello","El Paujil","La Montañita","Milan","Puerto Rico","San Jose Del Fragua","San Vicente Del Caguán","Solano","Valparaiso (CAQ)"],
	    Cauca: ["Popayán","Argelia (CAU)","Balboa","Bolívar","Buenos Aires","Cajibío","Caldono","Caloto","Corinto","El Tambo","Guapi","Inzá","La Vega","Lopez","Mercaderes","Miranda","Morales (CAU)","Paez","Patia","Piendamo","Puerto Tejada","Rosas","Santander De Quilichao","Silvia","Suarez","Timbio","Timbiqui","Toribio","Totoro","Villa Rica"],
	    Cesar: ["Valledupar","Aguachica","Agustín Codazzi","Astrea","Becerril","Bosconia","Chimichagua","Chiriguana","Curumaní","El Copey","El Paso","La Gloria","La Jagua De Ibirico","Pailitas","Pelaya","Pueblo Bello","Río De Oro","La Paz","San Alberto","San Diego","San Martín","Tamalameque"],
        Córdoba: ["Montería","Ayapel","Buenavista","Cereté","Chimá","Chinú","Ciénaga De Oro","Cotorra","Lorica","Los Córdobas","Momil","Montelíbano","Moñitos","Planeta Rica","Pueblo Nuevo","Puerto Escondido","Puerto Libertador","Sahagún","San Andrés Sotavento","San Antero","San Bernardo Del Viento","San Carlos (COR)","San Pelayo","Tierralta","Valencia"],
        Cundinamarca: ["Agua De Dios","Albán","Anapoima","Anolaima","Arbeláez","Bituima","Bojacá","Cabrera","Cachipay","Cajicá","Caparrapí","Caqueza","Carmen De Carupa","Chaguaní","Chía","Chipaque","Choachí","Chocontá","Cogua","Cota","Cucunubá","El Colegio","El Peñón","El Rosal","Facatativá","Fomeque","Fosca","Funza","Fúquene","Fusagasugá","Gachala","Gachancipá","Gacheta","Gama","Girardot","Granada (CUN)","Guachetá","Guaduas","Guasca","Guataquí","Guatavita","Guayabal De Siquima","Guayabetal","Junín","La Calera","La Mesa","La Palma","La Peña","La Vega (CUN)","Lenguazaque","Macheta","Madrid","Manta","Medina","Mosquera","Nilo","Nimaima","Nocaima","Venecia (CUN)","Pacho","Paime","Pandi","Paratebueno","Pasca","Puerto Salgar","Puli","Quebradanegra","Quetame","Quipile","Apulo","Ricaurte","San Antonio De Tequendama","San Bernardo","San Cayetano","San Francisco (CUN)","San Juan De Río Seco","Sasaima","Sesquilé","Sibaté","Silvania","Simijaca","Soacha","Sopó","Subachoque","Suesca","Supatá","Susa","Sutatausa","Tabio","Tausa","Tena","Tenjo","Tibacuy","Tibirita","Tocaima","Tocancipá","Topaipi","Ubalá","Ubaque","Ubate","Une","Útica","Vergara","Vianí","Villapinzón","Villeta","Viotá","Yacopí","Zipacon","Zipaquirá"],
        Chocó: ["Quibdó","Acandí","Alto Baudó","Atrato","Bagadó","Bahía Solano","Bajo Baudó","Belén De Bajira","Bojaya","Canton De San Pablo","Carmén Del Darién","Certegui","Condoto","El Carmen De Atrato","El Litoral Del San Juan","Itsmina","Juradó","Lloró","Medio Atrato","Medio Baudó","Medio San Juan","Nóvita","Nuquí","Río Frío","Rio Quito","Riosucio (CHO)","San José Del Palmar","Sipí","Tadó","Unguía","Union Panamericana"],
        Huila: ["Neiva","Acevedo","Agrado","Aipe","Algeciras","Altamira","Baraya","Campoalegre","Colombia","Elías","Garzón","Gigante","Guadalupe (HUI)","Hobo","Iquira","Isnos","La Argentina","La Plata","Nátaga","Oporapa","Paicol","Palermo","Palestina (HUI)","Pital","Pitalito","Rivera","Saladoblanco","San Agustín","Santa María (HUI)","Suaza","Tarqui","Tesalia","Tello","Teruel","Timaná","Villavieja","Yaguará"],
        "La Guajira": ["Riohacha","Albania","Barrancas","Dibulla","Distraccion","El Molino","Fonseca","Hatonuevo","La Jagua Del Pilar","Maicao","Manaure","San Juan Del Cesar","Uribia","Urumita","Villanueva (GUA)"],
        Magdalena: ["Santa Marta","Algarrobo","Aracataca","Ariguaní","Cerro San Antonio","Chibolo","Ciénaga","Concordia (MAG)","El Banco","El Piñon","El Reten","Fundacion","Guamal","Nueva Granada","Pedraza","Pijiño Del Carmen","Pivijay","Plato","Pueblo Viejo","Remolino","Sabanas De San Angel","Salamina (MAG)","San Sebastian De Buenavista","San Zenon","Santa Ana","Santa Barbara De Pinto","Sitionuevo","Tenerife","Zapayan","Zona Bananera"],
        Meta: ["Villavicencio","Acacias","Barranca De Upia","Cabuyaro","Castilla La Nueva","San Luis De Cubarral","Cumaral","El Calvario","El Castillo","El Dorado","Fuente De Oro","Granada (MET)","Guamal (MET)","Mapiripan","Mesetas","La Macarena","La Uribe","Lejanías","Puerto Concordia","Puerto Gaitán","Puerto Lopez","Puerto Lleras","Puerto Rico (MET)","Restrepo","San Carlos Guaroa","San Juan De Arama","San Juanito","San Martín (MET)","Vista Hermosa"],
        Nariño: ["Pasto","Alban","Aldana","Ancuya","Arboleda","Barbacoas","Belen","Buesaco","Colon","Consaca","Contadero","Córdoba (NAR)","Cuaspud","Cumbal","Cumbitara","Chachagui","El Charco","El Peñol","El Rosario","El Tablon De Gomez","El Tambo (NAR)","Funes","Guachucal","Guaitarilla","Gualmatan","Iles","Imues","Ipiales","La Cruz","La Florida","La Llanada","La Tola","La Union","Leiva","Linares","Los Andes","Magui","Mallama","Mosquera (NAR)","Nariño (NAR)","Olaya Herrera","Ospina","Francisco Pizarro","Policarpa","Potosí","Providencia","Puerres","Pupiales","Ricaurte (NAR)","Roberto Payan","Samaniego","Sandoná","San Bernardo (NAR)","San Lorenzo","San Pablo (NAR)","San Pedro De Cartago","Santa Barbara (NAR)","Santa Cruz","Sapuyes","Taminango","Tangua","Tumaco","Tuquerres","Yacuanquer"],
        "Norte de Santander": ["Cúcuta","Abrego","Arboledas","Bochalema","Bucarasica","Cácota","Cachirá","Chinácota","Chitagá","Convención","Cucutilla","Durania","El Carmen","El Tarra","El Zulia","Gramalote","Hacarí","Herrán","Labateca","La Esperanza","La Playa","Los Patios","Lourdes","Mutiscua","Ocaña","Pamplona","Pamplonita","Puerto Santander","Ragonvalia","Salazar","San Calixto","San Cayetano (NOR)","Santiago","Sardinata","Silos","Teorama","Tibú","Toledo (NOR)","Villa Caro","Villa Del Rosario"],
        Quindío: ["Armenia (QUI)","Buenavista (QUI)","Calarca","Circasia","Cordoba","Filandia","Genova","La Tebaida","Montengro","Pijao","Quimbaya","Salento"],
        Risaralda: ["Pereira","Apía","Balboa (RIS)","Belén De Umbría","Dosquebradas","Guática","La Celia","La Virginia","Marsella","Mistrató","Pueblo Rico","Quinchia","Santa Rosa De Cabal","Santuario (RIS)"],
        Santander: ["Bucaramanga","Aguada","Albania (SAN)","Aratoca","Barbosa (SAN)","Barichara","Barrancabermeja","Betulia (SAN)","Bolívar (SAN)","Cabrera (SAN)","California","Capitanejo","Carcasí","Cepitá","Cerrito","Charalá","Charta","Chima","Chipatá","Cimitarra","Concepción (SAN)","Confines","Contratación","Coromoro","Curití","El Carmen De Chucurí","El Guacamayo","El Peñón (SAN)","El Playón","Encino","Enciso","Florián","Floridablanca","Galán","Gambita","Girón","Guaca","Guadalupe (SAN)","Guapotá","Guavatá","Guepsa","Hato","Jesús María","Jordán","La Belleza","Landázuri","La Paz (SAN)","Lebríja","Los Santos","Macaravita","Málaga","Matanza","Mogotes","Molagavita","Ocamonte","Oiba","Onzaga","Palmar","Palmas Del Socorro","Páramo","Piedecuesta","Pinchote","Puente Nacional","Puerto Parra","Puerto Wilches","Rionegro (SAN)","Sabana De Torres","San Andrés (SAN)","San Benito","San Gil","San Joaquín","San José De Miranda","San Miguel","San Vicente De Chucurí","Santa Bárbara","Santa Helena Del Opón","Simacota","Socorro","Suaita","Sucre","Surata","Tona","Valle De San José","Vélez","Vetas","Villanueva (SAN)","Zapatoca"],
        Sucre: ["Sincelejo","Buenavista (SUC)","Caimito","Coloso","Corozal","Coveñas","Chalán","El Roble","Galeras","Guaranda","La Unión (SUC)","Los Palmitos","Majagual","Morroa","Ovejas","Palmito","Sampués","San Benito Abad","San Juan Betulia","San Marcos","San Onofre","San Pedro (SUC)","Sincé","Sucre (SUC)","Santiago De Tolú","Tolú Viejo"],
        Tolima: ["Ibague","Alpujarra","Alvarado","Ambalema","Anzoátegui","Armero","Ataco","Cajamarca","Carmen De Apicalá","Casabianca","Chaparral","Coello","Coyaima","Cunday","Dolores","Espinal","Falan","Flandes","Fresno","Guamo","Herveo","Honda","Icononzo","Lerida","Libano","Mariquita","Melgar","Murillo","Natagaima","Ortega","Palocabildo","Piedras","Planadas","Prado","Purificación","Rioblanco","Roncesvalles","Rovira","Saldaña","San Antonio","San Luis (TOL)","Santa Isabel","Suárez","Valle De San Juan","Venadillo","Villahermosa","Villarrica"],
        "Valle del Cauca": ["Cali","Alcala","Andalucía","Ansermanuevo","Argelia (VALL)","Bolívar (VALL)","Buenaventura","Buga","Bugalagrande","Caicedonia","Calima","Candelaria","Cartago","Dagua","El Águila","El Cairo","El Cerrito","El Dovio","Florida","Ginebra","Guacarí","Jamundí","La Cumbre","La Unión (VALL)","La Victoria (VALL)","Obando","Palmira","Pradera","Restrepo (VALL)","Riofrio","Roldanillo","San Pedro (VALL)","Sevilla","Toro","Trujillo","Tuluá","Ulloa","Versalles","Vijes","Yotoco","Yumbo","Zarzal"],
        Arauca: ["Arauca","Arauquita","Cravo Norte","Fortul","Puerto Rondón","Saravena","Tame"],
        Casanare: ["Yopal","Aguazul","Chameza","Hato Corozal","La Salina","Maní","Monterrey","Nunchía","Orocué","Paz De Ariporo","Pore","Recetor","Sabanalarga","Sácama","San Luis De Palenque","Támara","Tauramena","Trinidad","Villanueva (CAS)"],
        Putumayo: ["Mocoa","Colón","Orito","Puerto Asis","Puerto Caicedo","Puerto Guzman","Puerto Leguizamo","Sibundoy","San Francisco (PUT)","San Miguel (PUT)","Santiago (PUT)","Valle Del Guamuez","Villa Garzon"],
        "San Andrés y Providencia": ["San Andrés (SAN A)","Providencia Y Santa Catalina"],
        Amazonas: ["Leticia","El Encanto","La Chorrera","La Pedrera","La Victoria (AMZ)","Miriti - Paraná","Puerto Alegria","Puerto Arica","Puerto Nariño","Puerto Santander (AMZ)","Tarapacá"],
        Guainía: ["Inírida","Barranco Mina","Mapiripan (GUA)","San Felipe","Puerto Colombia (GUA)","La Guadalupe","Cacahual","Pana Pana","Morichal"],
        Guaviare: ["San José Del Guaviare","Calamar (GUAV)","El Retorno","Miraflores"],
        Vaupés: ["Mitú","Caruru","Pacoa","Taraira","Papunahua","Yavaraté"],
        Vichada: ["Puerto Carreño","La Primavera","Santa Rosalía","Cumaribo"]

	
    }


    let departamentos = document.getElementById('00NDn00000FTrRm');
    let ciudades = document.getElementById('00NDn00000FUJYt');
    let departamentoSeleccionado = departamentos.value;

    ciudades.innerHTML = '<option value="">--Ninguno--</option>';

    if(departamentoSeleccionado !== ''){
        departamentoSeleccionado = listaCiudades[departamentoSeleccionado];
        departamentoSeleccionado.sort();

        departamentoSeleccionado.forEach(function (ciudad) {
           let opcion = document.createElement('option');
           opcion.value = ciudad;
           opcion.text = ciudad;
           ciudades.add(opcion); 
        });
    }
}

/*
function archivoTexto() {
    let archivoObtenido = document.getElementById("archivo").value;
    document.getElementById("00NDn00000J9QXX").value = archivoObtenido;
}

function postLeadToSFDC() {

    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
    };
  
    const oid = document.getElementById('oid').value;
    const retUrl = document.getElementById('retURL').value;
    const activo = document.getElementById('00NDn00000FTSmW').value;
    const origen = document.getElementById('lead_source').value;
    const compania = document.getElementById('company').value;
    const nombre = document.getElementById('first_name').value;
    const apellido = document.getElementById('last_name').value;
    const tipoIdetificacion = document.getElementById('00NDn00000FTR2t').value;
    const numeroIdentificacion = document.getElementById('00NDn00000FTR2y').value;
    const fechaNacimiento = document.getElementById('00NDn00000FTTBH').value;
    const aspiracionSalarial = document.getElementById('00NDn00000J9CQa').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const departamentoResidencia = document.getElementById('00NDn00000FTrRm').value;
    const ciudadResidencia = document.getElementById('00NDn00000FUJYt').value;
    const nivelEscolaridad = document.getElementById('00NDn00000FTSEH').value;
    const tituloAdquirido = document.getElementById('00NDn00000FTSEb').value;
    const instEducativa = document.getElementById('00NDn00000FTSHV').value;
    const estaEstudiando = document.getElementById('00NDn00000FTTMv').value;
    console.log(estaEstudiando);
    const tituloAspira = document.getElementById('00NDn00000FTTR8').value;
    const instEducActual = document.getElementById('00NDn00000FTd1C').value;
    const nivelActual = document.getElementById('00NDn00000FTTRD').value;
    const nivelIngles = document.getElementById('00NDn00000FTTZx').value;
    const tipoVinculacion = document.getElementById('00NDn00000J9CY6').value;
    const modalidadTrabajo = document.getElementById('00NDn00000J9CcY').value;
    const experienciaLaboral = document.getElementById('00NDn00000FTTja').value;
    const nombreEmpresa = document.getElementById('00NDn00000FTTsi').value;
    const cargo = document.getElementById('title').value;
    const jefeInmediato = document.getElementById('00NDn00000FTTtg').value;
    const fechaInicio = document.getElementById('00NDn00000FTUFZ').value;
    const fechaFinalizacion = document.getElementById('00NDn00000FTUJw').value;
    const otraEmpresa = document.getElementById('00NDn00000FTTsx').value;
    const otroCargo = document.getElementById('00NDn00000FTTtb').value;
    const otroJefe = document.getElementById('00NDn00000FTU75').value;
    const otraFechaInicio = document.getElementById('00NDn00000FTUJr').value;
    const otraFechaFin = document.getElementById('00NDn00000FTUK6').value;
    const archivo = document.getElementById('archivo').value;
    
    fetch(
      `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=${oid}&retURL=${retUrl}&00NDn00000FTSmW=${activo}&lead_source=${origen}&company=${compania}&first_name=${nombre}&last_name=${apellido}&00NDn00000FTR2t=${tipoIdetificacion}&00NDn00000FTR2y=${numeroIdentificacion}&00NDn00000FTTBH=${fechaNacimiento}&00NDn00000J9CQa=${aspiracionSalarial}&email=${email}&phone=${phone}&00NDn00000FTrRm=${departamentoResidencia}&00NDn00000FUJYt=${ciudadResidencia}&00NDn00000FTSEH=${nivelEscolaridad}&00NDn00000FTSEb=${tituloAdquirido}&00NDn00000FTSHV=${instEducativa}&00NDn00000FTTMv=${estaEstudiando}&00NDn00000FTTR8=${tituloAspira}&00NDn00000FTd1C=${instEducActual}&00NDn00000FTTRD=${nivelActual}&00NDn00000FTTZx=${nivelIngles}&00NDn00000J9CY6=${tipoVinculacion}&00NDn00000J9CcY=${modalidadTrabajo}&00NDn00000FTTja=${experienciaLaboral}&00NDn00000FTTsi=${nombreEmpresa}&title=${cargo}&00NDn00000FTTtg=${jefeInmediato}&00NDn00000FTUFZ=${fechaInicio}&00NDn00000FTUJw=${fechaFinalizacion}&00NDn00000FTTsx=${otraEmpresa}&00NDn00000FTTtb=${otroCargo}&00NDn00000FTU75=${otroJefe}&00NDn00000FTUJr=${otraFechaInicio}&00NDn00000FTUK6=${otraFechaFin}&00NDn00000J9QXX=${archivo}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
  
 */


//uekwfrdqugiihwzd
