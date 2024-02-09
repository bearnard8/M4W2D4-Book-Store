# Book Shop

## 1.0 Consegna

    1.1 Creare un marketplace di libri online
        1.1.1 una homepage che mostri tutti i libri con delle card di bootstrap
            1.1.1.1 un input di testo per cercare i libri
                1.1.1.1.1 fai si che l'input di testo, anche se compilato parzialmente, mostra un risultato di ricerca rispetto ai caratteri inseriti,
                          partendo da un minimo di 3 caratteri. SUGGERIMENTO: usa filter()
            1.1.1.2 renderizza le card contenenti i libri corrispondenti ai criteri di ricerca
                1.1.1.2.1 per renderizzare le card usa i template literals (``) e .forEach o .map
                1.1.1.2.2 le card dovrebbero avere un pulsante per aggiungere al carrello e uno per "saltare" questo prodotto
                    1.1.1.2.2.1 quando "aggiungi al carrello" viene cliccato il libro dev'essere aggiunto alla lista dinamica del carrello
                    1.1.1.2.2.2 cambia lo stile della card quando il libro viene aggiunto al carrello (border, color o badge vanno bene)
        1.1.2. Una sezione per il carrello
            1.1.2.1 dai la possibilità di eliminare i singoli libri dal carrello
            1.1.2.2 conta gli elementi nel carrello e dai il totale in fondo
            1.1.2.3 mostra il prezzo totale del carrello
            1.1.2.4 crea un pulsante per svuotare il carrello

## 2.0 Risorse

    2.1 API: https://striveschool-api.herokuapp.com/books

    2.2 Librerie/Framework
        2.2.1 Bootstrap
            2.2.1.1 CSS: <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
            2.2.1.2 POPPER: <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
            2.2.1.3 JS: <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
        2.2.2 Fontawesome
            2.2.2.1 <script src="https://kit.fontawesome.com/5134816b72.js" crossorigin="anonymous"></script>
        2.2.3 Google Fonts

## 3.0 Procedimenti

    3.1 Funzioni
        3.1.1 fetchResult(): una funzione per fetchare l'API
        3.1.2 filterRes(): una funzione per filtrare i risultati in base alla ricerca
        3.1.3 appendRes(): una funzione per creare le card relativi ai risultati filtrati
        3-1-4: makeCart(): una funzione che crea il carrello

