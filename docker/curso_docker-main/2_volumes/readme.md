docker build -t phpmessages
docker run -d -p 8080:80 --name  phpmessages_container phpmessages
docker run -d -p 8080:80 --name phpmessages_container --rm -v /data phpmessages
docker run -d -p 8080:80 --name phpmessages_container --rm -v phpvolume:/var/www/html/ phpmessages
docker run -d -p 8080:80 --name phpmessages_container --rm -v C:\_dev_\work\github\udemy_cursos\docker\curso_docker-main\2_volumes:/var/www/html/ phpmessages
docker ps 

http://localhost:8080/index.php
http://localhost:8080/messages/msg-1.txt

"cmd.exe" /k ""%CMDER_ROOT%\vendor\init.bat"" 
"cmd.exe" /k ""D:\_dev_\bin\cmder\vendor\init.bat"" 