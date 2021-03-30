# loop array inside object
{{#with sqlResult}}
    {{#each nomeColunas as |coluna|}}
            <th scope="col">{{this}}</th>
    {{/each}}
{{/with}}

#loop objeto
{{#each row}}
    <!--indexColuna: {{@index}}-->
    <!--<br>-->
    <!--chave: {{@key}}-->
    <!--<br>-->
    <!--valor: {{this}}-->
    <!--<br>-->
    <!--<th scope="row">1</th>-->
    <td>{{this}}</td>
{{/each}}

<!--{{.}}-->
<!--{{@index}}-->
<!--{{@key}}-->
<!--{{@root}}-->
<!--{{@first}}-->
<!--{{@last}}-->
<!--{{@this}}-->