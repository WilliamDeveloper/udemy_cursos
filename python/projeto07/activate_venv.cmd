set pasta_atual=%CD%
cd %pasta_atual%
echo %pasta_atual%

set var_activate=%pasta_atual%\venv\Scripts\activate.bat
echo '%var_activate%'
%var_activate%