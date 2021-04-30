
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
    apiKey: "AIzaSyD2mAXXF1R-MN8eV7zp_VJ8jFLCzwNVNyA",
    authDomain: "teste-api-classroom-f474e.firebaseapp.com",
    databaseURL: "https://teste-api-classroom-f474e-default-rtdb.firebaseio.com",
    projectId: "teste-api-classroom-f474e",
    storageBucket: "teste-api-classroom-f474e.appspot.com",
    messagingSenderId: "815422228927",
    appId: "1:815422228927:web:150746092c6e0b2119390a",
    measurementId: "G-0Z5NTE3S7B"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    console.log("Success DB connect");

    /*
    id= 0 / Emergências pediátricas
    id= 1 / IFMSA: Simulação de Consulta em Libras
    id= 2 / Intubação orotraqueal
    id= 3 / OSCE
    id= 4 / USG na emergência
    id= 5 / ATLS
    id= 6 / Como montar um currículo Lattes?
    id= 7 / Cricotireotomia de Urgência
    id= 8 / ECG em 60 minutos
    */

    // Obtendo link das salas e adicionando aos inputs
    firebase.database().ref('workshop').once('value', function (snapshot) {
        var workshop_list = snapshot.val();
        console.log(workshop_list)
        for (i in workshop_list) {
            document.getElementById('w' + i).value = workshop_list[i].link
            console.log(workshop_list[i].nome)
        }
    })

    function atualizar_link(id) {
        v_input = document.getElementById('w' + id).value;
        firebase.database().ref('workshop/' + id.toString() + '/link').set(v_input)
        alert("Valor alterado")
        location.reload();
    }
    