quando quando tu nao especifica a camada ele trabalha por padrao na largura de 576
se apenas dizer col-6 e nao col-md-6 
vai ser aplicado o mesmo css para todas resolucoes de camada

caso so exista 2 classe de camada 
vai prevalecer a de maior resolucao
para as camadas restantes

/* 
    5 camadas(breakpoints de media query) do bootstrap
    xs  < 576 (essa camada xs nao existe mais agora eh so escrever direto sem a sigle "col-6" e nao mais "col-xs-6")
    sm  >= 576
    md  >= 768
    lg  >= 992
    xl  >= 1200
*/


<div class="container">

    <div class="row">
        <div class="col-12 col-sm-4">col-12 col-sm-4</div>
        <div class="col-6 col-sm-8">col-6 col-sm-8</div>
    </div>
</div>

toda col precisa de uma row 
e toda row precisa de um dos 2 tipos de container para funcionar

- grid (camadas grid usadas pelo bootstrap)
- order (ordem que elementos aparece)
- offset (quando queremos tirar uma coluna nao util mas continuar o layout)
- nesting (aninhamento de grid system)(o espaco util de cada celula vira uma grid)
- fill, grow, shrink
- wrap
- tipografia

