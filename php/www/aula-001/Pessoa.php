<?php
/**
 * Created by IntelliJ IDEA.
 * User: willi
 * Date: 10/04/2021
 * Time: 19:59
 */

class Pessoa
{

    public $nome;
    private $idade;
    /**
     * @return mixed
     */
    public function getFalar()
    {
        return 'estou falando';
    }

    /**
     * @return mixed
     */
    public function getIdade()
    {
        return $this->idade;
    }

    /**
     * @param mixed $idade
     */
    public function setIdade($idade)
    {
        $this->idade = $idade;
    }





}

$william= new Pessoa();
$william->nome= "william pacheco";
$william->setIdade(18);
echo $william->nome;
echo $william->getIdade();

