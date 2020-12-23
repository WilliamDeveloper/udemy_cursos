set pasta_atual=%CD%
echo %pasta_atual%
cd %pasta_atual%
set var_activate = %pasta_atual%\venv\Scripts\activate.bat
echo %var_activate%
%var_activate%