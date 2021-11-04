/**
1. Creiamo il nostro array di oggetti che      rappresentano ciascun membro del team.
    Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

2. stampiamo tutte le card del nostro team.

3. Utilizziamo poi gli input presenti nella pagina per  permettere all’utente di aggiungere nuovi membri del team. (se non fate tempo a realizzare questa parte va bene ugualmente e pensateci in ogni caso solo una volta stampata correttamente tutta la pagina)

 */

//creo un array al cui interno ci saranno tanti oggetti tanto quanti saranno gli elementi del nostro: 'our team'

const ourTeam = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief editor',
    foto: 'img/angela-caroll-chief-editor.jpg'
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'img/wayne-barnett-founder-ceo.jpg'
  },
  
]
console.log('array contenente gli oggetti:',ourTeam);

//stampo l'array sull' html 

let html = ''; //stringa vuota
//adesso con un ciclo for leggo tutti soggetti che fanno parte del ourTeam con i relativi contenuti(objects dell'array)
for(let i = 0; i<ourTeam.length; i++){
  //ogni singolo soggetto del team è uguale a ourTeam[i]
  const elementOurTeam = ourTeam[i];
  console.log('soggetto:',elementOurTeam);

  //uso un ciclo for in
  for(let i in elementOurTeam){
    //genero l'html 
    html = `
    <div>
      <img
      src="img/wayne-barnett-founder-ceo.jpg"
      />
      <h3>Wayne Barnett</h3>
      <p>Founder & CEO</p>
    </div>
    <div>
      <img
      src="img/wayne-barnett-founder-ceo.jpg"
      />
      <h3>Wayne Barnett</h3>
      <p>Founder & CEO</p>
    </div>
    <div>
      <img
      src="img/wayne-barnett-founder-ceo.jpg"
      />
      <h3>Wayne Barnett</h3>
      <p>Founder & CEO</p>
    </div>
    <div>
      <img
      src="img/wayne-barnett-founder-ceo.jpg"
      />
      <h3>Wayne Barnett</h3>
      <p>Founder & CEO</p>
    </div>
    <div>
      <img
      src="img/wayne-barnett-founder-ceo.jpg"
      />
      <h3>Wayne Barnett</h3>
      <p>Founder & CEO</p>
    </div>
    <div>
      <img
      src="img/wayne-barnett-founder-ceo.jpg"
      />
      <h3>Wayne Barnett</h3>
      <p>Founder & CEO</p>
    </div>
  
    
  
    
    
    
    
    
    
    
    `;
    
  }

}


console.log(html);







//stampo l'html generato
document.getElementById('output').innerHTML = html;
