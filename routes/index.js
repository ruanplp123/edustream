var express = require('express');
var router = express.Router();


/*
 * Rotas GET de usuários
*/

/* GET login page */
router.get('/', function(req, res, next) {
  if (global.usuarioEmail && global.usuarioEmail != "") {
    res.redirect('home');
  }

  res.render('index', { titulo: 'EduStream - Login e Cadastro' });
});


/* GET home page */
router.get('/home', function(req, res, next) {
  verificarLogin(res);
  res.render('home', { titulo: 'EduStream - Home' });
});

/**
 * Rotas POST de usuários
*/

/* POST login */

const path = require('path'); // Só se ainda não tiver no topo

/* GET login em HTML puro */
router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

router.post('/login', async function(req, res, next) {
  const email = req.body.email.trim();
  const senha = req.body.senha.trim();

  const usuario = await global.banco.buscarUsuario({ email, senha });

  if (!usuario) {
    console.log('Login inválido!');
    return res.send('Email ou senha incorretos'); // ou: res.redirect('/login');
  }

  global.usuarioCodigo = usuario.idUsuario;
  global.usuarioEmail = usuario.emailUsuario;
  res.redirect('home');
});



/**
 * 
 * Funções diversas
 * 
 */

function verificarLogin(res)
{
  if (!global.usuarioEmail || global.usuarioEmail == "")
    res.redirect('/');
}



module.exports = router;