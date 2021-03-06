/*var element = React.createElement('div', {}, 'Hello world!'); */

/*
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, 'Harry Potter'),
        React.createElement('p', {}, 'Film o czarodzieju')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, 'Król Lew'),
        React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
      )
    )
  ); 
ReactDOM.render(element, document.getElementById('app')); 
*/

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: 'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?cs=srgb&dl=ancient-arch-arch-bridge-507410.jpg&fm=jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=animal-big-big-cat-247502.jpg&fm=jpg'
  },
  {
    id: 3,
    title: 'Olimp w ogniu',
    desc: 'Film o ataku terrorystycznym',
    img: 'https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg?cs=srgb&dl=administration-architecture-building-129112.jpg&fm=jpg'
  },
  {
    id: 4,
    title: 'Transporter',
    desc: 'Film o kurierze',
    img: 'https://images.pexels.com/photos/1135379/pexels-photo-1135379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    
  },
  {
    id: 5,
    title: 'Szybcy i wściekli',
    desc: 'Film o wyścigach',
    img: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
    
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img, width: 300})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app')); 

