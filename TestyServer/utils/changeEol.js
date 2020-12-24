const fs = require('fs');
const targetFolder = './deploy_scripts/';

fs.readdir(targetFolder, (err, files) => {
    files.forEach(file => {
        let target = targetFolder + file;
        let content = fs.readFileSync(target, 'UTF-8');
        content = content.replace(/\r\n/g, "\n");
        fs.writeFileSync(target, content, "UTF-8");
    });
});
