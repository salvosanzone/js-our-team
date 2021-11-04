/**
1. Creiamo il nostro array di oggetti che      rappresentano ciascun membro del team.
    Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

2. stampiamo tutte le card del nostro team.

3. Utilizziamo poi gli input presenti nella pagina per  permettere all’utente di aggiungere nuovi membri del team. (se non fate tempo a realizzare questa parte va bene ugualmente e pensateci in ogni caso solo una volta stampata correttamente tutta la pagina)

 */

//creo un array al cui interno ci saranno tanti oggetti tanto quanti saranno gli elementi del nostro: 'our team'
//lui l ha chiamata item
const ourTeam = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'src="img/wayne-barnett-founder-ceo.jpg"'
  
   
  },
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'src="img/wayne-barnett-founder-ceo.jpg"'
  
   
  },
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'src="img/wayne-barnett-founder-ceo.jpg"'
  
   
  },
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'src="img/wayne-barnett-founder-ceo.jpg"'
  
   
  },
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'src="img/wayne-barnett-founder-ceo.jpg"'
  
   
  },
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'src="img/wayne-barnett-founder-ceo.jpg"'
  
   
  },
 
  
]
console.log('array contenente gli oggetti:',ourTeam);

//recupero il contenitore
const container = document.querySelector('.team-container');
//ripulisco html
container.innerHTML = '';

//reiteriamo per tutti gli elementi presenti all'intero di ourTeam

for(let i = 0; i < ourTeam.length; i++){
  console.log('iterazione:',i);
  //creo una card per ogni elemento
  const card = document.createElement('div');
  //richiamo la classe dal css
  card.className = 'team-card';


  //genero l'html che poi stamperò 
  card.innerHTML = `

  <div class="card-image">
    <img
      src"${ourTeam[i].foto}"
      alt="Wayne Barnett"
    />
  <div>
  <div class="card-text">
    <h3>${ourTeam[i].nome}</h3>
    <p>${ourTeam[i].ruolo}</p>
  </div>
  
  `;
  //appendo al container la card
  container.append(card);



}







