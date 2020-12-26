from typing import List, Union, Tuple, Dict, Any, NewType, Callable

#primitivos
numero : int = 10
flutuante : float = 10.5
booleano : bool = False
string : str = 'William'

# sequencias
lista : list = [1,2,3]
tupla : tuple = (1,2,3)

# sequencias tipadas
lista : List[int] = [1,2,3]
lista : List[Union[int,str]] = [1,2,3, 'William']
tupla : Tuple = (1,2,3)
tupla : Tuple[int, int, int, str] = (1,2,3, 'william')
tupla : Tuple = (1,2,3, 'william')

# dicionarios
pessoa : Dict[str,str] = {'nome': 'william', 'sobrenome':'pacheco'}
pessoa : Dict[str, Union[str,int]] = {'nome': 'william', 'sobrenome':'pacheco', 'idade':18}
pessoa : Dict[str, Any] = {'nome': 'william', 'sobrenome':'pacheco', 'idade':18}
pessoa : Dict[str, Union[str, int,List[int]]] = {'nome': 'william', 'sobrenome':'pacheco', 'idade':18, 'l':[1,2]}

# alias para tipo complexo
meu_dict = Dict[str, Union[str, int,List[int]]]
pessoa : meu_dict = {'nome': 'william', 'sobrenome':'pacheco', 'idade':18, 'l':[1,2]}

#meu outro tipo
UserId = NewType('UserId', int)
user_id = UserId(12321312)

def retorna_funcao( funcao : Callable[[],None]) -> Callable:
    return funcao


def fala_oi():
    print('oi')


retorna_funcao(fala_oi)()