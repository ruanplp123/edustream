INTEGRANTES DA EQUIPE: Leonardo Deucher, Ruan Pablo de Lima Pereira e Carlos Miguel Destro


MariaDB [edustream]> create table usuario(
    -> idUsuario int primary key auto_increment,
    -> nomeUsuario varchar(100),
    -> emailUsuario varchar(100),
    -> idadeUsuario int,
    -> senhaUsuario varchar(50));
