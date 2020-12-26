from typing import List, Union, Tuple

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