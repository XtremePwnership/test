set /p commit_msg="Commit message: "
git add .
git commit -m "a %commit_msg%"
IF "%commit_msg%"=="" (git commit -m "whateva") ELSE (git commit -m "%commit_msg%")
git push origin main
PAUSE