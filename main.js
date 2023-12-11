let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #000000;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0000ff;">Estoy aprendiendo a programar páginas web, a realizar mantenimiento y al cableado de red.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
